import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  status?: string;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0, status }: ServiceCardProps) => {
  return (
    <Card
      className="group relative p-5 md:p-8 bg-card/80 border border-border/60 hover:border-primary/80 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
        </div>

        <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {status && (
          <div className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
            {status}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ServiceCard;
