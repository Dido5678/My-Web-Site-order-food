import React, { useState, useEffect } from 'react';
import "../../src/App.css";
import "../assets/global.css";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [colors,setColor]=useState("");
  const [colors1,setColor1]=useState("");
  const [colors2,setColor2]=useState("");
  const [colors3,setColor3]=useState("");
  const [colors4,setColor4]=useState("");
  const [colors5,setColor5]=useState("");
  const [colors6,setColor6]=useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleColor=()=>{
    setColor("rgba(255, 255, 255, 0.5)")
  }

  const handleColor1=()=>{
    setColor1("rgba(255, 255, 255, 0.5)")
  }
  const handleColor2=()=>{
    setColor2("rgba(255, 255, 255, 0.5)")
  }
  const handleColor3=()=>{
    setColor3("rgba(255, 255, 255, 0.5)")
  }
  const handleColor4=()=>{
    setColor4("rgba(255, 255, 255, 0.5)")
  }
  const handleColor5=()=>{
    setColor5("rgba(255, 255, 255, 0.5)")
  }
  const handleColor6=()=>{
    setColor6("rgba(255, 255, 255, 0.5)")
  }


  return (
    <>
      <header className={isHeaderFixed ? 'header header-fixed' : 'header'} id="header-bg">
        <div className='header-container container'>
          <div className='header-body'>
            <Link to="#" className="header-tasty active">Tasty</Link>
            <nav className='nav'>
              <ul className='nav-list'>
                <li><Link to="/" className='header-link' onClick={handleColor} style={{color:colors}}>Home</Link></li>
                <li><Link to="/menu" className='header-link'  onClick={handleColor1} style={{color:colors1}}>Menu</Link></li>
                <li><Link to="/specialties" className='header-link' onClick={handleColor2} style={{color:colors2}}>Specialties</Link></li>
                <li><Link to="/reservation" className='header-link'onClick={handleColor3} style={{color:colors3}}>Reservation</Link></li>
                <li><Link to="/blog" className='header-link'onClick={handleColor4} style={{color:colors4}}>Blog</Link></li>
                <li><Link to="/about" className='header-link'onClick={handleColor5} style={{color:colors5}}>About</Link></li>
                <li><Link to="/contact" className='header-link'onClick={handleColor6} style={{color:colors6}}>Contact</Link></li>
              </ul>
            </nav>
            <button className="header-burger" onClick={() => setIsOpen(!isOpen)}>
              <span>
                <Hamburger />
                <div className="header-M">Menu</div>
              </span>
            </button>
            <nav className={isOpen ? 'header-menu header-menu-active' : 'header-menu'}>
              {isOpen ?
                <ul className='header-list'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/specialties">Specialties</Link></li>
                  <li><Link to="/reservation">Reservation</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul> : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


