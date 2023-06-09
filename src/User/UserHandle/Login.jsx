import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckBox } from "../../assets/Svg/svg";

import "./user.css";
import VideoBackground from "../VideoBackground/VideoBackground";
const Login = () => {
  // const navigate = useNavigate();
  // const [type, setType] = useState("password");
  // // initialize state variables
  // const user = JSON.parse(localStorage.getItem("user"));
  // const [formErrors, setFormErrors] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [formData, setFormData] = useState({
  //   email: user.email || "",
  //   password: user.password || "",
  // });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // validate form data
  //   const errors = {};
  //   //   !formData.email
  //   if (!formData.email) {
  //     errors.email = "Please enter your email address";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     errors.email = "Please enter a valid email address";
  //   } else if (user && user.email !== formData.email) {
  //     errors.email = "Can't find this email";
  //   }

  //   if (formData.password.length < 8) {
  //     errors.password = "Password must be at least 8 characters";
  //   } else if (user && user.password !== formData.password) {
  //     errors.password = "wrong password";
  //   }
  //   if (Object.keys(errors).length) {
  //     setFormErrors(errors);
  //   } else {
  //     navigate("/home");
  //   }

  // };
  // const showPassword = () => {
  //   type === "password" ? setType("text") : setType("password");
  // };
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   setFormErrors((prevState) => ({
  //     ...prevState,
  //     [name]: "",
  //   }));
  // };
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    email: user.email || "",
    password: user.password || "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!formData.email) {
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    } else if (user.email !== formData.email) {
      errors.email = "Can't find this email";
    }

    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (user.password !== formData.password) {
      errors.password = "wrong password";
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
    } else {
      navigate("/home");
    }
  };

  const showPassword = () => {
    setType(type === "password" ? "text" : "password");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormErrors((prevState) => ({ ...prevState, [name]: "" }));
  };
  return (
    <div className="app__register flex__center section__padding">
      <VideoBackground />
      <form
        onSubmit={handleSubmit}
        className="app__register-form app__login-form"
      >
        <h2 className="headtext__cormorant">Login</h2>
        <div className="app__register-form_label-w100">
          <input
            placeholder="email@example.com"
            className="app__register-form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="error__message">{formErrors.email}</span>
          )}
        </div>
        <div className="app__register-form_label-w100">
          <input
            placeholder="Password"
            className="app__register-form-input"
            type={type}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <span className="error__message">{formErrors.password}</span>
          )}
        </div>
        <div className="app__register-form_showpassword">
          <span>
            <input
              type="checkbox"
              id="checkbox"
              hidden
              onChange={showPassword}
            />
            <CheckBox />
          </span>
          <p className="p__opensans">show password</p>
        </div>

        <button type="submit" className="app__register-form_button">
          Login
        </button>
        <p className="p__opensans login">
          don't have an account yet? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
