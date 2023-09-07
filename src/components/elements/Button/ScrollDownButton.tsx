import { useEffect, useState } from "react";

export const ScrollDownButton: React.FC = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const [circumference, setCircumference] = useState(0);
  const [percent, setPercent] = useState(0);

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
        className="absolute h-8 w-8 rounded-full border-2 border-yellow-100
                bg-yellow-100 text-center text-lg text-black-100
                  duration-300 hover:h-11 hover:w-11 hover:text-2xl"
        onClick={handleScroll}
      >
        ↓
      </button>
    </div>
  );
};
