import React from "react";
import { useInView } from "react-intersection-observer";

/*
 * Wrapper component to fade in child elements when loaded
 */

type Props = {
  children: React.ReactNode;
};

export const FadeinWrapper: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: "-50px",
    // Execute only once.
    triggerOnce: true,
  });

  const fadeinClassName = inView ? "animate-fade-in-bottom" : "opacity-0";

  const wrappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const className = [child.props.className, fadeinClassName]
        .filter((el) => el)
        .join(" ");

      return React.cloneElement(child as React.ReactElement, {
        ref,
        className,
      });
    } else {
      return child;
    }
  });

  return <>{wrappedChildren}</>;
};
