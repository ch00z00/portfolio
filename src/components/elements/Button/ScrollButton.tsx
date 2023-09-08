import { useEffect, useState } from "react";
import clsx from "clsx";

export const ScrollButton: React.FC = () => {
  const [circumference, setCircumference] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isUp, setIsUp] = useState(false);

  // Auto-scroll function
  const handleScroll = () => {
    if (isUp) {
      // Scroll up
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll down
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // Indicator function
  const init = () => {
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    setCircumference(circumference);

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
  };

  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setPercent(Math.round(scrollPercentage));
    // This ternary operator set true/false to isUp based on the value of scrollTop
    setIsUp(scrollTop >= 400);
  };

  useEffect(() => {
    init();
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="flex items-center justify-center rounded-full">
      <svg className="h-[6.25rem] w-20 -rotate-90">
        <circle
          className="text-white-300/40"
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r="24"
          cx="40"
          cy="50"
        />
        <circle
          className="text-yellow-100"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="24"
          cx="40"
          cy="50"
        />
      </svg>
      <button
        className={clsx(
          "absolute h-8 w-8 rounded-full border-2 border-yellow-100 bg-yellow-100 text-center text-lg text-black-100 transition-all duration-300 hover:h-11 hover:w-11 hover:text-2xl",
          isUp ? "rotate-180" : ""
        )}
        onClick={handleScroll}
      >
        ↓
      </button>
    </div>
  );
};
