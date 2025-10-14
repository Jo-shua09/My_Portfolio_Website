import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-8">
        {/* Code brackets animation */}
        <div className="relative">
          <div className="text-6xl font-mono text-primary animate-pulse">{"</>"}</div>
          <div className="absolute inset-0 text-6xl font-mono text-primary/30 animate-ping">{"</>"}</div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome</h2>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "100%" }}></div>
        </div>

        {/* Developer-themed loading messages */}
        <div className="text-sm text-muted-foreground font-mono">
          <div className="animate-pulse">Initializing components...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
