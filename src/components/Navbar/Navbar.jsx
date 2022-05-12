import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <Link to="/" className="link">
        Logo
      </Link>
    </div>
  );
}

export default Navbar;
