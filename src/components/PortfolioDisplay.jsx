import React from "react";
import "./PortfolioDisplay.css";
import teacher2 from "../assets/download.jpg";

const portfolioItems = [
  {
    image: teacher2,
    title: "School Management System",
    category: "MERN Stack",
  },
  {
    image: teacher2,
    title: "E-Commerce Website",
    category: "React & Node",
  },
  {
    image: teacher2,
    title: "Doctor Appointment System",
    category: "PHP & MySQL",
  },
  {
    image: teacher2,
    title: "Expense Tracker App",
    category: "React + MongoDB",
  },
  {
    image: teacher2,
    title: "Driving License Mock Test",
    category: "Web Application",
  },
  {
    image: teacher2,
    title: "Portfolio Website",
    category: "Frontend Design",
  },
];

const PortfolioDisplay = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h3>Portfolio</h3>
        <h1>My Latest Work</h1>
      </div>

      <div className="portfolio-card-container">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              {/* <button>View Details</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDisplay;
