import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/assets/data/Projects";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Application", "Mobile App", "Cloud Solution", "UI/UX Design"];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
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
      {/* <section className="py-8 bg-card/30 sticky top-20 z-40 backdrop-blur-xl border-b border-border">
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
      </section> */}

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
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
