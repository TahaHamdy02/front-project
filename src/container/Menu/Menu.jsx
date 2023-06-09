import "./menu.css";
import React from "react";
import { SubHeading, Menuitem } from "../../components";
import images from "../../constants/images";
import data from "../../constants/data";
const Menu = () => {
  return (
    <div
      className="app__specialMenu flex__center section__padding"
      id="menu"
      style={{ overflow: "hidden" }}
    >
      <div
        className="app__specialMenu-title"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1500"
        data-aos-easing="linear"
      >
        <SubHeading title="Menu that fits you palatte" />
        <h1 className=" headtext__cormorant">Today’s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div
          className="app__specialMenu-menu_wine flex__center"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <p className="app__specialMenu-menu_heading">wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <Menuitem
                key={index + wine.title}
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
              />
            ))}
          </div>
        </div>
        <div
          className="app__specialMenu-menu_img"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src={images.menu} alt="menu" />
        </div>
        <div
          className="app__specialMenu-menu_cocktails flex__center"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktails, index) => (
              <Menuitem
                key={index + cocktails.title}
                title={cocktails.title}
                tags={cocktails.tags}
                price={cocktails.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
