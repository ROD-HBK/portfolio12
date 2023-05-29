import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from "../images/Roderic.jpeg";
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header>
<div className='container header__container'>
<h3>Hello I'm</h3>
<h1>EFUETANZOH ASONG RODERIC</h1>
<h5 className='text-light'>Software Engineer </h5>
<CTA/>
<HeaderSocial/>
<div className='my_image'>
<img src={me} alt='Roderic'/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;
