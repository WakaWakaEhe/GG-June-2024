/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/style.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="social">
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>
      <div className="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Our Company</a>
      </div>
      <p>&#169; All Rights Reserved.</p>
    </section>
  );
}

export default Contact;
