import React from "react";
import { Mainbg, Faq, Footer } from "../container";
function FAQPage() {
  return (
    <div className="app__faqpage">
      <Mainbg
        pageTiltle="Frequently Asked Question"
        path1="Home"
        to1="/home"
        path2="FAQ"
        to2="/faq"
      />
      <Faq />
      <Footer />
    </div>
  );
}

export default FAQPage;
