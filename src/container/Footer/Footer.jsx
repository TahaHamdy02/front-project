import "./footer.css";
import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { NewsLetter, FooterOverlay } from "../../components";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding" style={{ overflow: "hidden" }}>
    <FooterOverlay />
    <NewsLetter />

    <div className="app__footer-links">
      <div
        className="app__footer-links_contact"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019,USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-666</p>
      </div>
      <div
        className="app__footer-links_logo"
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={images.GeríchtFooter} alt="gericht" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          atque illo autem modi nam
        </p>
        <img src={images.spoon} alt="spoon" style={{ marginTop: "1rem" }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div
        className="app__footer-links_work"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__cormorant sm-headtext">Monday-Friday:</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__cormorant sm-headtext">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__cormorant">2021 Gericht. All Rights recived</p>
    </div>
  </div>
);

export default Footer;
