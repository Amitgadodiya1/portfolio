import React from 'react'
import './footer.css'
import{FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> AG Developer</a>

      <ul className='permalinks'> 
      <li><a href="#head">Home</a></li>
      <li><a href="#aboutme">About Me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact ME</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/amit.gadodiya"><FaFacebookF/></a>
        <a href="https://www.instagram.com/amitgadodiya1/"><FiInstagram/></a>
        <a href="https://twitter.com/amitgadodiya1"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; AG Developer . All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer