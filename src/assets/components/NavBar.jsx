import { useState } from "react";
import "./componentStyles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded && (
        <>
          <div className="logo">
            <img src="https://raw.githubusercontent.com/alurubalakarthikeya/NewPortfolio/refs/heads/master/src/assets/imgs/logo-2.png" alt="Logo" className="logo-img" />
            <span className="logo-text">Karthikeya.</span>
          </div>

          <ul className="nav-list">
            <li className="nav-item"><span>Home</span></li>
            <li className="nav-item"><span>About</span></li>
            <li className="nav-item"><span>Skills</span></li>
            <li className="nav-item"><span>Projects</span></li>
            <li className="nav-item"><span>Contact</span></li>
          </ul>

          <div className="menu-toggle" onClick={toggleNavbar}>
            <FontAwesomeIcon 
              icon={faBars} 
              size="lg" 
              className="menu-bar" 
            />
          </div>
        </>
      )}

      {isExpanded && (
        <>
          <div className="logo">
            <img src="/src/assets/imgs/logo-2.png" alt="Logo" className="logo-img" />
            <span className="logo-text">Karthikeya.</span>
          </div>

          <ul className="nav-list">
            <li className="nav-item"><span>Home</span></li>
            <li className="nav-item"><span>About</span></li>
            <li className="nav-item"><span>Skills</span></li>
            <li className="nav-item"><span>Projects</span></li>
            <li className="nav-item"><span>Contact</span></li>
          </ul>

          <div className="menu-toggle" onClick={toggleNavbar}>
            <FontAwesomeIcon 
              icon={faTimes} 
              size="lg" 
              className="menu-bar cross" 
            />
          </div>
        </>
      )}
    </nav>
  );
}