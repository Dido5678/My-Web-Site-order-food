import React from 'react';
import "../assets/global.css";
import { Link } from "react-router-dom";
import Header from '../LayoutMyFiles/Header';
import AllSpecialties from '../components/AllSpecialties';
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer';



const Specialties = () => {
  
    return (
      <div className='main'>
        <Header/>
        <section className='myMenu'>
          <div className='menu'>
            <Link to="/" style={{paddingRight: "15px"}}>HOME</Link>
            <Link to="specialties" >SPECIALTIES</Link>
            <h1 className='specialties-title title'>Our Specialties</h1>
          </div>
        </section>
        <AllSpecialties />
        <Instagram /> 
        <Footer/> 
    </div>

    );
  };
  
  export default Specialties;