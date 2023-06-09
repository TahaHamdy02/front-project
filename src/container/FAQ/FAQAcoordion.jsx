import React from "react";
const Accordion = ({ title, content, onToggle, active }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        <div style={{ color: active ? "#dcca87" : "#F4F4F4" }}>{title}</div>
        {/* <div>{isActive ? <FaMinus /> : <FaPlus />}</div> */}
      </div>
      <div className={`accordion-content ${active ? "open__accordion" : ""}`}>
        <p className="p__opensans">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
