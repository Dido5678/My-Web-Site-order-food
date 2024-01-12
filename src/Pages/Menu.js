import React from 'react';
import "../assets/global.css";
import "./Menu.css";
import { Link } from "react-router-dom";
import TitleFormMenu from "../components/Form/TitleFormMenu";
import SectionMenu from "../components/SectionMenu";
import Instagram from "../components/Instagram";
import Header from '../LayoutMyFiles/Header';
import Footer from '../LayoutMyFiles/Footer';



const Menu = () => {
    return (
      <div className='main'>
        <Header/>
          <section className='myMenuCont'>
            <div className='menu'>
              <Link to="/" style={{paddingRight: "15px"}}>HOME</Link>
              <Link to="/menu">MENU</Link>
              <h1 className='titMenu title'>Discover Our Exclusive Menu</h1>
            </div>
            <div className='menu-container container'>
              <TitleFormMenu />
            </div> 
          </section>
        <SectionMenu /> 
        <Instagram /> 
        <Footer/> 
      </div>
    );
  };
  
  export default Menu;

 