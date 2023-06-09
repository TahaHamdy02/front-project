import React, { useState } from "react";
import { vidBackground } from "../../constants";

const Form = () => {
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
      // submit the form data
      console.log(formData);
    }
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
      <div className="app__register-background">
        <video
          src={vidBackground}
          type="Video/mp4"
          //   autoPlay
          loop
          controls={false}
          muted
          className="app__register-background_video"
        />
        <div className="app__video-overlay" />
      </div>
      <form onSubmit={handleSubmit} className="app__register-form">
        <h2 className="headtext__cormorant">Register</h2>
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
              <span className="error">{formErrors.firstName}</span>
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
              <span className="error">{formErrors.lastName}</span>
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
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <div className="app__register-form_label-w100">
          <input
            placeholder="Password"
            className="app__register-form-input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>
        <div className="app__register-form_label-w100">
          <input
            placeholder="Confirm Password"
            className="app__register-form-input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && (
            <span className="error">{formErrors.confirmPassword}</span>
          )}
        </div>
        <button type="submit" className="app__register-form_button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
