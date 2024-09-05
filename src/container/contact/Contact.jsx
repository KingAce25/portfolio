import React, { useState } from 'react'
import './contact.css'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('okikiola625@gmail.com');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <div id='contact' className='contact section__padding'>
      <h1>Contact</h1>
      <div className="contact__body">
        <div className="body__top">
          <p><b>Name</b> <input
            type="text"
            value={name}
            id='name'
            onChange={handleNameChange}
            placeholder="Name"
            required
          /></p>
          <p><b>Email</b> <input
            type="email"
            value={email}
            id='email'
            onChange={handleEmailChange}
            placeholder="Email Address"
            required
          /></p>
        </div>
        <div className="body__down">
          <p><b>Message</b>
          <textarea
            value={message}
            id='tell'
            onChange={handleMessageChange}
            placeholder="Your Message"
            required
          />
          </p>
        </div>
        <a href={`mailto:${email}?subject=${encodeURIComponent(message)}&body=${encodeURIComponent(`Name: ${name}`)}`}>
          <button className='button'><p>Submit</p></button>
        </a>
      </div>
    </div>
  )
}

export default Contact
