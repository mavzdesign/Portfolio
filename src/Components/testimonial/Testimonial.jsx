import React from 'react'
import "./testimonial.css"
import img1 from "../../assets/femi.jpeg"
import img2 from "../../assets/fola.jpeg"
import img3 from "../../assets/jamiu.jpeg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const mytestimonial =
  [
    {
      images: img1,
      title: "Software Engineer ",
      text: "Olaolu is one of the Front-end developers I've worked with, He understands the technology, and I trust him with my most demanding projects. His vast knowledge of JavaScript and React is ever-evolving and indispensable. It has been great working with him."
     

    },
     {
      images: img2,
      title:"UI/UX Designer ",
      text: "Olaolu is one developer I enjoy working with as a designer, he has a proper understanding of how to implement designs to pixel perfect as well as functionalities of its UX. Since i have had opportunity to work with with he always bring my designs to live just the way I envision in my design "
     

    },
    {
      images: img3,
      title:"Software Engineer ",
      text: "An highly skill personnel, with not just great technical and professional know how but with great interpersonal and communication skills, he is a great team player too and I would love to work with him in the nearest future"
     

    },


  ]
  return (
    <div className='container' id='testimonial'>

      <div className='testimonial-con'>
          <h5>Reviews</h5>
          <h2>Testimonial</h2>
          <Swiper  spaceBetween={30}
          
        centeredSlides={true}
        autoplay={{
          delay:4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        navigation={true}
        modules={[Autoplay, Pagination]}   className='testimonial-main-con mySwiper'>
      
            {
              mytestimonial.map((x,i)=>(

                <SwiperSlide className='testimonial' key={i}>
                  <div className='testimonial-img'>
                    <img src={x.images} alt="testimonial-img" />
                   
                  </div>
                  <h5>{x.title}</h5>
                    <small>
                      {x.text}
                      
                    </small>
                  
               


                </SwiperSlide>
              ))
              
            }
            


          </Swiper>

      </div>

      
    </div>
  )
}

export default Testimonial