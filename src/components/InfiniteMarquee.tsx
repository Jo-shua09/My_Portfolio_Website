import React from "react";
import { techStack } from "@/assets/data/Services";

const MarqueeRow = ({ reverse = false, speed = 40 }: { reverse?: boolean; speed?: number }) => {
  // Duplicate items array multiple times to ensure we have enough width for a smooth, uninterrupted loop
  // Translating by -50% with 4 copies guarantees a perfect seamless loop
  const duplicatedItems = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div
      className="flex w-max will-change-transform hover:[animation-play-state:paused]"
      style={{ animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}` }}
    >
      {duplicatedItems.map((tech, i) => (
        <div key={`${tech.name}-${i}`} className="flex items-center justify-center gap-3 md:gap-4 px-6 md:px-10 group">
          <img
            src={tech.img}
            alt={tech.name}
            className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-md"
            loading="lazy"
          />
          <span className="text-xl md:text-3xl font-mono font-bold tracking-wide text-foreground/10 group-hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap select-none">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const InfiniteMarquee = () => {
  return (
    <div className="w-full py-10 md:py-12 overflow-hidden relative border-y border-border/20 bg-background/20 backdrop-blur-md">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Seamless mask gradients matching site aesthetic */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Dual scrolling rows for infinite effect */}
      <div className="flex flex-col gap-10 md:gap-14">
        <MarqueeRow speed={50} />
        <MarqueeRow speed={65} reverse />
      </div>
    </div>
  );
};

export default InfiniteMarquee;
