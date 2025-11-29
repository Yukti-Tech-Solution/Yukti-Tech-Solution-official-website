import { ExternalLink, ArrowRight, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  className?: string;
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
 * ProjectCard component - displays a project in a card format
 */
export function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  const categoryColor = categoryColors[project.category] || categoryColors['web-app'];
  const categoryLabel = categoryLabels[project.category] || project.category;

  return (
    <Card
      className={cn(
        'group relative overflow-hidden cursor-pointer transition-all duration-300',
        'hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1',
        'border-2 hover:border-primary/50',
        'bg-card/50 backdrop-blur-sm',
        className
      )}
      onClick={onClick}
    >
      {/* Image container with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <OptimizedImage
          src={project.images.thumbnail}
          alt={project.title}
          className="transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge and Customizable badge */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <Badge className={cn('backdrop-blur-sm', categoryColor)} variant="outline">
            {categoryLabel}
          </Badge>
          {project.isCustomizable && (
            <Badge
              variant="outline"
              className="bg-green-500/10 text-green-500 border-green-500/20 backdrop-blur-sm font-medium"
            >
              Customizable
            </Badge>
          )}
        </div>

        {/* Action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/60 backdrop-blur-sm">
          {/* Show "View Live" button only if liveUrl exists */}
          {project.liveUrl && (
            <Button
              size="sm"
              variant="secondary"
              className="backdrop-blur-sm bg-blue-600 hover:bg-blue-700 text-white"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live
            </Button>
          )}

          {/* Show "Contact Us" button for customizable projects */}
          {project.contactRequired && (
            <Button
              size="sm"
              variant="secondary"
              className="backdrop-blur-sm bg-green-600 hover:bg-green-700 text-white"
              onClick={(e) => {
                e.stopPropagation();
                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback: try to find contact link in navigation
                  window.location.href = '/#contact';
                }
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          )}

          {/* If neither, show generic "View Details" */}
          {!project.liveUrl && !project.contactRequired && (
            <div className="text-center">
              <ArrowRight className="w-12 h-12 text-white mx-auto mb-2" />
              <span className="text-white font-semibold text-lg">View Details</span>
            </div>
          )}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {project.tagline}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Special CTA for customizable projects */}
        {project.contactRequired && project.ctaDescription && (
          <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-400 text-xs font-medium">
              💡 {project.ctaDescription}
            </p>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs font-medium">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}


