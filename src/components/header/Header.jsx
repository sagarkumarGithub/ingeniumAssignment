import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="icon">PrimeBlog</div>
      <div className="links">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
