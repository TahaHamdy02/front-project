import "./newsletter.css";
import React, { useState } from "react";
import SubHeading from "../SubHeading/SubHeading";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_4zvhsqb",
        "template_5kic4w1",
        {
          email: email,
        },
        "j0fqn7jb47gKwLeqf"
      );
      const message = document.querySelector(".form_subscribe-message");
      message.classList.add("color-green");
      message.textContent = "You have successfully subscribed!";
      setTimeout(() => {
        setEmail("");
        message.textContent = "";
      }, 3000);
    } catch (error) {
      console.log(error);
      const message = document.querySelector(".form_subscribe-message");
      message.textContent = "Oops! Something went wrong...";
    }
  };

  return (
    <div
      className="app__newsletter"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="app__newsletter-heading">
        <SubHeading title="newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our NewsLetter</h1>
        <p className="p__opensans">And Never Miss Latest Updates!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="app__newsletter-input app__newsletter-form_subscribe flex__center"
        id="contact-form"
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email address"
          onChange={handleChange}
        />
        <button type="submit" className="custom__button">
          Subscribe
        </button>
      </form>
      <p className="form_subscribe-message p__cormorant"></p>
    </div>
  );
};

export default NewsLetter;
