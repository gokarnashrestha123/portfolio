import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import teacher2 from "../assets/download.jpg";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content">
        <h1>Welcome to Gokarna</h1>
        <p>Your gateway to serene beaches and vibrant culture.</p>
        <div className="header-buttons">
          <button className="btn hire-btn">HIRE ME</button>
          <button className="btn portfolio-btn">View Portfolio</button>
        </div>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            + Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            + Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            + Instagram
          </a>
        </div>
        <div className="teacher-image-container">
          <img className="teacher-image" src={teacher2} alt="Teacher 2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
