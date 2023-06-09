import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";

const Erorr = () => {
  return (
    <div className="app__notfound app__bg flex__center section__padding">
      <div className="app__notfound-info">
        <div
          className="app__notfound-info_heading"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-easing="linear"
          data-aos-duration="1400"
        >
          <h1>404</h1>
        </div>
        <div className="app__notfound-info-img">
          <img
            src={images.spoon}
            alt="spoon"
            style={{ width: "90px" }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="700"
            data-aos-offset="0"
            data-aos-duration="1500"
          />
        </div>
        <p
          className="p__cormorant"
          style={{ textAlign: "center" }}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="900"
          data-aos-offset="0"
          data-aos-duration="1600"
        >
          Oops! The page you are looking for does not exist. It might <br />{" "}
          have been moved or deleted.
        </p>
        <div className="app__notfound-btn">
          <button
            className="custom__button"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="1100"
            data-aos-offset="0"
            data-aos-duration="1700"
          >
            <Link to="/Home">Back To Home </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Erorr;
