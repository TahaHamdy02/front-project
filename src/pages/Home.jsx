import React from "react";
import {
  Header,
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Intro,
  Laurels,
  Menu,
} from "../container/index";
const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Home;
