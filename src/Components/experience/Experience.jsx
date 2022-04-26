import React from 'react'
import "./experience.css"
import Grid from '@mui/material/Grid';

import { BsFillPatchCheckFill } from 'react-icons/bs';


const Experience = () => {
  const myskill =[
    [
      {
        title:"HTML",
        desc: "Experienced",
        icon: <BsFillPatchCheckFill style={{color:"var(--main)"}}/>
  
      },
      {
        title:"Javascript",
        desc: "Experienced",
        icon: <BsFillPatchCheckFill style={{color:"var(--main)"}}/>
  
      },
    

    ],
    [
      {
        title:"CSS",
        desc: "Experienced",
        icon: <BsFillPatchCheckFill style={{color:"var(--main)"}}/>
  
      },
      {
        title:"Bootstrap",
        desc: "Experienced",
        icon: <BsFillPatchCheckFill style={{color:"var(--main)"}}/>
  
      },
    

    ],
    [
      {
        title:"React",
        desc: "Experienced",
        icon: <BsFillPatchCheckFill style={{color:"var(--main)"}}/>
  
      },
      {
        title:"Tailwind",
        desc: "Experienced",
        icon: <BsFillPatchCheckFill style={{color:"var(--main)"}}/>
  
      },
     

    ]  

  ]
  
  return (
    <div id='experience' className='container'>
      
      <div className='experience-con'>
        <div className='experience-text'>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
        </div>

        <div className='frontend-con'>
          <article className='frontend'>
            <h3>Frontend Development</h3>
            {
              myskill.map((x,i)=>(

                
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} key={i}>
                  <Grid item xs={6}>
                    
                      <span className='skill'>
                        <h4>{x[0].icon} {x[0].title}</h4>
                      </span>
                      
                      <small>{x[0].desc}</small>
                    
                  </Grid>
                  <Grid item xs={6}>
                    
                    <span className='skill'> 
                      <h4>{x[1].icon} {x[1].title}</h4>
                    </span>
                  
                    <small>{x[1].desc}</small>
                  
                  </Grid>
                
        
                </Grid>
           


              ))
              
            }

            

          </article>

        </div>
       

      </div>
      
      
    </div>
   
  )
}

export default Experience