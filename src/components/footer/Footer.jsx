import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="about">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia atque nemo ad modi officiis iure, autem nulla tenetur
            repellendus.
          </p>
        </div>
        <div className="newsletter">
          <h1>Newsletter</h1>
          <p>Stay update with our latest</p>
          <input type="text" placeholder="Email" />
        </div>
        <div className="follow">
          <h1>Follow us</h1>
          <p>Let us be Social</p>
          <div className="socialIcons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
      </div>
      <div className="lowerFooter">
        <h2>
          Copyright ©2021 | Blooger Project designed and made by Priyam Khatri
        </h2>
      </div>
    </div>
  );
};

export default Footer;
