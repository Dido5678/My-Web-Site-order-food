import React from 'react';
import "../assets/global.css";
import "../Pages/About.css";

const AboutChef = () => {
    return(
        <section className='chef'>
            <div className='chef-container container'>
                <h4 className='chef-descr'>OUR CHEF</h4>
                <h2 className='chef-title'>Our Master Chef</h2>
                <div className='chef-list'>
                    <div className='chef-item'>
                        <span className='chef-name'>Thomas Smith</span>
                        <span className='chef-profession'>Head Chef</span>
                        <img className='chef-img' src="./images/about/chef-1.jpg" alt="about chef" />
                    </div>
                    <div className='chef-item'>
                        <span className='chef-name'>Francis Gibson</span>
                        <span className='chef-profession'>Assistant Chef</span>
                        <img className='chef-img' src="./images/about/chef-2.jpg" alt="about chef" />
                    </div>
                    <div className='chef-item'>
                        <span className='chef-name'>Angelo Maestro</span>
                        <span className='chef-profession'>Assistant Chef</span>
                        <img className='chef-img' src="./images/about/chef-3.jpg" alt="about chef" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutChef;