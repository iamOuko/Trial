import React from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

const Nav = () => {
  return (
    <div>
      <ul className="navigationBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
