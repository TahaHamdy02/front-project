import React from "react";
import "./personalachievements.css";
import { useParams } from "react-router-dom";
import { SubHeading } from "../../components";
import { data } from "../../constants";
const PersonalAchievements = () => {
  const chefId = Number(useParams().id);
  const targetChef = data.OurChefs.find((chef) => chef.id === chefId);
  const AchievementsCard = () => (
    <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <div className="app__personalachievements_awards-card">
        <img src={targetChef.imgAwardUrl1} alt="award" />
        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant">{targetChef.title1}</p>
          <p className="p__cormorant">{targetChef.subtitle1}</p>
        </div>
      </div>
      <div className="app__personalachievements_awards-card">
        <img src={targetChef.imgAwardUrl2} alt="award" />
        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant">{targetChef.title2}</p>
          <p className="p__cormorant">{targetChef.subtitle2}</p>
        </div>
      </div>
      <div className="app__personalachievements_awards-card">
        <img src={targetChef.imgAwardUrl3} alt="award" />
        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant">{targetChef.title3}</p>
          <p className="p__cormorant">{targetChef.subtitle3}</p>
        </div>
      </div>
      <div className="app__personalachievements_awards-card">
        <img src={targetChef.imgAwardUrl4} alt="award" />
        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant">{targetChef.title4}</p>
          <p className="p__cormorant">{targetChef.subtitle4}</p>
        </div>
      </div>
    </span>
  );

  return (
    <div className="app__personalachievements app__bg section__padding">
      <div className="app__personalachievements-award">
        <SubHeading title={targetChef.jobTitle} />
        <h1
          className="headtext__cormorant"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Personal Achievement
        </h1>
        <div className="app__personalachievements-award_content">
          <AchievementsCard />
        </div>
      </div>
      <div
        className="app__personalachievements-img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={targetChef.dessert} alt="dessert" />
      </div>
    </div>
  );
};

export default PersonalAchievements;
