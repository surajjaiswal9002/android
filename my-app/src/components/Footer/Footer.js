import React from 'react'
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Footer() {
    return (
        <footer id="footer" className="section footer" >
        <div className="container">
          <div className="footer__top">
            <div className="footer-top__box">
              <h3>Know About Us</h3>
              <a href="/">About Us</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms & Conditions</a>
              <a href="/">Contact Us</a>
              <a href="https://www.google.com/maps/">Site Map</a>
            </div>
            <div className="footer-top__box">
              <h3>Connect With Us</h3>
              <a href="https://www.facebook.com/" >  <FacebookIcon/> Facebook</a>
              <a href="https://www.instagram.com/"><InstagramIcon />  Instagram</a>
              <a href="https://twitter.com/">< TwitterIcon /> Twitter</a>
              <a href="https://www.linkedin.com/"><i className='bx bxl-linkedin-square' ></i> linkedin</a>
              
            </div>
            <div className="footer-top__box">
              <h3>MY ACCOUNT</h3>
              <a href="/">My Account</a>
              <a href="/">Order History</a>
              <a href="#">Wish List</a>
              <a href="#">Newsletter</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer-top__box">
              <h3 >CONTACT US</h3>
              <div>
                <i className='bx bxs-map' ></i>
                Jharsuguda Odisha India
              </div>
              <div>
                <box-icon name='mail-send'></box-icon>
                surajjaiswal9002@gmail.com
              </div>
              <div>
                <box-icon name='mobile'></box-icon>
                +91-8457809598
              </div>
              <div>
                Jharsuguda, Odisha , INDIA
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer-bottom__box">
    
          </div>
          <div className="footer-bottom__box">
    
          </div>
        </div>
        
      </footer>
    )
}
