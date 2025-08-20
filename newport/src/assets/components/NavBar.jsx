import { useState } from "react";
import "./Component-Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/imgs/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Karthikeya.</span>
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" className="menu-bar" />
      </div>


      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li className="nav-item"><span>Home</span></li>
        <li className="nav-item"><span>About</span></li>
        <li className="nav-item"><span>Skills</span></li>
        <li className="nav-item"><span>Projects</span></li>
        <li className="nav-item"><span>Contact</span></li>
      </ul>
    </nav>
  );
}
