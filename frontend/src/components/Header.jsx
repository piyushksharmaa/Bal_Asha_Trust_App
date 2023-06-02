import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>Bal Asha Trust</h1>
      <main>
        <Link to="/About">About Us</Link>
        <Link to="/Projects">Our Projects</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Donate">Donate Now!</Link>
      </main>
    </nav>
  );
};

export default Header;
