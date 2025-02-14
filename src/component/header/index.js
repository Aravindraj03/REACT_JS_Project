import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <h2>🚀 MyApp</h2>
      </div>

      {/* Hamburger Menu (for Mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="link" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
        <Link to="/register" className="link" onClick={() => setMenuOpen(!menuOpen)}>Register</Link>
        <Link to="/login" className="link" onClick={() => setMenuOpen(!menuOpen)}>Login</Link>
        <Link to="/dashboard" className="button" onClick={() => setMenuOpen(!menuOpen)}>Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
