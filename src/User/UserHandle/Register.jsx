import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CheckBox } from "../../assets/Svg/svg";
import VideoBackground from "../VideoBackground/VideoBackground";
import "./user.css";
const Form = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form data
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "Please enter your first name";
    }
    if (!formData.lastName) {
      errors.lastName = "Please enter your last name";
    }
    if (!formData.email) {
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      errors.password = "Please enter a password";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/login");
    }
  };
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  return (
    <div className="app__register flex__center section__padding">
      <VideoBackground />
      <form onSubmit={handleSubmit} className="app__register-form">
        <h2 className="headtext__cormorant">Sign up</h2>
        <div className="app__register-form_label">
          <div className="app__register-form_label-w100">
            <input
              placeholder="First Name"
              className="app__register-form_label-input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <span className="error__message">{formErrors.firstName}</span>
            )}
          </div>
          <div className="app__register-form_label-w100">
            <input
              placeholder="Last Name"
              className="app__register-form_label-input"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <span className="error__message">{formErrors.lastName}</span>
            )}
          </div>
        </div>
        <div className="app__register-form_label-w100">
          <input
            placeholder="email@example"
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
        <div className="app__register-form_label-w100">
          <input
            placeholder="Confirm Password"
            className="app__register-form-input"
            type={type}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && (
            <span className="error__message">{formErrors.confirmPassword}</span>
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
          Submit
        </button>
        <p className="p__opensans login">
          already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
