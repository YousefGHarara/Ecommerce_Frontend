import "./footer.css";

import React from "react";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pinterst_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterst_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>CopyRight &copy; 2023 &bull; All Right Reversed .</p>
      </div>
    </footer>
  );
};

export default Footer;
