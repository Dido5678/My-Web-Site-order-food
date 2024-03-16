import React from 'react';
import "../assets/global.css";
import "./Menu.css";
import { Link } from "react-router-dom";
import Header from '../LayoutMyFiles/Header';
import ContactInfo from "../components/ContactInfo";
import ContactError from '../components/ContactError';
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer';




const Contact = () => {
  return (
        <>
          <div className='main'>
            <Header/>
            <div className='myMenu'>
               <Link to="/" style={{paddingRight: "15px"}}>HOME</Link>
               <Link to="/contact">CONTACT</Link>
               <h1 className='contact-title title'>Contact us</h1>
            </div>
            <ContactInfo />
            <ContactError />
            <Instagram /> 
            <Footer/> 
          </div>
        </>
    );
  };
  
  export default Contact;