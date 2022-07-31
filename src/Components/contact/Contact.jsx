import React from 'react'
import "./contact.css"
import { MdOutlineMail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
// import { yupResolver } from "@hookform/resolvers/yup";




const Contact = () => {
  const { register,resetField, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const contactbox =
  [
    {
      icon:<MdOutlineMail/> ,
      title:"Email",
      userid:"adeolarhowolabi@gmail.com",
      link:"mailto:adeolarhowolabi@gmail.com"

    },

  {
    icon: <SiWhatsapp/>,
    title:"Whatsapp",
    userid:"+234-8117231053",
    link:"https://wa.link/5j749l"

  }

  ]

  // const form = useRef();

  const sendEmail = (data) => {
    // e.preventDefault();
    console.log(data)

    emailjs.send('service_v03va6u', 'template_omflxof', data, 'KiXGdGFVQlFJ50RMr')
      .then((result) => {
        if(result.status === 200){
          swal({
            title: "Sent",
            text: "Your message to Olaoluwa was sent successfully ",
            icon: "success",
          });
          resetField("name")
          resetField("fullName")
          resetField("msg")

        }
          // console.log(result);

      }, (error) => {
          console.log(error.text);
          
      });
      
  };
  return (
    <div id='contact' className='container'>
      <div className='contact-con'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className='contact-main-con'>
          <article className='contact'>
            {
              contactbox.map((x,i)=>(

                <div className='contact-email-whatsapp' key={i}>
                  <div className='email-whatsapp'>
                    <div className='contact-icons'>{x.icon}</div>
                    <h5 className='contact-title'>{x.title}</h5>
                    <div className='userid'>{x.userid}</div>
                    {/* <a href={x.link} >send a message</a> */}
                    <a href={x.link} className='SAM' target="_blank" rel="noopener noreferrer">send a message</a>

                  </div>
            

                </div>

              ))  
            
            }
          </article>
          <div className='contact-form'>
              <form  onSubmit={handleSubmit(sendEmail)} className='contact-main-form' >
                <input type="text" placeholder='Your Fullname'  {...register("fullName", { required: "Please enter your  fullName." })}/>
                <input type="text" placeholder='Your Name' 
                  {...register("name", { required: "Please enter your  name." })}/>
                <textarea name="message" id="" cols="30" rows="10"
                  {...register("msg", { required: "Please enter your message." })}
                
                required></textarea>
                <button type='submit' className='btn btn-main'>Send Message</button>
                {/* <a href="" className='btn btn-main'>Send Message</a> */}
              </form>

            </div>
        </div>


      </div>

      
     </div>
  )
}

export default Contact