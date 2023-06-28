import { useEffect } from "react";
import tocbot from "tocbot";

export const TableOfContents = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post",
      headingSelector: "h1, h2, h3",
    });
  }, []);

  return () => tocbot.destroy();
};

export default TableOfContents;
