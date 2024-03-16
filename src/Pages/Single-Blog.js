import React from 'react';
import "./Menu.css";
import "../assets/global.css";
import { Link } from "react-router-dom";
import Header from '../LayoutMyFiles/Header';
import SingleBlogInfoThemes from "../components/SingleBlogInfoThemes";
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer';



const SingleBlog = () => {
  return (
    <div className='main'>
      <Header/>
      <section className='myMenu'>
        <div className='menu'>
          <Link to="/" style={{paddingRight: "15px"}}>HOME</Link>
          <Link to="/single-blog">SINGLE BLOG</Link>
          <h1 className='blog-title title'>Single Blog</h1>
        </div>
      </section>
      <SingleBlogInfoThemes />
      <Instagram /> 
      <Footer/> 
    </div>

   );
  };
  
  export default SingleBlog;