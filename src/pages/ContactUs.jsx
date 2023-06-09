import React from "react";
import { ContactUsForm, Footer, Mainbg } from "../container";

const ContactUsPage = () => {
  const mapStyle = {
    position: "relative",
    textAlign: "right",
    height: "550px",
    width: "100%",
  };
  const CanvasStyle = {
    overflow: "hidden",
    background: "none !important",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <Mainbg
        pageTiltle="Contact Us"
        path1="Home"
        to1="/home"
        path2="Contact Us"
        to2=""
      />
      <div className="mapouter section__padding" style={mapStyle}>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="gmap_canvas" style={CanvasStyle}>
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=شمال التحرير&t=&z=10&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>
          <a href="https://2yu.co">2yu</a>
          <br />
          <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
        </div>
      </div>
      <ContactUsForm />
      <Footer/>
    </>
  );
};

export default ContactUsPage;
