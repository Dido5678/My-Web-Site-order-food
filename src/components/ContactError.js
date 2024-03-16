import React from 'react';
import "../assets/global.css";
import "../Pages/Contact.css";

const ContactError = () => {
   

    return (
        <section className='errors'>
            <div className='errors-container container'>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120067.7446204728!2d-74.0280320284235!3d40.72370165765397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20198%20West%2021th%20Street%2C%20Suite%20721%20New%20York%20NY%2010016!5e1!3m2!1sen!2sam!4v1705055726203!5m2!1sen!2sam"
                    width="1000"
                    height="550"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactError;



















// import React from 'react';
// import "../assets/global.css";
// import "../Pages/Contact.css";

// const ContactError = () => {
//     return(
//         <section className='errors'>
//             <div className='errors-container container'>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120067.7446204728!2d-74.0280320284235!3d40.72370165765397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20198%20West%2021th%20Street%2C%20Suite%20721%20New%20York%20NY%2010016!5e1!3m2!1sen!2sam!4v1705055726203!5m2!1sen!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//                 <div>
//                     <img src='../images/error.png' className="errors" alt="error time"/>
//                     <h4 className='errors-title'>Ошибка</h4>
//                     <p className='errors-text'>При загрузке Google Карт на этой странице возникла проблема. Подробности вы найдете в консоли JavaScript.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default ContactError;
