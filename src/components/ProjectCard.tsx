import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  live: string;
  github: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, category, live, github, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  return (
    <div className="cursor-pointer">
      <Card
        className={`group relative md:flex w-full items-center max-w-6xl m-auto h-full overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
        onClick={() => window.open(live, "_blank")}
      >
        <div className="aspect-video relative overflow-hidden bg-muted w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="absolute top-4 left-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <FaGithub className="w-5 h-5 hover:scale-110 text-primary-foreground" />
            </a>
          </div>

          <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <a href={live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="w-5 h-5 hover:scale-110 text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="p-6 w-full">
          <div className="text-xs font-semibold font-mono text-primary uppercase tracking-wider mb-2">{category}</div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary/50 text-foreground text-xs rounded-full border border-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
