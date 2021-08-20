import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="contact">
          <div className="title-footer">Contacts</div>
          <div>Email: zlatka094@seznam.cz</div>
          <div>Phone: +420 735 204 082</div>
        </div>
        <div className="links">
          <div className="title-footer">Explore</div>
          <Link className="linkToAbout" to="/about">
            <div className="linkToAbout">About us</div>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
