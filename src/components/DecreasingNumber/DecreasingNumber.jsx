import React from "react";
import { images } from "../../constants";

const DecreasingNumber = ({ number, text, index }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }} className="customer">
      <div className="subtitle">
        <h3 className="p__cormorant">{number}</h3>
        <img src={images.spoon} alt="spoon" style={{ margin: "1rem 0" }} />
        <p className="p__cormorant">{text}</p>
      </div>
      <div className="line" style={{ display: index === 2 && "none" }} />
    </div>
  );
};

export default DecreasingNumber;
