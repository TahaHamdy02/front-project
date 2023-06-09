import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";
import Clock from "./soon";
const CommingSoon = () => {
  return (
    <div className="app__commingsoon app__bg section__padding flex__center">
      <div className="app__commingsoon-info">
        <h1
          className="headtext__cormorant"
          style={{ textAlign: "center" }}
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Comming Soon
          <div className="app__commingsoon-info-img">
            <img
              src={images.spoon}
              alt="spoon"
              style={{ width: "70px" }}
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="0"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
        </h1>
        <div
          className="app__commingsoon-info-countdown"
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-offset="0"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Clock />
        </div>
        <div className="app__commingsoon-info-btn">
          <button
            className="custom__button"
            data-aos="fade-down"
            data-aos-delay="1300"
            data-aos-offset="0"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Link to="/Home">Back To Home </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
