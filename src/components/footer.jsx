import { useRef } from "react";
import "./footer.css"
import emailjs from '@emailjs/browser';

export default function Footer(){
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs
  .sendForm('service_m1ao48g', 'template_elrr4ha', form.current, {
    publicKey: 'njghrS0I7tVf6UBxN',
  })
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );
};
    return(
      <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">Stay at forest .</h2>
          <p>
            Contact us to get a wonderfull exploration
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Magic movement jungle resort, Kanthaloor</p>
          <p>Idukki, kerala</p>
          <p>7.00 am to 10.00 pm</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:stayatmudhouse@gmail.com">stayatmudhouse@gmail.com</a></li>
            <h3>9188211822</h3>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>Support</h3>
          <div className="form" >
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Name" className="input"/><br/><br/>
              <input type="email" name="from_email" placeholder="E-mail" className="input" /><br/><br/>
              <textarea  name="message" placeholder="Message" className="textarea"/><br/>
              <button type="submit" value="Send" className="sendbut">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 All rights reserved</p>
      </div>
    </footer>
  );
};