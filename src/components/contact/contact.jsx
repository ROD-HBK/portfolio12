import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import{ useRef } from 'react'
import emailjs from 'emailjs-com'


const contact = () => {
   const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ro0wvaw', 'template_drzk9ku', form.current, 'Q8P63lDX46m14dtai')
         e.target.reset()
      };

  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
        <div className="contact_options">
         <article className='contact_options'>
           <center> <MdOutlineEmail className='contact_option-icon'/></center>
            <h4><center>Email</center></h4>
            <h5>efuetroderic@gmail.com</h5>
            <a href="mailto:efuetroderic@gmail.com" target="_blank" rel = "noreferrer">Send a message </a>
            </article> 
           
            <article className='contact_options'>
            <center><BsWhatsapp className='contact_option-icon'/></center>
            <h4> <center>WhatsApp</center></h4>
            <h5>whatsapp Number</h5>
            <a href="https://api.whatsApp.com/send?phone+237650667583 " target="_blank" rel = "noreferrer">Send a message </a>
            </article> 

            <article className='contact_options'>
            <center><BsInstagram className='contact_option-icon'/></center>
            <h4> <center>Instagram</center></h4>
            <h5>Instagram Account</h5>
            <a href="https://m.me/efuetroderic" target="_blank" rel = "noreferrer">Send a message </a>
            </article> 
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message"rows="7" placeholder='Your Message' required></textarea>
            <button type='summit' className='btn btn-primary'>Send</button>
        </form>
    </div>
  </section>
  )
}

export default contact
