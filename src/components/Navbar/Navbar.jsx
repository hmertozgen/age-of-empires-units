import React from "react";
import { Link } from "react-router-dom";
import "./NavbarCSS/Navbar.css";

function Navbar() {
  const units = "units";

  const home = "home";

  return (
    // Mock-Up Components JSX Codes START

    <div className="header">
      <Link to="/" className="logo"></Link>
      <div className="mock-up">
        <ul className="navbarr">
          <li>
            <Link to={`/${home}`} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/${units}`} className="link">
              Units
            </Link>
          </li>
        </ul>
      </div>
    </div>

    // Mock-Up Components JSX Codes END
  );
}

export default Navbar;
