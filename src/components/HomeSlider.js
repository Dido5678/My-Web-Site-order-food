import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import "../assets/global.css";
import '../Pages/Home.css';
import TitleFormMenu from './Form/TitleFormMenu';

const HomeSlider = () => {
  const params = {
    wrapAround: true,
    animation: 'zoom',
    slidesToShow: 1,
    autoplay: true
  };

  return (
    <div>
      <section className="containerClassName">
          <Carousel {...params}>
            <div>
              <img src="images/bg_1.jpg" className="sliderImage" alt="Slide 1" />
              <h1 className="slider-title">Book a table for yourself at a time convenient for you</h1>
              <button className='bookTable'>
                <Link to="/reservation">Book a table</Link> 
              </button>
            </div>
            <div>
              <img src="images/bg_2.jpg" className="sliderImage" alt="Slide 2" />
              <h1 className="slider-title">Tasty & Delicious Food</h1>
              <button className='bookTable'>
                <Link to="/reservation">Book a table</Link> 
              </button>
            </div>
            <div>
              <img src="images/bg_3.jpg" className="sliderImage" alt="Slide 3" />
              <h1 className="slider-title">Book a table for yourself at a time convenient for you</h1>
              <button className='bookTable'>
                <Link to="/reservation">Book a table</Link> 
              </button>
            </div>
          </Carousel>
      </section>
      <TitleFormMenu />
    </div>
  );
};

export default HomeSlider;






// import Carousel from 'nuka-carousel';
// import '../components/HomeSlider.css';

// const HomeSlider = () => {

//   const params = {
//     wrapAround: true,
//     animation: 'zoom',
//     slidesToShow: 2,
//   };

//   return (
//     <div className="containerClassName">
//          <Carousel>
//           <div> 
//             <img src="images/bg_1.jpg" className="sliderImage"/>
//             <h1 class="mb-3">Book a table for yourself at a time convenient for you</h1>
//             <button>Book a table</button>
//           </div>
//           <div> 
//             <img src="images/bg_2.jpg" className="sliderImage"/>
//             <h1 class="mb-3">Book a table for yourself at a time convenient for you</h1>
//             <button>Book a table</button>
//           </div>
//           <div> 
//             <img src="images/bg_3.jpg" className="sliderImage" />
//             <h1 class="mb-3">Book a table for yourself at a time convenient for you</h1>
//             <button>Book a table</button>
//           </div>    
//       </Carousel>
//     </div>
//   );
// };

// export default HomeSlider;



// // import Carousel from 'nuka-carousel';
// import '../components/HomeSlider.css';


// const HomeSlider = () => {
//   const slides = [
//     {
//       style: { backgroundImage: "url('images/bg_1.jpg')" },
//     },
//     {
//       style: { backgroundImage: "url('images/bg_2.jpg')" },
//     },
//     {
//       style: { backgroundImage: "url('images/bg_3.jpg')" },
//     }
//   ]

//   const params = {
//     wrapAround: true,
//     animation: 'zoom',
//     slidesToShow: 2,
   
//   }

//   return (
//     <div className="containerClassName">
//     {/* Your slider content here */}
//     <img src="..." alt="Slider Image" />
//     <button>Slider Button</button>
//   </div>
//     //   <div>
//     //  <Carousel {...params}>
//     //   {slides.map((slide) => (
//     //     <img src={slide} key={slide}/>
//     //     ))}
//     //   </Carousel> 
//     //   </div> 
//   )
// }

// export  default HomeSlider