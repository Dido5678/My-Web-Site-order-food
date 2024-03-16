import React, { useState, useEffect } from 'react';
import { Form, Container, FloatingLabel } from 'react-bootstrap';
import '../../assets/global.css';

const TitleFormMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    person: ""
  });

  const [validated, setValidated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Save the form data to localStorage
      localStorage.setItem("reservationData", JSON.stringify(formData));
      console.log("Your table is reserved");
      alert("Your table is reserved");
    }
  
    setValidated(true);
  };
   // Load data from local storage on component mount
   useEffect(() => {
    const storedData = localStorage.getItem("reservationData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);
 
  
  const formatTime = (index) => {
    const hours = Math.floor(index / 2);
    const minutes = index % 2 === 0 ? '00' : '30';
    const period = hours < 12 ? 'am' : 'pm';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours}:${minutes}${period}`;
  };


  return (
    <div className="form-wrapper">
      <div className="form-container container">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-form">
          <Container fluid>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="firstNameLabel" label="Name">
                <Form.Control
                  type="text"
                  required
                  name="name"
                  // value={formData.name}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="phoneLabel" label="Phone">
                <Form.Control
                  type="tel"
                  required
                  name="phone"
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="DateLabel" label="">
                <Form.Control
                  name="date"
                  type="date"
                  onChange={handleInputChange}
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="timeLabel" label="">
               <Form.Select
                 className='form-control'
                 name="time"
                 onChange={handleInputChange}
                 required
               >
                 <option value="">Time</option>
                 {Array.from({ length: 49 }, (_, index) => (
                   <option key={index} value={index}>{formatTime(index)}</option>
                 ))}
               </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="PersonLabel" label="">
                <Form.Select
                  className='form-control'
                  name="person"
                  onChange={handleInputChange}
                  required
                >
                  <option value="0">Person</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4+">4+</option>
                </Form.Select>
              </FloatingLabel>
              <button type="submit" className='mySubmit'>Book a Table</button>
            </Form.Group>
          </Container>
        </Form>
      </div>
    </div>
  );
};

export default TitleFormMenu;













