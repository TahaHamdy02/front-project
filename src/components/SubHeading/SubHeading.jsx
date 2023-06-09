import React from "react";
import "./subheading.css";
import images from "../../constants/images";
const SubHeading = ({ title }) => {
  return (
    <div
      className="app__subheading"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="linear"
    >
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
