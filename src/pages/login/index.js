import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", form);
      if (response) {
        alert("Login Successful");
        setForm({ email: "", password: "" });
      } else {
        alert("Incorrect email or password");
      }
    } catch (err) {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email}  onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password"  value={form.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
