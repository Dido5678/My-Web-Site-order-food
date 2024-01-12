import React from 'react';
import "../assets/global.css";
import "../Pages/Home.css";
import Carousel from "nuka-carousel"

const GuestSays = () => {
    const params = {
        wrapAround: true,
        // animation: 'zoom',
        slidesToShow: 3,
      };

      
    return (
        <section className='guest'>
            <div className='guest-container container'>
                <h4 className='guest-descr'>GUESTS SAYS</h4>
                <h2 className='guest-title'>Our Satisfied Guests say</h2>
                <div className='guest-slider'>
       
                    <Carousel {...params}>
                        <div className='guest-block'>
                            <img src='../images/person_1.jpg' alt="Slide 1" className="guest-image" />
                            <p className='guest-star'>
                                <img src='../images/star.png' alt=''/>
                                <img  src='../images/star.png' alt='' />
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/half-star.png' alt=''/>
                            </p>
                            <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span>Dennis Green</span><br></br>
                            <span className='guest-country'>Guests from Italy</span>
                        </div>
                        <div className='guest-block'>
                            <img src='../images/person_2.jpg' alt="Slide 2" className="guest-image"/>
                            <p className='guest-star'>
                                <img src='../images/star.png' alt=''/>
                                <img  src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt='' />
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/half-star.png' alt=''/>
                            </p>
                            <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span>Dennis Green</span><br></br>
                            <span className='guest-country'>Guests from Italy</span>
                        </div>
                        <div className='guest-block'>
                            <img src='../images/person_3.jpg' alt="Slide 3" className="guest-image"/>
                            <p className='guest-star'>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/half-star.png' alt=''/>
                            </p>
                            <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span>Dennis Green</span><br></br>
                            <span className='guest-country'>Guests from Italy</span>
                        </div>
                        <div className='guest-block'>
                            <img src='../images/person_1.jpg' alt="Slide 4" className="guest-image"/>
                            <p className='guest-star'>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/half-star.png' alt=''/>
                            </p>
                            <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span>Dennis Green</span><br></br>
                            <span className='guest-country'>Guests from Italy</span>
                        </div>
                        <div className='guest-block'>
                            <img src='../images/person_2.jpg' alt="Slide 5" className="guest-image"/>
                            <p className='guest-star'>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/star.png' alt=''/>
                                <img src='../images/half-star.png' alt=''/>
                            </p>
                            <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span>Dennis Green</span><br></br>
                            <span className='guest-country'>Guests from Italy</span>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default GuestSays;






















      
    