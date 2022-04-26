import React from 'react'
import "./testimonial.css"
import img1 from "../../assets/avatar1.jpg"
import img2 from "../../assets/avatar2.jpg"
import img3 from "../../assets/avatar3.jpg"
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
      title: "Portfolio Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi nulla rerum minus vitae assumenda magni, eaque accusantium, corporis eveniet eius. Assumenda quidem id illum vero quo veniam molestias laudantium!"
     

    },
     {
      images: img2,
      title:"Portfolio Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi nulla rerum minus vitae assumenda magni, eaque accusantium, corporis eveniet eius. Assumenda quidem id illum vero quo veniam molestias laudantium!"
     

    },
    {
      images: img3,
      title:"Portfolio Title",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi nulla rerum minus vitae assumenda magni, eaque accusantium, corporis eveniet eius. Assumenda quidem id illum vero quo veniam molestias laudantium!"
     

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