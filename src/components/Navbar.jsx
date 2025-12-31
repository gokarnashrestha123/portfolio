import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
   const handleClick = (sectionId) => {
     setActive(sectionId);

     const section = document.getElementById(sectionId);
     if (section) {
       section.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My First Project</div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li
            className={active === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </li>
          <li
            className={active === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </li>
          <li
            className={active === "services" ? "active" : ""}
            onClick={() => handleClick("services")}
          >
            Services
          </li>
          <li
            className={active === "portfolio" ? "active" : ""}
            onClick={() => handleClick("portfolio")}
          >
            Portfolio
          </li>
          <li
            className={active === "pricing" ? "active" : ""}
            onClick={() => handleClick("pricing")}
          >
            Pricing
          </li>
          <li
            className={active === "blog" ? "active" : ""}
            onClick={() => handleClick("blog")}
          >
            Blog
          </li>
          <li
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
