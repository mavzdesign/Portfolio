import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/vegge.png"
import img2 from "../../assets/dillivry.png"
import img3 from "../../assets/playsafe.png"

const Portfolio = () => {
  const myportfolio =
  [
    {
      images: img1,
      title:"Veggy",
      link1: "https://github.com/mavzdesign/react-shopping-cart",
      link2: "https://legendary-cajeta-ebfa36.netlify.app/"

    },
     {
      images: img2,
      title:"Dillivry",
      link1: "https://github.com/mavzdesign",
      link2: "https://dillivry.com/"

    },
    {
      images: img3,
      title:"Play safe",
      link1: "https://github.com/mavzdesign/NFTPROJECT-PLAYSAFE-",
      link2: "https://curious-profiterole-621e69.netlify.app"

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