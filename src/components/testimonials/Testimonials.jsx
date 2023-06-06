import React from 'react'
import './testimonials.css'
import AVTR1 from '../images/Roderic.jpeg'
import AVTR2 from '../images/roderic0.jpg'
import AVTR3 from '../images/roderic1.jpg'
import AVTR4 from '../images/roderic3.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
    {
    avatar: AVTR1,
    name: 'Efuet Roderic',
    review: 'Thanks you for building my portfolio website for me'
    },
    {
        avatar: AVTR2,
        name: 'Roderic Rodriguez',
        review: 'Wow I really appreciate for building my business website and give it on time '
        },
        {
            avatar: AVTR3,
            name: 'Rodriguez Efuet',
            review: 'Wow I really appreciate for building my business website and give it on time '
            },
            {
                avatar: AVTR4,
                name: 'Rod HBK',
                review: 'Wow I really appreciate for building my business website and give it on time '
                },

]

const Testimonials = () => {
  return (
    <section id='testimonial'>
        <h5> Reviews from clients</h5>
        <h1>Testimonials</h1>

        <Swiper className= 'container testimonials_container'
           // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
          {
            data.map(({avatar,name,review}, index)=>{
                return(
                    <SwiperSlide key={index} className='testimonials'>
                    <div className='client_avatar'>
                        <img src={avatar}/>
                        
                    </div>
    
                    <h5 className='client_name'>{name}</h5>
                        <small className='client_review'>{review}
                        </small>
                </SwiperSlide>
                )
            })
          } 
            

        </Swiper>

    </section>
  )
}

export default Testimonials