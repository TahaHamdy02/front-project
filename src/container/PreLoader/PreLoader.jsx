import React from "react";
import "./preloader.css";
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
