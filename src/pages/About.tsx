import { CheckCircle2, Download, Target, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { techStack } from "@/assets/data/Services";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence in Execution",
      description: "I don't cut corners. Every line of code, every pixel, and every interaction is crafted with meticulous attention to detail.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our success. I build lasting partnerships through transparent communication and collaborative problem-solving.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "I stay ahead of the curve, continuously learning and adopting cutting-edge technologies to deliver future-proof solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Joshua Onyeka | Software Engineer "
        description="Years of experience building digital products. Skills in React, Next.js, TypeScript, UI/UX design. Hackathon winner passionate about clean code and user experiences."
        keywords={[
          "about",
          "software engineer",
          "joshua onyeka",
          "ui/ux designer",
          "react developer",
          "fullstack",
          "skills",
          "experience",
          "portfolio",
        ]}
        image="https://joshwebfolio.vercel.app/og-image-about.jpg"
        url="https://joshwebfolio.vercel.app/about"
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.22em] text-primary">Profile</span>
            <h1 className="mb-6 animate-fade-in-up">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-base text-muted-foreground animate-fade-in md:text-xl" style={{ animationDelay: "200ms" }}>
              I'm a passionate Software Engineer and designer dedicated to building digital products that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">
                My <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-base leading-relaxed md:text-lg">
                  For the past years, I've honed my skills building digital products, thriving in collaborative teams. This journey includes a proud
                  hackathon victory with my team. My unwavering philosophy: software development isn't just a service; it's a dedicated craft that
                  demands passion and precision.
                </p>
                <p className="text-base leading-relaxed md:text-lg">
                  Every project I take on is approached with the same rigor and attention to detail that I'd want for my own products. I believe in
                  writing clean, maintainable code and creating interfaces that users actually enjoy using.
                </p>
                <p className="text-base leading-relaxed md:text-lg">
                  Whether you need a full-stack web application, a mobile app, or help scaling your existing infrastructure, I bring both technical
                  expertise and a designer's eye for detail to every project.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border group">
                  <a href="/Joshua_Onyeka_Resume.pdf" download="Joshua_Onyeka_Resume.pdf">
                    Resume
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="h-full w-full object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.22em] text-primary">Values</span>
            <h2 className="mb-4">
              My <span className="text-gradient">Approach</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-xl">The principles that guide every decision I make.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="group bg-card/80 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/80 md:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <value.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
              How I <span className="text-gradient">Work</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Agile Development",
                  description:
                    "I work in iterative sprints, delivering incremental value and maintaining flexibility to adapt to changing requirements.",
                },
                {
                  title: "Security-First Architecture",
                  description:
                    "Security isn't an afterthought—it's baked into every layer of my development process, from initial design to deployment.",
                },
                {
                  title: "Scalable Solutions",
                  description:
                    "I build with growth in mind. My architectures are designed to handle increased load without requiring complete rewrites.",
                },
                {
                  title: "Continuous Communication",
                  description: "Regular check-ins, progress reports, and transparent project tracking ensure you're always in the loop.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-3 bg-card rounded-xl border-border hover:border-primary transition-all duration-300 hover-lift text-center"
              >
                <div className="flex flex-col items-center gap-2">
                  {tech.name}
                  <img src={tech.img} alt="stack image" className="w-12 h-12 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
