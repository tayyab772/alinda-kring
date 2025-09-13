import React from "react";
import "./Footer.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section>
      <div className="main">
        <div className="right">
          <p>© 2025 Alinda Kring Art Advisory</p>
        </div>
        <div className="left">
          {" "}
          <a href="mailto:contact@alinda-kring.com">
            <MdEmail size={22} />
          </a>
          <a href="tel:+44 7555 169137">
            <MdPhone size={22} />
          </a>
          <a
            href="https://facebook.com/alindakringartadvisory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://instagram.com/alindakringartadvisory"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
