import { useState } from 'react';
import { X, ExternalLink, Github, Calendar, Users, Building, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Project, getRelatedProjects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRelatedProjectClick?: (projectId: string) => void;
}

const categoryColors: Record<string, string> = {
  'web-app': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'ai-ml': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'educational': 'bg-green-500/10 text-green-500 border-green-500/20',
  'business': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
};

const categoryLabels: Record<string, string> = {
  'web-app': 'Web App',
  'ai-ml': 'AI/ML',
  'educational': 'Educational',
  'business': 'Business',
};

/**
 * ProjectDetailModal - Comprehensive project details in a modal dialog
 */
export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
  onRelatedProjectClick
}: ProjectDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project) return null;

  const categoryColor = categoryColors[project.category] || categoryColors['web-app'];
  const categoryLabel = categoryLabels[project.category] || project.category;
  const allImages = [project.images.thumbnail, ...(project.images.screenshots || [])];
  const relatedProjects = getRelatedProjects(project.id, 3);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge className={cn('font-medium', categoryColor)} variant="outline">
                  {categoryLabel}
                </Badge>
                <DialogTitle className="text-3xl font-bold">
                  {project.title}
                </DialogTitle>
              </div>
              <p className="text-lg text-muted-foreground font-medium mt-1">
                {project.tagline}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-180px)]">
          <div className="px-6 py-6 space-y-8">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                className="flex-1 sm:flex-initial"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live Site
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                className="flex-1 sm:flex-initial"
              >
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </Button>
            </div>

            {/* Image Gallery */}
            {allImages.length > 0 && (
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <OptimizedImage
                    src={allImages[selectedImageIndex]}
                    alt={`${project.title} - Screenshot ${selectedImageIndex + 1}`}
                    className="w-full h-full"
                    loading="eager"
                  />
                </div>
                {allImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {allImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          'relative flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-all',
                          selectedImageIndex === index
                            ? 'border-primary ring-2 ring-primary/20'
                            : 'border-transparent hover:border-primary/50 opacity-70 hover:opacity-100'
                        )}
                      >
                        <OptimizedImage
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tabs for organized content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">About This Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Project Metadata */}
                {(project.client || project.duration || project.teamSize) && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    {project.client && (
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Client</p>
                          <p className="font-medium">{project.client}</p>
                        </div>
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-medium">{project.duration}</p>
                        </div>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Team Size</p>
                          <p className="font-medium">{project.teamSize} members</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Highlights</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>

              {/* Features Tab */}
              <TabsContent value="features" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Technical Tab */}
              <TabsContent value="technical" className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-sm py-1.5 px-3"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technical highlights for MCS Chatbot */}
                {project.id === 'mcs-chatbot' && (
                  <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-lg">Architecture & Implementation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>RAG Architecture:</strong> Implemented retrieval-augmented generation
                          for context-aware responses using vector embeddings and semantic search.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Vector Database:</strong> Utilized Supabase with pgvector extension
                          for efficient similarity search and storage.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Dual LLM Support:</strong> Integrated both Groq API and Google Gemini
                          for enhanced reliability and fallback capabilities.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>
                          <strong>Document Processing:</strong> PDF parsing and chunking with
                          Sentence Transformers for optimal embedding generation.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedProjects.map((relatedProject) => (
                    <ProjectCard
                      key={relatedProject.id}
                      project={relatedProject}
                      onClick={() => {
                        onOpenChange(false);
                        if (onRelatedProjectClick) {
                          setTimeout(() => onRelatedProjectClick(relatedProject.id), 300);
                        }
                      }}
                      className="h-full"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}


