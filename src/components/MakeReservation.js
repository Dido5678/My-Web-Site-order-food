import React, { useState, useEffect } from 'react';
import "../assets/global.css";
import "../Pages/Reservation.css";


const MakeReservation = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("Date");
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
    const [errors, setErrors] = useState({
      email: '',
    });
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      text: '',
    });

    useEffect(() => {
      // Load form data from local storage on component mount
      const storedFormData = JSON.parse(localStorage.getItem('reservationFormData'));
  
      if (storedFormData) {
        setFormData(storedFormData);
      }
    }, []);



  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // console.log(formData);
      console.log(event.target.value);
 setFormData({
   ...formData,
   [name]: value,
 });
 validateInput(name, value);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save form data to local storage
    localStorage.setItem('reservationFormData', JSON.stringify(formData));
    console.log('Form submitted:', formData);
  };

  const validateInput = (name, value) => {
    let error = '';


    if (name === 'email') {
      // Simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = value.match(emailRegex) ? '' : 'Invalid email address';
    }


    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const formatTime = (index) => {
    const hours = Math.floor(index / 2);
    const minutes = index % 2 === 0 ? '00' : '30';
    const period = hours < 12 ? 'am' : 'pm';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours}:${minutes}${period}`;
  };



    return  ( 
        <section className='make-reserv'>
            <div className='make-reserv-container container'>
                <h2 className='reserv-title'>Make a Reservation</h2>
                <div className='reserv-content'>
                  <div className='reserv-image'>
                    <img src='./images/bg_1.jpg'  alt="background"/>
                  </div>
                    <div className='reserv-block'>
                        <form onSubmit={handleSubmit} className="reserv-form">
                            <div className='reserv-list'>
                          <div className='reserv-item'>
                              <label>Name<br></br> </label>
                                <input
                                  name="name"
                                  type="text"
                                  value={name}
                                  onChange={handleInputChange}
                                  placeholder="Name" 
                                  className='reserv-name'
                                  required />
                              <label>Phone<br></br></label>
                                <input
                                  name="phone"
                                  type="tel"
                                  value={phone}
                                  onChange={handleInputChange}
                                  placeholder="Phone" 
                                  className='reserv-phone'
                                  required/>
                              <label>Time<br></br></label>
                                  <select name="time" value={time} onChange={handleInputChange} className="reserv-time">
                                  <option value="">Time</option>
                                    {Array.from({ length: 49 }, (_, index) => (
                                    <option key={index} value={index}>{formatTime(index)}</option>
                                    ))}
                                    </select>
                            </div>
                          <div className='reserv-item'>
                              <label>Email<br></br></label>
                                <input
                                  name="email"
                                  type="email"
                                  value={email}
                                  onChange={handleInputChange}
                                  placeholder="email" 
                                  className='reserv-email'/>
                              <span style={{ color: 'red' }}>{errors.email}</span>
                              <label>Date<br></br></label>
                                <input
                                name="date"
                                  type="date"
                                  value={date}
                                  onChange={handleInputChange}
                                  placeholder="Date" 
                                  className='reserv-date'/>
                              <label>Person<br></br></label>
                                <select name="text" value={text} onChange={handleInputChange} className="reserv-person">
                                  <option value="0">Person</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4+">4+</option>
                                </select>
                            </div>
                            </div>
                              <input
                                type="submit"
                                value="Make a Reservation" 
                                className='reserv-button'/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MakeReservation;