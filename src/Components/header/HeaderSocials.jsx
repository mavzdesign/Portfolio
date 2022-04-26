import React from 'react'
import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" > <ImLinkedin/></a>
      <a href="http://github.com" target="_blank" rel="noopener noreferrer" ><BsGithub/> </a>
     

    </div>
  )
}

export default HeaderSocials