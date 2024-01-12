import React from 'react';
import "./Menu.css";
import "../assets/global.css";
import { Link } from "react-router-dom";
import Header from '../LayoutMyFiles/Header';
import BlogContainer from "../components/BlogContent";
import Instagram from "../components/Instagram";
import Footer from '../LayoutMyFiles/Footer';



const Blog = () => {
  return (
     <div className='main'>
      <Header/>
      <section className='myMenu'>
        <div className='menu'>
          <Link to="/" style={{paddingRight: "15px"}}>HOME</Link>
          <Link to="/blog">BLOG</Link>
          <h1 className='blog-title title'>Blog</h1>
        </div>
      </section>
      <BlogContainer />
      <Instagram /> 
      <Footer/> 
     </div>

   );
  };
  
  export default Blog;