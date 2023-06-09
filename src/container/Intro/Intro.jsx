import "./intro.css";
import React from "react";

import { meal } from "../../constants";
import { Video } from "../../components";
const Intro = () => {
  return (
    <div
      className="app__video"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Video VidSrc={meal} />
    </div>
  );
};

export default Intro;
