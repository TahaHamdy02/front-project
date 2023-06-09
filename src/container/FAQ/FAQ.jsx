import React, { useState } from "react";
import Accordion from "./FAQAcoordion";
import "./faq.css";
// faq
import { data, images } from "../../constants";
function FAQ() {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="app__faq section__padding felx__center">
      <div className="app__wrapper">
        <div className="app__wrapper_img">
          <img src={images.faq} alt="faq" />
        </div>
        <div className="app__wrapper_info" id="Accordion">
          {data.accordionData.map(({ title, content }, index) => (
            <Accordion
              title={title}
              content={content}
              key={index}
              onToggle={() => handleToggle(index)}
              active={clicked === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
