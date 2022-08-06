import React ,{useRef} from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mi2oahc', 'template_6wuj90k', form.current, 'wSEQxgEF64gf50c4c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return <section id="contact">
    
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option__icon"/>
          <h4>Email</h4>
          <h5>amitgadodiya12@gmail.com</h5>
          <a href="mailto:amitgadodiya12@gmail.com" target="_blank">Send a Message</a> 

        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option__icon"/>
          <h4>Messanger</h4>
          <h5>amit.gadodiya</h5>
          <a href="https://m.me/amit.gadodiya" target="_blank">Send a Message</a> 

        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option__icon"/>
          <h4>WhatsApp</h4>
          <h5>+91 9503791423</h5>
          <a href="https://api.whatsapp.com/send?phone+919503791423" target="_blank">Send a Message</a> 

        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;
