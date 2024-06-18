import React from 'react';
import logo from '../img2/logo.webp'
import '../styles/style.css'

function Contact() {
  return (
    <section class="contact" id="contact">
    <div class="social">
        <a href="#"><i class='bx bxl-facebook'></i></a>
        <a href="#"><i class='bx bxl-twitter'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
        <a href="#"><i class='bx bxl-youtube'></i></a>
    </div>
    <div class="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Our Company</a>
    </div>
    <p>&#169; All Rights Reserved.</p>
</section>
  );
}

export default Contact;