import { Card, CardContent } from "@/components/ui/card";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.png";
import founder3 from "@/assets/founder-3.jpg";
import founder4 from "@/assets/founder-4.jpg";

const founders = [
  {
    name: "Pranav P. Kapase",
    role: "Co-Founder & CEO",
    bio: "A visionary Software Engineer with expertise in Business Analysis and Intelligence.",
    image: founder1,
  },
  {
    name: "Vedant R. Sawaleshwarkar",
    role: "Co-Founder & CTO",
    bio: "A Full-Stack Web Developer with extensive experience in modern web technologies and Artificial Intelligence.",
    image: founder2,
  },
  {
    name: "Vaibhav S. Waghalkar",
    role: "Co-Founder & Head of Engineering",
    bio: "A Full-Stack Web and AI Developer specializing in AI technologies, Large Language Models (LLMs), and advanced web frameworks.",
    image: founder3,
  },
  {
    name: "Lahu K. Chavan",
    role: "Co-Founder & COO",
    bio: "An expert Data Analyst driving operational excellence and data-driven strategy.",
    image: founder4,
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Founding Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are four passionate founders united by a vision to create innovative
            technology solutions that solve real-world problems. Our diverse expertise
            in development, AI, and design allows us to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <Card
              key={founder.name}
              className="card-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                <p className="text-sm text-primary mb-3">{founder.role}</p>
                <p className="text-sm text-muted-foreground">{founder.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
