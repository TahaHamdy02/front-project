import React, { useEffect } from "react";
import {
  BookTable,
  Footer,
  Mainbg,
  MenuBar,
  ServingQuality,
} from "../container";
function OurServicesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, []); //scroll to section in anoter page
  return (
    <div className="app__ourservicespage">
      <Mainbg
        pageTiltle="What We Offer"
        path1="Home"
        to1="/home"
        path2="Our Services"
        to2=""
      />
      <ServingQuality />
      <MenuBar />
      <BookTable />
      <div className="app__app__ourservicespage-happyhours flex__center">
        <h1
          className="headtext__cormorant"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Happy Hours
        </h1>
        <p
          className="p__cormorant"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          Sun - Mon (08:00 Am - 21:00 Pm){" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default OurServicesPage;
