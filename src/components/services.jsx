import React from "react";
import { FaCode, FaPaintBrush, FaLaptop } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-section">
      {/* Header */}
      <div className="services-header">
        <h3>Our Services</h3>
        <p>Web Development, UI/UX Design, and Graphic Design</p>
      </div>

      {/* Service Cards */}
      <div className="services-cards">
        <div className="service-card">
          <FaCode size={50} color="#007bff" className="icon" />
          <h4>Web Development</h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <span className="read-more">
            Read more <MdArrowForward />
          </span>
        </div>

        <div className="service-card">
          <FaLaptop size={50} color="#28a745" className="icon" />
          <h4>UI/UX Design</h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <span className="read-more">
            Read more <MdArrowForward />
          </span>
        </div>

        <div className="service-card">
          <FaPaintBrush size={50} color="#ffc107" className="icon" />
          <h4>Graphic Design</h4>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <span className="read-more">
            Read more <MdArrowForward />
          </span>
        </div>
      </div>

      <div className="services-footer">
        <h3>
          Have any work you want done by me? <a href="">Contact Me</a>
        </h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
  );
};

export default Services;
