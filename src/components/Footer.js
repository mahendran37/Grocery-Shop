import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Online Shopping</h4>
          <ul>
            <li>Rice</li>
            <li>Meat & fish</li>
            <li></li>
            <li>Fruits</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Policies</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms of Use</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Fresh Cart. All rights reserved.</p>
        <p>Registered Office Address: Your Address Here</p>
      </div>
    </footer>
  );
};

export default Footer;