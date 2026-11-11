import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AnimatedBackground from "@/components/AnimatedBackground";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services } from "@/assets/data/Services";
import { projects } from "@/assets/data/Projects";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      projectRefs.current.slice(0, -1).forEach((project) => {
        ScrollTrigger.create({
          trigger: project,
          start: "top top",
          end: "+=50%",
          pin: project,
          pinSpacing: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Joshua Onyeka | Software Engineer "
        description="Building exceptional web applications, mobile apps, and digital experiences. React, Next.js, TypeScript, UI/UX specialist delivering scalable solutions."
        keywords={["software engineer", "web developer", "react", "next.js", "typescript", "ui/ux", "fullstack", "portfolio", "freelance developer"]}
        image="https://joshwebfolio.vercel.app/og-image-home.jpg"
        url="https://joshwebfolio.vercel.app/"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden grid-pattern md:pt-24">
        <AnimatedBackground />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-primary animate-fade-in">
              Architecting digital futures
            </div>

            <h1 className="mb-5 animate-fade-in-up leading-[0.9] text-foreground">
              Elevating Ideas.
              <span className="block text-gradient">Building Tomorrow.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base text-muted-foreground animate-fade-in md:text-xl" style={{ animationDelay: "200ms" }}>
              I design and build high-converting digital products that blend product strategy, clean engineering, and premium UX for brands that want to
              scale with confidence.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border group shadow-[0_20px_60px_rgba(255,255,255,0.12)]">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border bg-background/40 hover:border-primary hover:bg-background/80">
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { value: "5+", label: "Years building" },
                { value: "25+", label: "Projects shipped" },
                { value: "100%", label: "Focus on quality" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Marquee */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Powered By <span className="text-gradient">Modern Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Cutting-edge technologies driving exceptional digital experiences</p>
          </div>
        </div>
        <InfiniteMarquee />
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.22em] text-primary">Core capabilities</span>
            <h2 className="mb-3">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-xl">
              Comprehensive solutions powered by cutting-edge technology and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 100} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary/30 bg-background/40 hover:border-primary hover:bg-background/80">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
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
              <div
                key={project.id}
                ref={(el) => {
                  if (el) projectRefs.current[index] = el;
                }}
              >
                <ProjectCard {...project} live={project.live ?? ""} github={project.github ?? ""} index={index} />
              </div>
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
