import React, { useState } from "react";
import "./registration.css";
import randomstring from 'randomstring';
import nodemailer from 'nodemailer';
function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showOTP: false,
    OTP: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            // generate OTP
            const OTP = randomstring.generate({
              length: 6,
              charset: 'numeric'
            });
            setFormData({ ...formData, showOTP: true });
            // send OTP to entered email address
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: '20126@iiitu.ac.in',
                pass: 'harsh4277'
              }
            });
            let mailOptions = {
              from: '20126@iiitu.ac.in',
              to: formData.email,
              subject: 'OTP for registration',
              text: `Your OTP for registration is ${OTP}`
            };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
                alert("OTP has been sent to your email!");
              }
            });
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
      <form className="hi" onSubmit={handleSubmit}>
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