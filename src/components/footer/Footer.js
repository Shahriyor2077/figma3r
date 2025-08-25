import "./Footer.scss";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <h2>
            Ready to make something kickass?
            <br />
            <span>Let's get on a call.</span>
          </h2>
        </div>

        <div className="footer__content">
          <div className="footer__info">
            <h3>
              Portfolio Creator<span>.</span>
            </h3>
            <p>4353 Delaware Avenue, San Francisco, USA</p>
            <div className="footer__email">
              <Mail size={18} />
              <a href="mailto:hi@thefolio.com">hi@thefolio.com</a>
            </div>
          </div>

          <div className="footer__links">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Experience</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>Blog</li>
              <li>Projects</li>
            </ul>
            <ul>
              <li>Dribbble</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © All rights reserved. Sumit Hegde. Powered by Webflow / Image
            License Info / Instructions / Changelog / Style Guide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
