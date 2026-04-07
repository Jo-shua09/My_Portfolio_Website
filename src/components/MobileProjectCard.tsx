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
      className="relative flex flex-col xl:flex-row items-center gap-10 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/50 rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl"
    >
      {/* Left Content - Details */}
      <div className="w-full xl:w-1/2 flex flex-col gap-6 z-10">
        <div className="flex items-center gap-3 text-indigo-400 font-medium tracking-wide text-sm uppercase">
          <Smartphone className="w-5 h-5" />
          <span>{project.category}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h3>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-4 py-1.5 bg-zinc-800/80 text-zinc-300 text-sm rounded-full border border-zinc-700/50 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors duration-300"
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
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 border border-zinc-700 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Live App
            </a>
          )}
        </div>
      </div>

      {/* Right Content - Horizontal Scrolling Screenshots */}
      <div
        className="w-full xl:w-1/2 flex gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {project.images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="min-w-[220px] md:min-w-[260px] aspect-[9/19] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden border-[6px] border-zinc-800 shadow-2xl bg-zinc-950 relative"
          >
            <img src={img} alt={`${project.title} App Screen ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
