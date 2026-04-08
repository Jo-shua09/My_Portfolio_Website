import { motion } from "framer-motion";
import { Github, Smartphone, ExternalLink } from "lucide-react";

interface MobileProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  category: string;
  live?: string;
  github: string;
  type: string;
}

export const MobileProjectCard = ({ project }: { project: MobileProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col xl:flex-row items-center gap-10 bg-card border border-border/60 hover:border-primary/50 rounded-[2rem] p-6 md:p-10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Left Content - Details */}
      <div className="w-full xl:w-1/2 flex flex-col gap-6 z-10">
        <div className="flex items-center gap-3 text-primary font-bold tracking-widest text-sm uppercase font-mono">
          <Smartphone className="w-5 h-5" />
          <span>{project.category}</span>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-secondary/40 hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-foreground text-sm font-semibold rounded-full border border-border transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full font-bold hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary transition-all duration-300 shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Live App
            </a>
          )}
        </div>
      </div>

      {/* Right Content - Horizontal Scrolling Screenshots */}
      <div
        className="w-full xl:w-1/2 flex gap-6 overflow-x-auto pb-6 pt-4 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {project.images.map((img, index) => (
          <motion.div key={index} whileHover={{ y: -10 }} className="aspect-[9/19] flex-shrink-0 overflow-hidden">
            <img src={img} alt={`${project.title} App Screen ${index + 1}`} className="w-full h-full object-contain max-h-[30vh]" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
