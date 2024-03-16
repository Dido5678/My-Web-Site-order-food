import React from 'react';
import "../assets/global.css";
import '../Pages/Menu.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const imagePaths = [
  'images/insta-1.jpg',
  'images/insta-2.jpg',
  'images/insta-3.jpg',
  'images/insta-4.jpg',
  'images/insta-5.jpg',
];

const Instagram = () => {
  return (
    <section className='instagram'>
        <div className="instagram-cont">
            <h2 className='inst-title'> INSTAGRAM </h2>
            <div className="inst-list">
              {imagePaths.map((path, index) => (
                <div className={`inst-item${index + 1}`} key={index}>
                  <Link to={path} className={`inst-link${index + 1}`}>
                    <div className='blockInsta'>
                        <FontAwesomeIcon icon={faInstagram} className="fa-inst"/>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
};

 export default Instagram;