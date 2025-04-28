import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // pokaż po scrollu
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // przewijanie
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      ⬆
    </button>
  ) : null;
}

export default ScrollToTopButton;
