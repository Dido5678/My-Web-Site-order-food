import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/global.css";
import "../Pages/Home.css";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import blogData from "../data/blog.json";



const HomeBlog = () => { 
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData.slice(0, 6));
    }, []);
    
    return(
        <section className='home-blog'>
            <div className='home-blog-container container'>
                <h3 className='home-blog-subtitle'>BLOG</h3>
                <h2 className='home-blog-title'>Recent Blog</h2>
            <Splide aria-label="My Favorite Images" id="spliede-div">
                <SplideSlide className='spliserBlock' >
                {blogs.map((blog) => (
                    <div key={blog.id} className="blogs-item item">
                        <Link to="single-blog">
                            <img className='blogs-img' src={blog.image} alt="my home blog" />
                        </Link>
                        <div>
                            <span className='blogs-subtitle'>{blog.date}</span>
                            <span className='blogs-admin'>{blog.admin}</span>
                        </div>
                        <p className='blogs-text' id="blogTxt">{blog.text}</p>
                        <div className='blogs-icon'>
                            <p className='blogs-more'>{blog.more}</p>
                            <img src={blog.icon} className='blogs-icon1' alt="icon information" />
                            <p className='blogs-number'>{blog.number}</p>
                        </div>
                    </div>
                ))}
            
            
                </SplideSlide>
                 <SplideSlide >
                </SplideSlide> 
            </Splide>
            </div>
        </section>
        );
    };
export default HomeBlog;