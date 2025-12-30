import React, { useState } from "react";
import "./About.css";
import teacher2 from "../assets/teacher2.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const skills = [
    { name: "Adobe Photoshop", percent: 80 },
    { name: "HTML / CSS", percent: 95 },
    { name: "JavaScript", percent: 88 },
    { name: "WordPress", percent: 89 },
  ];

  return (
    <div className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={teacher2} alt="Profile" />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          {/* Tabs */}
          <ul className="nav-links">
            <li
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </li>
            <li
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </li>
            <li
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            <h2>
              {activeTab === "about"
                ? "About Me"
                : activeTab === "skills"
                ? "Skills"
                : "Experience"}
            </h2>
            {activeTab === "about" && (
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            )}
            {activeTab === "skills" && (
              <div className="skills-list">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                {skills.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "experience" && (
              <p>
                Worked on multiple web development projects using React, Node,
                and WordPress.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
