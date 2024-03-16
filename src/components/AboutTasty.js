import React from 'react';
import '../assets/global.css';
import '../Pages/Home.css';

const AboutTasty = () => {
  return (
    <>
      <section className='about-section'>
        <div className='about-container container'>
            <div className='about-list'>
              <div className='about-item'>
                  <img src='./images/about-2.jpg' alt='about tasty' />
              </div>
              <div className='about-item'>
                  <h3 className='about-subtitle'>ABOUT TASTY</h3>
                  <h2 className='about-title'>Our chef cooks the most delicious food for you</h2>
                  <p className='about-desc'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </p>
                  <p className='about-desc'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutTasty;













// import React from 'react';
// import "../assets/global.css";
// import "../Pages/Home.css";

// const AboutTasty = () => {
//     return (
//         <>
//         <section className='about-section container'>
//             <div className='about-list'>
//                 <div className='about-item'>
//                     <img src="./images/about-2.jpg" alt="about" />
//                 </div>
//                 <div className='about-item'>
//                     <h3 className='about-subtitle'>ABOUT TASTY</h3>
//                     <h2 className='about-title'>Our chef cooks the most delicious food for you</h2>
//                     <p className='about-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                     <p className='about-desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
//                 </div>
//             </div>
//         </section>
//         </>
//     )
// } 

// export default AboutTasty;