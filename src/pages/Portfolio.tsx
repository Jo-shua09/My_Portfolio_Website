import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { MobileProjectCard } from "@/components/MobileProjectCard";
import { projects, mobileProjects } from "@/assets/data/Projects";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  type WebProject = (typeof projects)[number];
  type MobileProject = (typeof mobileProjects)[number];
  type PortfolioProject = WebProject | MobileProject;

  const filters = ["All", "Web Application", "Mobile Application"];
  const itemsPerPage = 4;

  const allProjects: PortfolioProject[] = [...projects, ...mobileProjects];
  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? allProjects : allProjects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const isMobileProject = (project: PortfolioProject): project is MobileProject => project.category === "Mobile Application";

  useEffect(() => {
    setCurrentPage(1);
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

      <section className="pt-36 pb-16 md:pb-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in">
              Selected work
            </span>
            <h1 className="mb-6 animate-fade-in-up">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore my showcase of successful projects across industries. Each one represents my commitment to excellence, innovation, and client
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-primary text-primary-foreground shadow-lg" : "border-border hover:border-primary"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {paginatedProjects.map((project, index) => (
              <div key={project.id} className="project-card-enter" style={{ animationDelay: `${index * 100}ms` }}>
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

          {filteredProjects.length > itemsPerPage && (
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="gap-2 border-border hover:border-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Prev
                </Button>
                <div className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-2 py-1.5">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-9 w-9 rounded-full text-sm font-medium transition-all ${
                        currentPage === page ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="gap-2 border-border hover:border-primary"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
