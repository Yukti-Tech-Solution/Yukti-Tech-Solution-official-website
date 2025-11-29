import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ByteFest 2K25",
    shortDescription: "College tech festival website with registrations and data management",
    description:
      "We built and managed the ByteFest 2K25 event website, handling public pages, online registrations, data management, and organizer workflows.",
    challenge:
      "Create a fast, reliable event site with clear info architecture and robust registration handling under peak traffic.",
    solution:
      "Implemented a performant Vite + React site, integrated forms and admin data handling, and deployed globally for low-latency access.",
    technologies: ["Vite", "React", "Tailwind CSS", "Netlify", "Forms", "Admin Console"],
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise
            across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <Card className="col-span-1 md:col-span-2 lg:col-span-3 card-hover">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl font-semibold mb-3">Projects coming soon</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We are crafting an exciting showcase of our latest work. Stay tuned!
                </p>
              </CardContent>
            </Card>
          ) : (
            projects.map((project, index) => (
              <Card
                key={project.id}
                className="card-hover overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {projects.length > 0 && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-4">
                    {selectedProject.title}
                  </DialogTitle>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Overview</h4>
                    <DialogDescription className="text-base">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">{selectedProject.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                    <p className="text-muted-foreground">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedProject.title === "ByteFest 2K25" && (
                    <div>
                      <a
                        href="https://bytefest2k25.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
        )}
      </div>
    </section>
  );
};

export default Projects;
