import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  console.log("Navbar is rendered");
  return (
    // Debug log
    <nav>
      <div className="navbackground">
        <div className="aligner">
          <Link to="/" className="navstyle">
            Home
          </Link>
          <Link to="/calculator" className="navstyle">
            Calculators
          </Link>
          <p className="navstyle">Spreadsheets</p>
          <p className="navstyle">Spell Lists</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
