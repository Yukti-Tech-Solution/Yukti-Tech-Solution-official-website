import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Brain, MessageSquare, Smartphone, Code } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Beautiful, responsive websites built with modern frameworks. Tailored to your brand and optimized for performance.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Cutting-edge AI solutions that automate processes, extract insights, and drive intelligent decision-making.",
  },
  {
    icon: MessageSquare,
    title: "Large Language Model Integration",
    description: "Leverage the power of LLMs to create intelligent chatbots, content generators, and conversational AI.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
  },
  {
    icon: Code,
    title: "Bespoke Software Solutions",
    description: "Custom software engineered to solve your unique business challenges with scalable, maintainable code.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of technology services designed to help
            your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="card-hover border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
