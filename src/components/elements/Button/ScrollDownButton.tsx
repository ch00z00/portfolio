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
    const radius = 20;
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
    <div
      className="flex items-center
                justify-center rounded-full"
    >
      <svg className="z-10 h-20 w-20 -rotate-90">
        <circle
          className="text-white-300/40"
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="40"
          cy="90"
        />
        <circle
          className="text-yellow-100"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="40"
          cy="90"
        />
      </svg>
      <button
        className="h-8 w-8 rounded-full border text-center text-xl
                text-yellow-100 duration-300 hover:border-yellow-100
                hover:bg-yellow-100 hover:text-black-100"
        onClick={handleScroll}
      >
        ↓
      </button>
    </div>
  );
};
