import "./laurels.css";
import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p
        className="p__cormorant"
        style={{ color: "#DCCA87", fontSize: "22px" }}
      >
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div
        className="app__wrapper_info"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <SubHeading title="Award & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title + index} />
          ))}
        </div>
      </div>
      <div
        className="app__wrapper_img"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
