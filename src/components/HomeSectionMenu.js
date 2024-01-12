import React, { useState } from 'react';
import "../assets/global.css";
import '../Pages/Menu.css';
import { Link } from 'react-router-dom';
import SectionMenu from './SectionMenu';



const HomeSectionMenu = () => {

  return (
      <>
        <SectionMenu />
        <div className='sectionMenu-block'>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
          <Link to="#">Make a Reservation</Link>
        </div>
      </>
  );
};

export default HomeSectionMenu;
