import React from 'react'
import Cta from './Cta'
import "./header.css"
import me from "../../assets/newola3.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className='container'>
        <div className='header-container' >
            <h5 className='text-top'>Hello, i'm</h5>
            <h1 className='text-top'>Olaoluwa Adewunmi </h1>
            <h5 className='text-top' >Frontend developer</h5>
            <Cta/>
            <HeaderSocials/>
            <div className='me'>
                <img src={me} alt="header img" />
                
            </div>
            <a href="#contact" className='scroll-down'>Scroll Down</a>
            
        </div>
    </header>
  )
}

export default Header