import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiLinkedin, FiTwitter} from 'react-icons/fi'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Wolvelinux</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FiLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; wolvelinux  All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer