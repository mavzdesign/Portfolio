import React,{useState} from 'react';
import './navbar.css';
import logo from '../../../assestNft/playlogo.svg';
import  {HiMenuAlt2,HiMenuAlt3}from 'react-icons/hi';
// import  {IoMdClose}from 'react-icons/io';




export default function Navbar (){
    const [menuClick, setmenuClick] = useState(false)
    return(
        <>
         <div className='navbar-con'>
            <div className='logo-con'>
                <img src={logo} alt="logo" />

            </div>
            <div className='navigations'>
                <span className='home'>Home</span>
                <span className='games'>Games</span>
                <span className='about'>About us</span>
                <span className='explore'>Explore</span>
                <span className='market'>Marketplace</span>

            </div>
            <div className='connect-wallet'>
                <span className='btn'> Connect wallet</span>
                {/* <button className='btn'>Connect wallet</button> */}

            </div>
        
        </div>

        <div className='navbar-mobile'>
            <div className='nav-mobile'>
         
                <div className='logo-con'>
                    <img src={logo} alt="logo" />

                </div>
                <div className='hamburger' onClick={()=>{setmenuClick(!menuClick)}}> { menuClick ? <HiMenuAlt2 style= {{fontSize:"30px"}}/>:<HiMenuAlt3  style= {{fontSize:"30px"}}/>  }</div>
          

            </div>
            <div  className={ menuClick ?'nav-dropdown' : 'nav-dropdownX'}>
                <div className='navigations-mobile' >
                    <span className='home'>Home</span>
                    <span className='games'>Games</span>
                    <span className='about'>About us</span>
                    <span className='explore'>Explore</span>
                    <span className='market'>Marketplace</span>

                </div>
                <div className='connect-mobile-wallet'>
                    <span className='btn'> Connect wallet</span>
                    {/* <button className='btn'>Connect wallet</button> */}

                </div>

            </div>

        </div>
            
        </>

       
       
    )
}
