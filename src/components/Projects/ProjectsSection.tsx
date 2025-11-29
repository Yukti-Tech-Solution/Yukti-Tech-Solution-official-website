import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  projects, 
  ProjectCategory, 
  getAllCategories, 
  getAllTechnologies,
  searchProjects,
  sortProjects,
  type SortOption
} from '@/data/projects';
import { Skeleton } from '@/components/ui/skeleton';

interface ProjectsSectionProps {
  featured?: boolean;
  limit?: number;
  showFilters?: boolean;
  className?: string;
}

/**
 * ProjectsSection - Main component for displaying projects with filters and search
 */
export function ProjectsSection({ 
  featured = false, 
  limit,
  showFilters = true,
  className 
}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isLoading] = useState(false);

  // Get all available categories and technologies
  const categories = getAllCategories();
  const technologies = getAllTechnologies();

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      result = searchProjects(searchQuery);
      // Apply category filter to search results
      if (selectedCategory !== 'all') {
        result = result.filter(p => p.category === selectedCategory);
      }
    }

    // Filter by technologies
    if (selectedTechnologies.length > 0) {
      result = result.filter(p =>
        selectedTechnologies.some(tech => p.technologies.includes(tech))
      );
    }

    // Sort projects
    result = sortProjects(result, sortBy);

    // Limit for featured section
    if (limit) {
      result = result.slice(0, limit);
    }

    return result;
  }, [selectedCategory, searchQuery, selectedTechnologies, sortBy, limit]);

  const selectedProjectData = selectedProject
    ? projects.find(p => p.id === selectedProject)
    : null;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedTechnologies([]);
    setSortBy('newest');
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    searchQuery.trim() !== '' || 
    selectedTechnologies.length > 0;

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  if (isLoading) {
    return (
      <section className={`section-padding bg-secondary/30 ${className || ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-video w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={`section-padding bg-secondary/30 ${className || ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {featured ? 'Featured Projects' : 'Our Projects'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {featured
              ? 'Explore some of our recent work showcasing our expertise and innovation'
              : 'Explore our portfolio of successful projects that showcase our expertise across various industries and technologies.'}
          </p>
        </div>

        {/* Filters and Search */}
        {showFilters && (
          <div className="mb-8 space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Category Filter */}
              <ToggleGroup
                type="single"
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory((value || 'all') as ProjectCategory | 'all')}
                className="flex-wrap justify-center"
              >
                <ToggleGroupItem value="all" aria-label="All projects">
                  All
                </ToggleGroupItem>
                {categories.map((category) => (
                  <ToggleGroupItem
                    key={category}
                    value={category}
                    aria-label={`Filter by ${category}`}
                  >
                    {category === 'web-app' ? 'Web Apps' :
                     category === 'ai-ml' ? 'AI/ML' :
                     category === 'educational' ? 'Educational' :
                     category === 'business' ? 'Business' : category}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>

              {/* Sort and Clear Filters */}
              <div className="flex gap-2 items-center">
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Technology Filter (collapsible) */}
            {selectedTechnologies.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <span className="text-sm text-muted-foreground">Technologies:</span>
                {selectedTechnologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    onClick={() => toggleTechnology(tech)}
                  >
                    {tech}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}

            {/* Technology Selection */}
            <details className="group">
              <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-center">
                <Filter className="h-4 w-4 inline mr-1" />
                Filter by Technology
              </summary>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant={selectedTechnologies.includes(tech) ? 'default' : 'outline'}
                    className="cursor-pointer transition-colors"
                    onClick={() => toggleTechnology(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </details>
          </div>
        )}

        {/* Results Count */}
        {showFilters && (
          <div className="mb-6 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
            Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-fade-in"
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground mb-4">No projects found</p>
            <p className="text-sm text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            {hasActiveFilters && (
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            )}
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProjectData}
          open={!!selectedProjectData}
          onOpenChange={(open) => !open && setSelectedProject(null)}
          onRelatedProjectClick={(projectId) => setSelectedProject(projectId)}
        />
      </div>
    </section>
  );
}

