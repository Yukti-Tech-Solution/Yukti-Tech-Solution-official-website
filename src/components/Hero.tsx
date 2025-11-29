import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Innovative Tech Solutions
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            for the Modern World
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
          We are a team of passionate founders building custom websites, AI solutions,
          LLM applications, and software to solve real-world problems.
        </p>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
