import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

 function Footer() {
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer-top__box"> 
            <h3>Know About Us</h3>
            <Link to="/About"> <h5>About Us</h5></Link>
            <Link to="/"> <h5>Privacy Policy</h5></Link>
            <Link to="/"> <h5>Terms & Conditions</h5></Link>
            <Link to="/Contact"> <h5>Contact Us </h5></Link>
            <Link to="https://www.google.com/maps">Site Map</Link>
          </div>
          <div className="footer-top__box">
            <h3>Connect With Us</h3>
            <Link to="https://www.facebook.com/">
              <h5>Facebook </h5>
            </Link>
            <Link to="https://www.instagram.com/">
             
              <h5>Instagram </h5>
            </Link>
            <Link to="https://twitter.com/">
              <h5> Twitter</h5>
            </Link>
            <Link to="./https://www.linkedin.com/">
            <h5>linkedin</h5>
            </Link>
          </div>
          <div className="footer-top__box">
            <h3>MY ACCOUNT</h3>
            <Link to="/Account"><h5>My Account</h5></Link>
            <Link to="/"><h5>Order History</h5></Link>
            <Link to="#"><h5>Wish List</h5></Link>
            <Link to="#"><h5>Newsletter</h5></Link>
            <Link to="/"><h5>Returns</h5></Link>
          </div>
          <div className="footer-top__box">
            <h3>CONTACT US</h3>
            <h4>Jharsuguda Odisha India</h4>
            <h4>surajjaiswal9002@gmail.com </h4>
            <h4>+91-8457809598</h4>
            <h4>Jharsuguda, Odisha , INDIA</h4>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer-bottom__box"></div>
        <div className="footer-bottom__box"></div>
      </div>
    </footer>
  );
}
export default Footer;