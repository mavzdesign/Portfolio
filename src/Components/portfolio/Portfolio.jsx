import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/portfolio1.jpg"
import img2 from "../../assets/portfolio2.jpg"
import img3 from "../../assets/portfolio3.jpg"

const Portfolio = () => {
  const myportfolio =
  [
    {
      images: img1,
      title:"Portfolio Title",
      link1: "http://github.com",
      link2: "http://google.com"

    },
     {
      images: img2,
      title:"Portfolio Title",
      link1: "http://github.com",
      link2: "http://google.com"

    },
    {
      images: img3,
      title:"Portfolio Title",
      link1: "http://github.com",
      link2: "http://google.com"

    },


  ]
  return (
    <div className='container' id='portfolio'>
      <div className='portfolio-con'>
          <h5>My Recent Works</h5>
          <h2>My Portfolio</h2>
          <div className='portfolio-main-con'>
            {
              myportfolio.map((x,i)=>(

                <article className='portfolio' key={i}>
                  <div className='portfolio-img'>
                    <img src={x.images} alt="portfolio-img" />
                  </div>
                  <h3>{x.title}</h3>
                  <div className='portfolio-btns'>
                  <a href={x.link1} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                  <a href={x.link2} target="_blank" rel="noopener noreferrer" className='btn btn-main'>Live Demo</a>

                  </div>


                </article>
              ))
              
            }
            


          </div>

      </div>
      
      
    </div>
  )
}

export default Portfolio