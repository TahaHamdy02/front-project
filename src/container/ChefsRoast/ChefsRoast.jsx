import React from "react";
import { Video } from "../../components";
import { roast } from "../../constants";

const ChefsRoast = () => {
  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  const roastStyle = {
    height: "70vh",
    position: "relative",
  };

  return (
    <div
      className="app__chefsroast"
      style={roastStyle}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Video VidSrc={roast} vidStyle={videoStyle} />
    </div>
  );
};

export default ChefsRoast;
