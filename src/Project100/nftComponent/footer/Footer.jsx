import React from 'react'
import './footer.css'
import logo from '../../../assestNft/playlogo.svg'
import { FaFacebookF,FaRegCopyright,FaInstagram,FaTwitter,FaDiscord } from 'react-icons/fa';

export default function Footer (){
  const  details=[
        {
           data0: <h3>Marketplace</h3>,
           data1: "NFT",
           data2: "Tokens",
           data3: "Collections",
           data4: "Artist",
        },
        {
            data0: <h3>Games</h3> ,
            data1: "Adventure",
            data2: "Arcade ",
            data3: "Race",
            data4: "Puzzles"
         },
         {
            data0: <h3>Company</h3> ,
            data1: "About us",
            data2: "Creators ",
            data3: "Career",
            data4: "Contact us"
         },
        
    ]
    return(
        <div className='footer-con'>
            <div className='container'>
                <div className='foot-main'>
                    <div className='footer-left'>
                        <div className='play-logo'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='social-icon'>
                            <span ><FaFacebookF/></span>
                            <span><FaInstagram/></span>
                            <span><FaTwitter/></span>
                            <span><FaDiscord/></span>
                        </div>
                        

                    </div>
                    
                        <div className='footer-center'>
                           
                            <div className='body-con' >
                            {
                                details.map((x,i)=>(
                                <div className='bodyy' key={i}>
                                    <span>{x.data0}</span>
                                    <span>{x.data1}</span>
                                    <span>{x.data2}</span>
                                    <span>{x.data3}</span>
                                    <span>{x.data4}</span>
                                    

                                </div>

                                ))
                              

                            }

                            </div>
                       
                          
                            
                            
                        </div>
                    
                    <div className='footer-right'>
                        <div className='newsletter'>
                            <h3>Subscribe to our newsletter</h3>

                        </div>
                        <div className='input-subscribe'>
                            <input type="text" placeholder='Email address'/>
                            <span className='btn '>Subscribe</span>
                        </div>

                    </div>

                </div>
                <div className='footnote'>
                    <h5><FaRegCopyright/>2022 Play Safe</h5>

                </div>

            </div>
        
        </div>
    )
}