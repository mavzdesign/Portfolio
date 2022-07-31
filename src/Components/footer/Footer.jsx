import React from 'react'
import "./footer.css"
import { BsFacebook,BsGithub,BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div id='footer' className='footer-section'>
      <div className='footer-body'>
        <ul className='content'>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonial</a></li> 
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className='social-icons'>
          <li className='twitter'>
            <a href="http://" target="_blank" rel="noopener noreferrer"> <BsFacebook style={{fontSize:"25px", color:"var(--bgColor)"}}/></a>
          </li>
          <li className='instagram'> 
            <a href="https://github.com/mavzdesign" target="_blank" rel="noopener noreferrer"> <BsGithub style={{fontSize:"25px", color:"var(--bgColor)"}}/></a>
          </li>
          <li className='facebook'>
             <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter style={{fontSize:"25px", color:"var(--bgColor)"}}/></a> 
          </li> 
        </ul>
        
      </div>


    </div>
  )
}

export default Footer