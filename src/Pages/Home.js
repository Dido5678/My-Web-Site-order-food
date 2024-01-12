import React from 'react';
import "../assets/global.css";
import "./Home.css";
import Header from '../LayoutMyFiles/Header';
import HomeSlider from '../components/HomeSlider'; 
import AboutTasty from "../components/AboutTasty";
import SectionMenu from "../components/SectionMenu";
import HomeReservation from "../components/HomeReservation";
import HomeOurSpecialties from "../components/HomeOurSpecialties";
import GuestSays from "../components/GuestSays";
import HomeBlog from "../components/HomeBlog";
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer'; 



const Home = () => {
    return (
        <div>
            <Header/>
            <HomeSlider/>
            <AboutTasty />
            <SectionMenu />
            <HomeReservation />
            <HomeOurSpecialties />
            <GuestSays />
            <HomeBlog />
            <Instagram /> 
            <Footer/>
        </div>
     );
  };
  
  export default Home;