import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { MobileProjectCard } from "@/components/MobileProjectCard";
import { projects, mobileProjects } from "@/assets/data/Projects";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const projectRefs = useRef<HTMLDivElement[]>([]);

  type WebProject = (typeof projects)[number];
  type MobileProject = (typeof mobileProjects)[number];
  type PortfolioProject = WebProject | MobileProject;

  const filters = ["All", "Web Application", "Mobile Application"];

  const allProjects: PortfolioProject[] = [...projects, ...mobileProjects];
  const filteredProjects = activeFilter === "All" ? allProjects : allProjects.filter((p) => p.category === activeFilter);

  const isMobileProject = (project: PortfolioProject): project is MobileProject => project.category === "Mobile Application";

  useEffect(() => {
    // Clear stale refs completely before truncation
    projectRefs.current = [];
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);

    const ctx = gsap.context(() => {
      projectRefs.current.slice(0, -1).forEach((project) => {
        if (project) {
          ScrollTrigger.create({
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            pin: project,
            pinSpacing: false,
            once: true,
          });
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio | Joshua Onyeka - Software Engineer"
        description="Explore my showcase of successful projects across web applications, mobile apps, and UI/UX design. Each project demonstrates excellence, innovation, and client success."
        keywords={[
          "portfolio",
          "projects",
          "web applications",
          "mobile apps",
          "ui/ux design",
          "react projects",
          "fullstack projects",
          "case studies",
        ]}
        image="https://joshwebfolio.vercel.app/og-image-portfolio.jpg"
        url="https://joshwebfolio.vercel.app/portfolio"
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore my showcase of successful projects across industries. Each one represents my commitment to excellence, innovation, and client
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-primary text-primary-foreground" : "border-border hover:border-primary"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) projectRefs.current[index] = el;
                }}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {isMobileProject(project) ? (
                  <MobileProjectCard project={project} />
                ) : (
                  <ProjectCard {...project} live={project.live ?? ""} github={project.github ?? ""} index={index} />
                )}
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
