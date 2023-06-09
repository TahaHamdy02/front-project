import "./header.css";
import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import HeaderCarousel from "./HeaderCarousel";
const Header = () => {
  return (
    <section className="app__header app__wrapper section__padding" id="home">
      <div
        className="app__wrapper_info"
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="1500"
        data-aos-easing="linear"
      >
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          <a href="#menu">Explor Menu</a>

        </button>
      </div>
      <div
        className="app__wrapper_img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <HeaderCarousel>
          <img src={images.welcome01} alt="header-img" />
          <img src={images.welcome02} alt="header-img" />
          <img src={images.welcome03} alt="header-img" />
          <img src={images.welcome04} alt="header-img" />
        </HeaderCarousel>{" "}
      </div>
    </section>
  );
};

export default Header;
