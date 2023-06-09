import React from "react";
import "./servingquality.css";
import { SubHeading } from "../../components";

function ServingQuality() {
  return (
    <div className="app__servingquality felx__center section__padding">
      <SubHeading title="Serving Quality" />
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="app__servingquality-heading flex__center"
      >
        <h1 className="headtext__cormorant">
          We At Gericht Are Serving Our Customers
          <br />
          For Over A Decade
        </h1>
        <p
          className="p__opensans"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          repellendus culpa suscipit sed in reprehenderit dicta, quidem
          perspiciatis porro laboriosam rerum. Beatae libero!
        </p>
      </div>
      <div
        className="app__servingquality-btns flex__center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <button type="button" className="custom__button">
          Read More
        </button>
        <button type="button" className="custom__button">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default ServingQuality;
