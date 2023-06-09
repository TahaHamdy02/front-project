import React, { useState } from "react";
import "./menubar.css";

function MenuBar() {
  const [style, setStyle] = useState("back1");

  const changeStyle = () => {
    setStyle("back1");
  };
  const changeStyle2 = () => {
    setStyle("back2");
  };
  const changeStyle3 = () => {
    setStyle("back3");
  };
  return (
    <div className="app__menubar section__padding">
      <div className="app__menubar-info">
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          onClick={changeStyle}
        >
          Bar Menu
        </h3>
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
          onClick={changeStyle2}
        >
          Food Menu
        </h3>
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          onClick={changeStyle3}
        >
          Desserts Menu
        </h3>
        <div className={`app__menubar-background ${style}`}></div>
      </div>
    </div>
  );
}

export default MenuBar;
