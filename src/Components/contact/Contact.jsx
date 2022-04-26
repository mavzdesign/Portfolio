import React, { useRef }  from 'react'
import "./contact.css"
import { MdOutlineMail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import emailjs from '@emailjs/browser';




const Contact = () => {
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
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
              <form  onSubmit={sendEmail} className='contact-main-form' ref={form}>
                <input type="text" placeholder='Your Fullname' required/>
                <input type="text" placeholder='Your Name' required/>
                <textarea name="message" id="" cols="30" rows="10" required></textarea>
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