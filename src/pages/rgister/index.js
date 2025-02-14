import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", form);

      if (response) {
        alert("Registered Successfully");
        setForm({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            password: "",
          });
      } else {
        alert("Registration Failed");
      }
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
