import React from "react";
import "./happyhours.css";
import { Video, SubHeading } from "../../components/index";
import { meal } from "../../constants";
const HappyHours = () => {
  return (
    <div className="app__happyhours section__padding" id="aboutus">
      <div className="app__happyhours-heading">
        <SubHeading title="About Us" />
        <h1 className="headtext__cormorant">Happy Hours With Us</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique.
        </p>
      </div>

      <div className="app__video">
        <Video VidSrc={meal} />
      </div>
    </div>
  );
};

export default HappyHours;
