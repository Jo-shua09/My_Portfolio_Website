import { useEffect, useState } from "react";
import { TrophySpin } from "react-loading-indicators";
import SplitText from "./SplitText";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    // Handle animation complete if needed
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-8">
        <TrophySpin color="#f1fff1" size="large" text="" textColor="" />
        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl ">
            <SplitText
              text="Hello, There!"
              className="text-2xl font-mono text-foreground font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
