import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="home-title">🚀 Welcome to Our Website</h2>
        <p className="home-description">Sign up or log in to access the dashboard.</p>
        <div className="buttons">
          <a href="/register" className="btn">Sign Up</a>
          <a href="/login" className="btn btn-secondary">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
