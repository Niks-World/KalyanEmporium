import React, { useState } from 'react';
import "./Contact.css";


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const message = `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${messageText}`;
    const whatsappUrl = `https://wa.me/917739307047?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank"); // opens in new tab
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleWhatsApp}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <textarea 
          placeholder="Your Message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          required 
        ></textarea>

        <button type="submit">Send via WhatsApp</button>
      </form>
      <a href="tel:+917739307047" className="call-button">
  📞 Call Now
</a>

{/* Floating WhatsApp Icon */}
<a
  href="https://wa.me/917739307047"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
</a>


    </section>
    
  );
}




export default Contact;
