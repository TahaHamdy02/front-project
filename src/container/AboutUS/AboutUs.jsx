import "./aboutus.css";
import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div
          className="app__aboutus-content_about"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Link to="/aboutus#aboutus">
            <button type="button" className=" custom__button">
              Read More
            </button>
          </Link>
        </div>

        <div
          className="app__aboutus-content_knife flex__center"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src={images.knife} alt="knife" />
        </div>

        <div
          className="app__aboutus-content_history"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Link to="/aboutus#ourhistory">
            <button type="button" className="custom__button">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
