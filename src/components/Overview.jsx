import React from "react";
import { FaSmile, FaCheckCircle, FaCoffee } from "react-icons/fa";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <FaSmile size={40} color="#fbf9f2ff" className="icoc" />
        <p>1000</p>
        <h4>Happy Customers</h4>
      </div>

      <div className="stat-card">
        <FaCheckCircle size={40} color="#fbf9f2ff" />
        <p>120</p>
        <h4>Projects Completed</h4>
      </div>

      <div className="stat-card">
        <FaCoffee size={40} color="#fbf9f2ff" />
        <p>300+</p>
        <h4>Cups of Coffee</h4>
      </div>
    </div>
  );
};

export default Overview;
