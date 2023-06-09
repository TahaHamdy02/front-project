import React from "react";
import "./customer.css";
import images from "../../constants/images";
const Customer = ({ imgUrl, subtitle, text, name,direction }) => {
  return (
    <div className="app__customer"
    data-aos={direction}
    data-aos-duration="1500"
    data-aos-easing="linear"
    >
      <div className="app__customer-imgs">
        <img
          src={imgUrl}
          alt="customer01"
          className="app__customer-imgs_customer"
        />
        <img
          src={images.quote}
          alt="quote"
          className="app__customer-imgs_quote"
        />
      </div>
      <div className="app__customer-info">
        <p className="p__opensans">{text}</p>
        <h2 className="app__customer-info_h2">{name}</h2>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
};

export default Customer;
