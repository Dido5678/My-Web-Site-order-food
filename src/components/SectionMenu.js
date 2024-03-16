import React, { useState } from 'react';
import "../assets/global.css";
import '../Pages/Menu.css';
import '../Pages/Home.css';
import Meat from '../assets/icons/meat.png';
import Forkspoon from '../assets/icons/forkspoon.png';
import Drink from '../assets/icons/drinks.png';
import mainData from '../data/main.json';
import dessertData from '../data/dessert.json';
import drinksData from '../data/drinks.json';


const SectionMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('main');
  const [selectedItemId, setSelectedItemId] = useState(null);


  const renderMenuItems = () => {
    let data;
    switch (selectedCategory) {
      case 'main':
        data = mainData;
        // console.log(mainData);
        break;
      case 'dessert':
        data = dessertData;
        // console.log(dessertData);
        break;
      case 'drinks':
        data = drinksData;
        // console.log(drinksData);
        break;
      default:
        data = [];
    }

    const filteredData = selectedItemId
      ? data.filter(item => item.id === selectedItemId)
      : data;

    return filteredData.map(item => (
      <div key={item.id} className="block">
        <img className='sectionMenu-img' src={item.image} alt="sectionmenu" />
        <div className='sectionMenu-cont'>
          <div>
            <h3 className='sectionMenu-title'>{item.title}</h3><br></br>
            <p className='sectionMenu-text'>{item.text}</p>
          </div>
          <div>
            <span className='sectionMenu-price'>{item.price}</span>
          </div>
        </div>
      </div>
    ));
  };


  const handleClick = category => {
    console.log(`Clicked on category ${category}`);
    setSelectedCategory(category);
    setSelectedItemId(null);
  };

  return (
    <section className='sectionMenu'>
      <div className='sectionMenu-container container'>
        <h3 className='ourMenu'>OUR MENU</h3>
        <h2 className='discoverMenu'>Discover Our Exclusive Menu</h2>
        <div className='content'>
          <div onClick={() => handleClick('main')}>
            <button className='sectBut'>
              <img src={Meat} alt="Meat Icon" style={{ width: '30px', height: '30px' }} />
              <span className='sectionMenu-menu'>Main</span>
            </button>
          </div>
          <div onClick={() => handleClick('dessert')}>
            <button className='sectBut'>
              <img src={Forkspoon} alt="ForkSpoon Icon" style={{ width: '30px', height: '30px' }} />
              <span className='sectionMenu-menu'>Dessert</span>
            </button>
          </div>
          <div onClick={() => handleClick('drinks')}>
            <button className='sectBut'>
              <img src={Drink} alt="Drink Icon" style={{ width: '30px', height: '30px' }} />
              <span className='sectionMenu-menu'>Drinks</span>
            </button>
          </div>
        </div>
        <div className='section-list'>
          <div className='sectionMenu-block'>
            {renderMenuItems()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMenu;















































