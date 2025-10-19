import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
            Globe Nutrients is your go-to destination for premium gym supplements. Explore our selection of top-notch
            products, including protein powders, pre-workout boosters, and vitamins. We're dedicated to helping you
            achieve your fitness goals with expert guidance and quality products. Elevate your workout experience with
            us today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2 className="footer-title">QUICK LINKS</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <ul className="footer-contact">
            <li>
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+918968680273" className="contact-link">+91 8968680273</a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@h2hnutritionmart.com" className="contact-link">info@h2hnutritionmart.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>Punjab-Amritsar, Dashmesh Nagar, street no. 11</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        {/* Social Icons */}
        <div className="social-icons">
          <a href="#" className="social-link">
            <FaFacebookF />
          </a>
          <a href="#" className="social-link">
            <FaYoutube />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="copyright">©2025 Globe Nutrients. All rights reserved.</p>
      </div>

      {/* Sticky WhatsApp Button */}
      <a href="https://wa.me/918968680273" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp className="whatsapp-icon" />
        How can I help you?
      </a>
    </footer>
  )
}

export default Footer
