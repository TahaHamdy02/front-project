import "./findus.css";
import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div
      className="app__wrapper_info"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        FindUs
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow. whatcroft Hall Lane. Rudheath,CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ margin: "2rem 0", color: "#DCCA87", fontSize: "23px" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00am 02:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00am 03:00am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit US
      </button>
    </div>
    <div
      className="app__wrapper_img"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
