import React, { useState, useEffect } from 'react';
import "../Pages/Home.css";
import "../Pages/Specialties.css";
import specialtiesJson from "../data/specialties.json";

const HomeSpecialties = () => {
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    setSpecialties(specialtiesJson.slice(0, 4))
  }, []); 

  return (
    <section className='home-special'>
      <div className="home-special-background">
        <h2 className='home-special-title'>Our Specialties</h2>
      </div>
      <div className='home-special-cont container'>
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

export default HomeSpecialties;

































// const OurSpecialties = () => {
//     const [specialtiesData, setSpecialtiesData] = useState([]);

//     useEffect(() => {
//         // Fetch data when the component mounts
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('YOUR_API_ENDPOINT');
//                 const data = await response.json();
//                 setSpecialtiesData(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []); 

//     return (
//         <div className="specialties">
//             <div className="special-background">
//                 <h2 className='specila-title'>Our Specialties</h2>
//             </div>
//             <div className='specialties-block'>
//                 {specialtiesData.map(item => (
//                     <div key={item.id} className="specialties-list">
//                         <div className="special-image">
//                             <img src={item.image} alt={`Image for ${item.title}`} />
//                         </div>
//                         <div className='special-cont'>
//                             <h3 className='special-title'>{item.title}</h3>
//                             <p className='special-text'>{item.text}</p>
//                             <span className='special-price'>{item.price}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurSpecialties;


// import React from 'react';
// import "../Pages/Home.css";

// const OurSpecialties = () => {


//     return(
//         <div className="specialties">
//             <div className="special-background">
//                 <h2 className='specila-title'>Our Specialties</h2>
//             </div>
//             <div className='specialties-block'>
//                 <div className='specialties-list'>
//                     <div key={item.id} className="special-image">
//                         <img src={item.image} alt={`Image for ${item.title}`} />
//                      </div>
//                     <div className='special-cont'>
//                         <h3 className='special-title'>{item.title}</h3>
//                         <p className='special-text'>{item.text}</p>
//                         <span className='special-price'>{item.price}</span>
//                     </div>
//                 </div>
//                 <div className='specialties-block'>
//                     <div key={item.id} className="special-image">
//                         <img src={item.image} alt={`Image for ${item.title}`} />
//                      </div>
//                     <div className='special-cont'>
//                         <h3 className='special-title'>{item.title}</h3>
//                         <p className='special-text'>{item.text}</p>
//                         <span className='special-price'>{item.price}</span>
//                     </div>
//                 </div>
//             </div>
//        </div>  
//     )
// }

// export default OurSpecialties;