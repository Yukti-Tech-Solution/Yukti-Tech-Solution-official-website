import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProjectsSection } from '@/components/Projects/ProjectsSection';

/**
 * Projects Page - Full portfolio showcase
 */
const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProjectsSection showFilters={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

