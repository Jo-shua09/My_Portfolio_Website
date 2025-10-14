import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0, index }: ServiceCardProps) => {
  return (
    <Card
      className="group relative p-5 md:p-8 bg-card border-border hover:border-primary transition-all duration-500 hover-lift overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
          {index == 0 && "Active"}
          {index == 1 && "In Progress"}
          {index == 2 && "Soon"}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
