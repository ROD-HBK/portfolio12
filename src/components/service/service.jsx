import React from "react";
import {BsFillPatchCheckFill} from 'react-icons/bs'

// import "./experience.css"
const service = () => {
    return(
    <section id='service'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
    
    <div className="container service_container"></div>
      <article className="service">
        <div className="service_head">
            <h3>
                <li>UI/UX Design<BsFillPatchCheckFill className='service_list-icon'/></li>
                <li>Web Development<BsFillPatchCheckFill className='service_list-icon'/></li>
                <li>Content Creation<BsFillPatchCheckFill className='service_list-icon'/></li>
            
            </h3>
        </div>

     </article>
    </section>
    )
}

export default service;