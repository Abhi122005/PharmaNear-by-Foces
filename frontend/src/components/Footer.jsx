import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fm-footer">
      <div className="fm-footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
    </footer>
  );
}

export default Footer;