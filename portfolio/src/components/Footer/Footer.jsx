import "./Footer.css";

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h3 className="footer-logo">Athar Siddiqui</h3>

       

        <div className="footer-socials">
          <a target="_blank" href="https://github.com/Atharsidd21"><FaGithub /></a>
          <a target="_blank" href="https://www.linkedin.com/in/athar-siddiqui-b584a7227/"><FaLinkedin /></a>
          <a target="_blank" href="https://www.youtube.com/@AtharCreates"><FaYoutube /></a>
          <a target="_blank" href="https://www.instagram.com/atharcreates?igsh=MWdzMzR5emllYndkZw=="><FaInstagram /></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Athar Siddiqui. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;