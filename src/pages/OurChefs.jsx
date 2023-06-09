import React from "react";
import { Footer, Laurels, Mainbg, OurChefs } from "../container";
import ChefsRoast from "../container/ChefsRoast/ChefsRoast";

const OurChefsPage = () => {
  return (
    <>
      <Mainbg
        pageTiltle="Our Chefs"
        path1="Home"
        to1="/home"
        path2="Our Chefs"
        to2="/ourchefs"
      />
      <OurChefs />
     <ChefsRoast/>
     <Laurels/>
     <Footer/>
    </>
  );
};

export default OurChefsPage;
