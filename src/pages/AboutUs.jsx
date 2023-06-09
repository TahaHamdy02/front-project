import React, { useEffect } from "react";
import {
  Mainbg,
  ServingCustomers,
  OurCustomer,
  HappyHours,
  Chef,
  Gallery,
  Footer,
} from "../container/index";
const AboutUsPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); //scroll to section in anoter page
  return (
    <div className="app__Aboutus-page">
      <Mainbg
        pageTiltle="About Us"
        path1="Home"
        to1="/home"
        path2="About Us"
        to2="/aboutus"
      />
      <ServingCustomers />
      <HappyHours />
      <Chef />
      <OurCustomer />
      <Gallery />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
