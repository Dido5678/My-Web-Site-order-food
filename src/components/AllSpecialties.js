import React, { useState, useEffect } from 'react';
import "../assets/global.css";
import "../Pages/Specialties.css";
import specialtiesJson from "../data/specialties.json";

const AllSpecialties = () => {
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    setSpecialties(specialtiesJson)
  }, []); 

  return (
    <section className='special'>
       <h2 className='special-title'>Our Specialties</h2>
       <div className='special-cont container'>
         {specialties.map((specialty) => (
           <div key={specialty.id} className="special-item">
             <div className='special-block'>
                 <h2 className='special-subtitle'>{specialty.title}</h2>
                 <p className='special-text'>{specialty.text}</p>
                 <p className='special-price'>{specialty.price}</p>
             </div>
             <div >
                 <img className='special-img' src={specialty.image} alt={specialty.title} />
            </div>
           </div>
         ))}
       </div>
    </section>
  );
};

export default AllSpecialties;