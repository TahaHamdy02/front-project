import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './assets/js/main'
import { BrowserRouter } from "react-router-dom";

window.onscroll = () => {
  const boxes = document.querySelectorAll(".showinScroll");
  boxes.forEach((box) => {
    box.getBoundingClientRect().top < (window.innerHeight / 5) * 4
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//  basename={'/Home'}
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
     <App />
    </BrowserRouter> 
  </React.StrictMode>
);
