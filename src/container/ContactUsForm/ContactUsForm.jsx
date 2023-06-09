import "./contactusform.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { images } from "../../constants";
const initalState = {
  name: "",
  email: "",
  message: "",
};
const ContactUsForm = () => {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [{ name, email, message }, setState] = useState(initalState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initalState });
  const Message = document.querySelector(".app__contactus-form_message");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, name, message);
    // serviceID
    //  templateID
    // #form
    //  publicKey
    emailjs
      .sendForm(
        "service_4zvhsqb",
        "template_nlxi0hm",
        form.current,
        "j0fqn7jb47gKwLeqf"
      )
      .then(
        (result) => {
          // console.log("done", result);
          Message.classList.add("color-green");
          Message.textContent = "Thanks for your feedback ,Check your Email !!";
          setTimeout(() => {
            clearState();
            Message.textContent = "";
          }, 3000);
        },
        (error) => {
          // console.log(error);
          Message.textContent = "OOPS! SOMETHING HAS FAILED...";
        }
      );
  };
  return (
    <div className="app__contactus section__padding app__bg">
      <form
        action=""
        ref={form}
        className="app__contactus-form"
        onSubmit={handleSubmit}
      >
        <div
          className="label"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <input
            required
            type="text"
            name="name"
            id="userName"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div
          className="label"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          <input
            required
            type="email"
            name="email"
            id="userEmail"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="label">
          <textarea
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            required
            name="message"
            id="userMessage"
            placeholder="Message"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <p className="p__cormorant app__contactus-form_message"></p>
        <button
          type="submit"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="custom__button"
        >
          Submit
        </button>
      </form>

      <div
        className="app__contactus-img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={images.contactus01} alt="contactus01" />
      </div>
    </div>
  );
};

export default ContactUsForm;
