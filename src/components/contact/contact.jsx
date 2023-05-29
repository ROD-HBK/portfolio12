import React from 'react'
import './contact.css'
import {MdOutlineEmail,MdArrowCircleRight} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_5vuauza', 'template_fdnnl56', form.current,
'EmSdUNQzQuxkUqGWx')
e.target.reset()
.then((result) => {
console.log(result.text)
},(error) =>{
console.log(error.text);
});
};
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact</h2>

<div className="container contact__container">
<div className="contact__options">

<article className='contact__option'>

<MdOutlineEmail className='contact__option__icon'/>
<p>  <span><MdArrowCircleRight />  </span> Email</p>
<h5>efuetroderic@gmail.com</h5>
<a href='mailto:efuetroderic@gmail.com' target='_blank'   rel="noreferrer">send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<p> <span><MdArrowCircleRight />  </span>  LinkedIn</p>
<h5>Profile</h5>
<a href='#nothing'
>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<p>  <span><MdArrowCircleRight />  </span>  Whatsapp</p>
<h5>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237650667583'
target='_blank'   rel="noreferrer">Whatsapp Number</a>
</article>
</div>
<div id="form"><h2>SEND MESSAGE</h2>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='               full name' required/><br /><br />
<input type="email" name='email' placeholder='             your email' required/><br /><br />
<textarea name="message" id="message" cols="30" rows="10"
placeholder='                 your message' required></textarea><br /><br />
<button type="submit" className='btn btn-primary'>Testified</button><br />
</form></div>
</div>
</section>
)
}
export default Contact