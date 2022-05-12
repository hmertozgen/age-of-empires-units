import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarCSS/Navbar.css";

function Navbar() {
  //   const currentUrl = window.location.href;
  const units = "units";
  const unitDetails = "unitdetails";
  const home = "home";
  //   const [currentUrl, setCurrentUrl] = useState(window.location.href);
  //   const [showHead, setShowHead] = useState(home);
  //   console.log(typeof currentUrl);
  //   console.log(currentUrl.search());

  //   useEffect(() => {
  //     if (currentUrl.includes(home)) {
  //       setShowHead("Home Page ");
  //       //   setCurrentUrl(window.location.href);
  //     } else if (currentUrl.includes(units)) {
  //       setShowHead("Units ");
  //       //   setCurrentUrl(window.location.href);
  //     } else if (currentUrl.includes()) {
  //       setShowHead("Unit Details ");
  //       //   setCurrentUrl(currentUrl);
  //     }
  //   }, []);

  //   console.log(currentUrl.includes("units"));
  return (
    <div className="header">
      <Link to="/" className="logo">
        {/* {showHead} */}
        Logo
      </Link>
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
  );
}

export default Navbar;
