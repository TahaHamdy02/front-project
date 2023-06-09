import "./ourcustomer.css";
import React from "react";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import { RiDoubleQuotesL } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const OurCustomersCarousel = () => {
  return (
    <section className="section__padding">
      <div className="app__ourcustomer-heading">
        <SubHeading title="Testimony" />
        <h1 className="headtext__cormorant">Happy Customers</h1>
      </div>
      <div className="wrapper">
        {data.customer.map((customer, i) => (
          <div
            className="box"
            key={i}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={`1${i + 2}00`}
          >
            <span className="quote">
              <RiDoubleQuotesL />
            </span>
            <p className="p__opensans">{customer.quote}</p>
            <div className="content">
              <div className="info">
                <div className="name p__cormorant">{customer.name}</div>
                <div className="job p__cormorant">{customer.job}</div>
                <div className="stars">
                  {customer.stars.map((star) =>
                    star === 1 ? <AiFillStar /> : <AiOutlineStar />
                  )}
                </div>
              </div>
              <div className="image">
                <img src={customer.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCustomersCarousel;
