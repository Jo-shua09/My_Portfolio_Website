import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services } from "@/assets/data/Services";
import { projects } from "@/assets/data/Projects";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern md:pt-22">
        <AnimatedBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-fade-in">
              <span className="text-primary font-medium font-mono text-xs md:text-sm">Architecting Digital Futures</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Elevating Ideas. Building Tomorrow's Software Today.</h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in md:leading-relaxed" style={{ animationDelay: "200ms" }}>
              As a dedicated Software Developer, I build the core of innovation. My work combines meticulous engineering with insightful design to
              create powerful, user-centric platforms designed for seamless operation and lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:border-primary">
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-3xl font-bold mb-1 md:mb-4">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions powered by cutting-edge technology and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 100} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:border-primary">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 md:mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Showcasing my commitment to excellence and innovation</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} {...project} live={project.live ?? ""} github={project.github ?? ""} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:border-primary">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-6">
                Why <span className="text-gradient">Work</span> With Me
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I don't just write code—I architect solutions that drive business growth, enhance user experiences, and position you ahead of the
                competition.
              </p>

              <div className="space-y-4">
                {[
                  "Agile methodology for rapid, iterative development",
                  "Security-first architecture and best practices",
                  "Scalable solutions built for long-term growth",
                  "Transparent communication and project management",
                  "24/7 support and maintenance",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 animate-float" />
              <div className="absolute inset-3 md:inset-8 rounded-2xl bg-card border border-primary/20 grid-pattern" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <AnimatedBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Build Something <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let's discuss how we can transform your vision into a powerful digital reality.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
