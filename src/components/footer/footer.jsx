import React from "react";
import "./footer.css"
import{FaFacebookSquare} from 'react-icons/fa'
import{FiInstagram} from 'react-icons/fi'
import{SiTwitter} from 'react-icons/si'
import{SiWhatsapp} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'>EFUET RODERIC</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contacts">Contacts</a></li>

        </ul>

        <div className="footer_socials">
            <a href="https://facebook.com"><FaFacebookSquare/></a>
            <a href="https://instagram.com"><FiInstagram/></a>
            <a href="https://twitter.com"><SiTwitter/></a>
            <a href="https://whatsapp,com"><SiWhatsapp/></a>
        </div>
        <div className="footer_copyright">
            <small>&copy; EFUET RODERIC. All rights reserved</small>
        </div>

    </footer>
  )
}

export default footer