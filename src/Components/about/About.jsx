import React from 'react'
import "./about.css"
import me from "../../assets/olaax11.jpeg"
import { FaAward ,FaRegFolderOpen} from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const About = () => {

  const aboutCards = [
    {
      title: "Experience",
      subtitle: "1+ years working",
      icons: <FaAward/>
     },

    {
      title: "Users",
      subtitle: "1000+",
      icons: <FiUsers/>
    },

    {
      title: "Projects",
      subtitle: "2 projects",
      icons: <FaRegFolderOpen/>
    }
  ]
  return (
    <div id='about' className='container'>
      <div className='about-container'>
        <div className='about-headings'>
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
        <div className='about-img-content'>
          <div className='about-img'>
            <div className='about-img-backround'>
               <img src={me} alt="about image" />
            </div>
           
          </div>

          <div className='about-content'>
            <div className='about-cards-con'>
            {
              aboutCards.map((x,i)=>(
              
              <div className='about-content-cards' key={i}>
                <article className='about-content-card'>

                  <div style={{color:"var(--main)"}}>{x.icons}</div>
                  <h5>{x.title}</h5>
                  <small>{x.subtitle}</small>

                </article>
             </div>

              ))
              
            }
            </div>
            <p>I am a frontend software engineer with the passion to build amazing products that proffer solutions to socio-economic problems faced by the world population, while keeping to high standards and best practices. As a professional frontend engineer, I advocate amazing user experiences, as well as aesthetically pleasing and responsive user interfaces. My preferred stack is in core Javascript and ReactJs, I write clean and maintainable codes with a proper architecture using these technologies, and also stay up to date with recent modifications to them.</p>
            <a href="#contact" className='btn btn-main'> let's talk</a>
         
           
           

          </div>
        </div>
        

      </div>
      
    </div>
  )
}

export default About