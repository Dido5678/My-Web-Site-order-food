
import React, { useState, useEffect } from 'react';
import "../assets/global.css";
import "../Pages/Contact.css";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextarea] = useState("");


  useEffect(() => {
    const storedData = localStorage.getItem("contactFormData");
    if (storedData) {
      const { name, email, subject, textarea } = JSON.parse(storedData);
      setName(name);
      setEmail(email);
      setSubject(subject);
      setTextarea(textarea);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'textarea':
        setTextarea(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save data to local storage
    const formData = { name, email, subject, textarea };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nTextarea: ${textarea}`);
  }

  return (
    <section className='contact'>
       <div className='contact-container container'>
            <div className='contanct-list'>
              <div className='contact-item'>
                <h3 className='contact-title'>Contact Information</h3>
                 <div className="contact-border">
                  <p className='contact-text'>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="contact-border">
                  <p className='contact-text'>Phone: <span>+ 1235 2355 98</span> </p>
                </div>
                <div className="contact-border">
                  <p className='contact-text'>Email:<span>info@yoursite.com</span> </p>
                </div>
                <div className="contact-border">
                  <p className='contact-text'>Website <span>yoursite.com</span> </p>
                </div>
              </div>
              <div className='contact-item'>
                  <form action='#' onSubmit={handleSubmit} className='contact-form'>
                    <div>
                      <input
                        name="name"
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className='contact-inp' />
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className='contact-inp' />
                    </div>
                    <div>
                      <input
                        name="subject"
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className='contact-inp' />
                    </div>
                    <div>
                      <textarea
                        name="textarea"
                        cols={40}
                        rows={7}
                        onChange={handleInputChange}
                        className='contact-textarea'
                        placeholder="Message">
                      </textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className='contact-submit'>Send Message</button>
                    </div>
                  </form>
              </div>
            </div>
      </div>
   </section>
  );
};

export default ContactInfo;







