import React, { useState } from 'react'
import './trending.css';
import slide1 from '../../../assestNft/slide1.svg';
import slide2 from '../../../assestNft/slide2.svg';
import slide3 from '../../../assestNft/slide3.svg';
import slide4 from '../../../assestNft/slide4.svg';
import slide5 from '../../../assestNft/slide5.svg';
import slide6 from '../../../assestNft/slide6.svg';
import slide7 from '../../../assestNft/slide7.svg';
import navimageleft from '../../../assestNft/navimageleft.png';
import navimageright from '../../../assestNft/navimageright.png';
import navimagecenter from '../../../assestNft/navimagecenter.png';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";


export default function Trending() {

  const [active, setactive] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: <img src={slide1} alt="slide1" />
    },
    {
      key: uuidv4(),
      content: <img src={slide2} alt="slide2" />
    },
    {
      key: uuidv4(),
      content: <img src={slide3} alt="slide3" />
    },
    {
      key: uuidv4(),
      content: <img src={slide4} alt="slide4" />
    },
    {
      key: uuidv4(),
      content: <img src={slide5} alt="slide5" />
    },
    {
      key: uuidv4(),
      content: <img src={slide6} alt="slide6" />
    },
    {
        key: uuidv4(),
        content: <img src={slide7} alt="slide7" />
      },
      

  ].map((slide, index) => {
    return { ...slide, onClick: () => setactive( active+1 ) };
  });
  return (
    <div className='trend-con'>
      <div className='container'>
        <div className='trend-heading'>
          <h1>Trending games</h1>
        </div>
        <div className='trend-cards'>
          <div className='cards'>
            <Carousel slides={slides}
              goToSlide={active}
              offsetRadius={3}
              showNavigation={false}
              config={config.wobbly}
            />

          </div>

          <div className='solutionDiv' >
            <div className='con-nav-mage'>
              <span className='navimageconleft' onClick={() => setactive(active - 1)}><img src={navimageleft} alt="navimage" className='navimageleft' /></span>
              <span className='navimageconcenter' onClick={() => setactive(0)}><img src={navimagecenter} alt="navimage" className='navimagecenter' /></span>
              <span className='navimageconright' onClick={() => setactive(active + 1)}> <img src={navimageleft} alt="navimage" className='navimageright' /></span>
            </div>
          </div>






        </div>

      </div>


    </div>
  )
}