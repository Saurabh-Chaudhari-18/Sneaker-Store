import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });

      setResponseMessage(response.data.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again later.');
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
