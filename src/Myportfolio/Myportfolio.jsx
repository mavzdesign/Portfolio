import React from 'react';
import About from '../Components/about/About';
import Contact from '../Components/contact/Contact';
import Experience from '../Components/experience/Experience';
import Footer from '../Components/footer/Footer';
import Header from '../Components/header/Header';
import Nav from '../Components/nav/Nav';
import Portfolio from '../Components/portfolio/Portfolio';
import Services from '../Components/services/Services';
import Testimonial from '../Components/testimonial/Testimonial';


export default function Myportfolio(){
    return(
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        
        
        </>
        
    )

}