import React, { useState } from 'react';
import "../../src/App.css";
import "../assets/global.css";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';





const Footer = () => {
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            default:
                break;
        }
    }

    return (
        <>
          <section className='footer-container '>
            <div className='footer-content container'>
                <div className='footer-list'>
                    <div className='footer-item'>
                        <h2 className='footer-title'>Tasty</h2>
                        <p className='footer-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className='footer-socials'>
                            <ul className="social">
                                <li className="socials-item">
                                   <Link to="#" className="socials-link fa-brands fa-facebook-f"></Link>
                                </li>
                                <li className="socials-item">
                                   <Link to="#" className="socials-link fa-brands fa-twitter"></Link>
                                </li>
                                <li className="socials-item">
                                   <Link to="#"className="socials-link fa-brands fa-instagram"></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-item'>
                        <h2 className='footer-title'>Opening Hours</h2>
                        <ul className="info">
                            <li className="info-item">
                                <p>Monday: <span>08: - 22:00</span></p>
                            </li>
                            <li className="info-item">
                                <p>Tuesday: <span>08: - 22:00</span></p>
                            </li>
                            <li className="info-item">
                                <p>Wednesday: <span>08: - 22:00</span></p>
                            </li>
                            <li className="info-item">
                                <p>Thursday: <span>08: - 22:00</span></p>
                            </li>
                            <li className="info-item">
                                <p>Friday: <span>08: - 22:00</span></p>
                            </li>
                            <li className="info-item">
                                <p>Saturday: <span>08: - 22:00</span></p>
                            </li>
                            <li className="info-item">
                                <p>Sunday: <span>08: - 22:00</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <h2 className='footer-title'>Contact Information</h2>
                        <ul className="info">
                                <li className="info-item">
                                <address className='footer-address'>198 West 21th Street, Suite 721 New York NY 10016</address>
                                </li>
                                <li className="info-item">
                                <Link to="tel:+ 1235 2355 98" className="info-tel">+ 1235 2355 98</Link>
                                </li>
                                <li className="info-item">
                                   <Link to="#" className="info-link">info@yoursite.com</Link>
                                </li>
                                <li className="info-item">
                                   <Link to="#" className="info-link">email@email.com</Link>
                                </li>
                            </ul>
                        </div>
                    <div className='footer-item'>
                        <h2 className='footer-title'>Newsletter</h2>
                        <p className='footer-text'>Far far away, behind the word mountains, far from the countries.</p>
                        <form className='footer-form'>
                            <input
                                name="name"
                                type="text"
                                value={name}
                                onChange={handleInputChange}
                                placeholder="Subscribe"
                                className='form-input'
                            />
                            <span><Link to="https://web.telegram.org/a/" className="socials-telegram fa-brands fa-telegram" /></span>
                        </form>
                    </div>
                </div>
                <p class="footer__copyright">
                Copyright ©2023 All rights reserved | This template is made with  
                <Link to="#"className="socials-link fa-solid fa-heart"></Link>
                <Link to="https://colorlib.com/" className='copyright-link'>by Colorlib</Link>
               </p>
            </div>
          </section>
        </>
    );
};

    export default Footer;