import React from 'react'
import cv from "../../assets/cvbyme.pdf"

const Cta = () => {
  return (
    <div className='cta'>
        <a className='btn ' href={cv} download> Download CV</a>
        <a className='btn btn-main' href='#contact'> Let's talk</a>
    </div>
  )
}

export default Cta