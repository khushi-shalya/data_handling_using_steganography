import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-columns">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-brand">
            <span role="img" aria-label="shield">🛡️</span> <span className="brand-green">scan</span>infoga
          </h2>
          <p>Providing cutting-edge cybersecurity solutions to protect your digital assets and infrastructure.</p>
          <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          </div>
      </div>

        {/* Quick Links */}
<div className="footer-section">
  <h3>Quick Links</h3>
  <ul className="quick-links">
    <li><Link to="/">🏠 Home</Link></li>
    <li><Link to="/components/encode">🧬 Encode</Link></li>
    <li><Link to="/components/decode">🕵️ Decode</Link></li>
    <li><Link to="/components/about">ℹ️ About</Link></li>
  </ul>
</div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>✉️ contact@scaninfoga.in</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 123 Security Street, Cyber City, 10001</p>
        </div>

        {/* Subscribe */}
        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Stay updated with the latest cybersecurity news and updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

      </div>
      <hr />
      <p className="footer-copy">&copy; {new Date().getFullYear()} ScanInfoga and Khushi Shalya. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
