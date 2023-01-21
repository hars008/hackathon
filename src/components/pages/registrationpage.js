import React, { useState } from "react";
import "./registration.css";

function Registration() {

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showOTP: false,
    OTP: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      try {
        // send data to server for email verification
        // If email is verified, then show OTP input field
        setFormData({ ...formData, showOTP: true });
        //send email with OTP
        alert("OTP has been sent to your email!");
      } catch (err) {
        console.error(err);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      // send OTP to server for verification
      // If OTP is verified, then show success message
      alert("Successfully registered!");
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="registration-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="hi">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {formData.showOTP && (
        <form onSubmit={handleOTPSubmit} className="hi">
          <input
            type="text"
            name="OTP"
            placeholder="Enter OTP sent to your email"
            value={formData.OTP}
            onChange={handleChange}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
}
export default Registration;
