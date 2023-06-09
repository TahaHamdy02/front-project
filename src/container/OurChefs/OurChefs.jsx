import React from "react";
import "./ourchefs.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { data } from "../../constants";
import { Link } from "react-router-dom";
const OurChefs = () => {
  return (
    <div className="app__ourchefs section__padding">
      {data.OurChefs.map((chef) => (
        <div
          className="app__ourchef-card"
          key={chef.name + chef.id}
          data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="app__ourchef-card_details">
            <div className="app__ourchef-card_details-img">
              <img src={chef.imgUrl} alt="chef01" />
              <div className="app__ourchef-card_details-overlay flex__center">
                <div className="app__ourchef-card_details-overlay_social">
                  <a href={`${chef.Facebook}`} rel="noreferrer" target="_blank">
                    <FiFacebook />
                  </a>
                  <a
                    href={`${chef.Instageam}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <FiInstagram />
                  </a>
                  <a href={`${chef.Twitter}`} rel="noreferrer" target="_blank">
                    {" "}
                    <FiTwitter />
                  </a>
                </div>
                <div className="app__ourchef-card_details-overlay_readmore">
                  <div />{" "}
                  <p className="p__cormorant" style={{ color: "#dcca87" }}>
                    <Link
                      to={`/ourchefs/chef/detail/${chef.name
                        .toLowerCase()
                        .split("")
                        .filter((e) => e.trim().length)
                        .join("")}/${chef.id}`}
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="app__ourchef-card_info">
            <h2>
              <Link
                to={`/ourchefs/chef/detail/${chef.name
                  .toLowerCase()
                  .split("")
                  .filter((e) => e.trim().length)
                  .join("")}/${chef.id}`}
              >
                {chef.name}
              </Link>
            </h2>
            <p className="p__opensans">{chef.jobTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurChefs;
