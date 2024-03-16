import React from 'react';
import "../assets/global.css";
import "./Menu.css";
import { Link } from "react-router-dom";
import Header from '../LayoutMyFiles/Header';
import MakeReservation from "../components/MakeReservation";
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer';

const Reservation = () => {
    return  (
      <div className='main'>
        <Header/>
        <div className='myMenu'>
          <Link to="/" style={{paddingRight: "15px"}}>HOME</Link>
          <Link to="/reservation" >RESERVATION</Link>
          <h1 className='reservation-title title'>Make a Reservation</h1>
        </div>
        <MakeReservation />
        <Instagram /> 
        <Footer/> 
      </div>

    );
  };
  
  export default Reservation;