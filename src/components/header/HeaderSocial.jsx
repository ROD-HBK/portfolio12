import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://linkedin.com' target='blank'><BsLinkedin/> </a>
<a href='https://github.com' target='blank'><FaGithub/> </a> 
<a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
<a href='https://whatsapp.com' target='blank'><BsWhatsapp/> </a>
</div>
)
}
export default HeaderSocial