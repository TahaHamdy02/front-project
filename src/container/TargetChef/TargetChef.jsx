import React from "react";
import "./targetchef.css";
import { useParams } from "react-router-dom";
import { SubHeading } from "../../components";
import { data } from "../../constants";

const TargetChef = () => {
  const chefId = Number(useParams().id);
  const targetChef = data.OurChefs.find((chef) => chef.id === chefId);

  const Quotes = () => (
    <div className="app__chef-content_quotes">
      <div className="app__chef-content_quotes-quote">
        <div /> <p className="p__cormorant">{targetChef.quote1}</p>
      </div>
      <div className="app__chef-content_quotes-quote">
        <div /> <p className="p__cormorant">{targetChef.quote2}</p>
      </div>
      <div className="app__chef-content_quotes-quote">
        <div /> <p className="p__cormorant">{targetChef.quote3}</p>
      </div>
      <div className="app__chef-content_quotes-quote">
        <div /> <p className="p__cormorant">{targetChef.quote4}</p>
      </div>
    </div>
  );

  return (
    <>
      {targetChef && (
        <div className="app__chef app__wrapper section__padding">
          <div className="app__wrapper_img app__wrapper_img-revers">
            <img
              src={targetChef.imgUrl}
              alt="chef"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="app__wrapper_info"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div
              className="app__chefdetail-heading"
              style={{ margin: "0 0 2rem" }}
            >
              <SubHeading title={targetChef.jobTitle} />
              <h1 className="headtext__cormorant">{targetChef.name}</h1>
            </div>
            <p className="p__opensans" style={{ marginBottom: "2rem" }}>
              {targetChef.text}
            </p>
            <div
              className="app__chefdetail-content"
              style={{ marginBottom: "2rem" }}
            >
              <Quotes />
            </div>
            <div className="app__chefdetail-sign">
              <p className="p__sign">{targetChef.name}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TargetChef;
