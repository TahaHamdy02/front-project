import React from "react";
import { Footer, Mainbg, PersonalAchievements, TargetChef } from "../container";
import { useParams } from "react-router-dom";
import { data } from "../constants";
const ChefDetail = () => {
  const chefId = Number(useParams().id);
  const targetChef = data.OurChefs.find((chef) => chef.id === chefId);
  return (
    <div className="app__chefdetails">
      <Mainbg
        pageTiltle="Chef"
        path1="Home"
        to1="/home"
        path2="Our Chefs"
        to2="/ourchefs"
        path3={targetChef.name}
        to3=""
      />
     <TargetChef />
      <PersonalAchievements />
      <Footer/>
    </div>
  );
};

export default ChefDetail;
