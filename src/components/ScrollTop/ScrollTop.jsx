import { useEffect, useState } from "react";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollTopStyle = {
    position: "fixed",
    top: "90%",
    right: "5%",
    fontSize: "1.5rem",
    zIndex: "111111111111111111",
    cursor: "pointer",
    color: "#dcca87",
  };

  return (
    <div style={scrollTopStyle}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <HiOutlineChevronDoubleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollTop;
