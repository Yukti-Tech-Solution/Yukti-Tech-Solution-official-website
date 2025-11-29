import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectsSection } from './ProjectsSection';

/**
 * FeaturedProjects - Shows a limited selection of projects on the homepage
 */
export function FeaturedProjects() {
  return (
    <div>
      <ProjectsSection featured={true} limit={6} showFilters={false} />
      
      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-12 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
        <Button asChild size="lg" variant="outline" className="group">
          <Link to="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

