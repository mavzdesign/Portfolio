import React from 'react'
import "./nft.css"
import Footer from './nftComponent/footer/Footer'
import Home from './nftComponent/home/Home'
import JoinUs from './nftComponent/joinUs/JoinUs'
import TopNft from './nftComponent/topNft/TopNft'
import Trending from './nftComponent/trending/Trending'


export default function Nft() {
  return (
    <div>

       <div className="main-box" >
         <Home/>
         <Trending/>
         <TopNft/>
         <JoinUs/>
         <Footer/>
         
                

        

        
      </div>


    </div>
  )
}
