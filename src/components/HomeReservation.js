import React from "react";
import "../assets/global.css";
import "../Pages/Home.css";
import { Link } from 'react-router-dom';


const HomeReservation = () => {

    return(
        <section className="reservation">
            <p className="reserv-descr">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
            <span>
                <Link to="/reservation" className="reserv-link">Make Reservation</Link>
            </span>
        </section>
    );
};

export default HomeReservation;