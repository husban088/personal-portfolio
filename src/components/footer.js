import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      
    <footer className="footer">

        <div className="row footer-row-1">
          <div className="col-1-of-3">
            <div className="footer-contact">
              <h4 className="location-content">
                <i className="fa-solid fa-location-dot footer-contact-icon"></i>
                <span>location</span>
              </h4>
              <h5 className="location-text">Pakistan</h5>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="footer-contact">
              <h4 className="phone-content">
                <i className="fa-solid fa-mobile-screen-button footer-contact-icon"></i>
                <span>Contact (whatsapp)</span>
              </h4>
              <h5 className="phone-text">03360763840</h5>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="footer-contact email__contact">
              <h4 className="email-content">
                <i className="fa-regular fa-envelope footer-contact-icon"></i>
                <span>email</span>
              </h4>
              <h5 className="email-texts">husbanahmad088@gmail.com</h5>
            </div>
          </div>
        </div>
    
       <div style={{textAlign:"left"}}>

       <div className="row footer-row-2" style={{textAlign:"left"}}>
          <div className="col-1-of-3">
            <div className="footer-details">
              <h5 className="footer-img">
                Husban Ahmad
              </h5>
              <p className="footer-details-paragraph">
                What you can think i can develop it for you
              </p>
              <h4 className="footer-register">Registered By PSEB</h4>
              <img src="./assets/pseb.fe543100.jpg" alt="PSEB" className="footer-pseb"/>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="footer-links">
              <h4 className="footer-quick-links">Quick links</h4>
              <ul className="footer-ul">
                <li className="footer-list"><Link to={'/'} class="footer-nav-link"><i
                      className="fa-solid fa-house footer-nav-icon"></i> home</Link></li>
                <li className="footer-list skills__lists"><Link to={'/skills'} className="footer-nav-link"><i
                      className="fa-solid fa-user footer-nav-icon"></i> Skills</Link></li>
                <li className="footer-list"><Link to={'/projects'} className="footer-nav-link"><i
                      className="fa-brands fa-servicestack footer-nav-icon"></i> Projects</Link></li>
                          <li className="footer-list testi__lists"><Link to={'/testimonials'} className="footer-nav-link">
                          <i class="fa-solid fa-users footer-nav-icon"></i> Testimonials</Link></li>
                <li className="footer-list"><Link to={'/contact'} className="footer-nav-link"><i
                      className="fa-solid fa-diagram-project footer-nav-icon"></i> Contact</Link></li>
              </ul>
              <h4 className="google-rates">What people say about us</h4>
              <img src="./assets/googleReviews.f0072a6f.jpg" alt="googleReviews" className="google-img"/>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="social-links">
              <h4 className="social-heading">social-links</h4>
              <span className="facebook__icon"><i className="fa-brands fa-facebook-f footer-social-links facebook__icon-link"></i></span>
              <span className="twitter__icon"> <i className="fa-brands fa-twitter footer-social-links twitter__icon-link"></i></span>
              <span className="git__icon"><i className="fa-brands fa-github footer-social-links git__icon-link"></i></span>
              <span className="linkedin__icon"> <i className="fa-brands fa-linkedin footer-social-links linkedin__icon-link"></i></span>
              <span className="inst__icon"><i className="fa-brands fa-instagram footer-social-links inst__icon-link"></i></span>
              <span className="you__icon"><i className="fa-brands fa-youtube footer-social-links you__icon-link"></i></span>
            </div>
          </div>
        </div>

       </div>
    
       <div className="last-footer-text">
          <p className="footer-last-paragraph">Copyright © 2023, All Right Reserved <span>Husban Ahmad</span></p>
        </div>
  
    
      </footer>

 

    </>
  )
}

export default Footer;