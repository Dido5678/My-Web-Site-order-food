import React from 'react';
import "../assets/global.css";
import "./Menu.css";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from '../LayoutMyFiles/Header';
import AboutTasty from "../components/AboutTasty";
import AboutChef from '../components/AboutChef';
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer';


const About = () => {
  return (
    <div className='main'>
        <Header/>
        <section className='myMenu'>
        <div className='menu'>
          <Link to={"/"}  style={{paddingRight: "15px"}}>HOME</Link>
          <Link to={'/about'}>ABOUT</Link>
          <h1 className='about-title title'>About Us</h1>
        </div>
      </section>
        <AboutTasty />
        <AboutChef/>
        <Instagram /> 
        <Footer/>
    </div>
    );
  };
  
  export default About;