import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

import bgVideo from "../Assets/bgVideo.mp4";
import i1 from "../Assets/kishan.jpeg";
import i2 from "../Assets/vijay.jpeg";
import i3 from "../Assets/kalyan.jpg";
import ijack from "../Assets/about.jpeg"

function About() {
  const carouselData = [
    {
      name: "🏅 Legacy of Kalyan Singh",
      text: `I am proud to carry the name of my great-grandfather, Kalyan Singh,
       a respected and powerful figure in Bodhgaya. 
Known as a natural leader and a man of wisdom, his influence and goodwill still echo in the community. 
His name opened doors, and his legacy continues to inspire me every day to lead with strength, honesty, and purpose. 
His support for my father—and indirectly for me—helped lay the foundation for everything we’ve built today.`,
      image: i3
    },
    {
      name: "👑 Vijay Kalyan (Founder)",
      text: `Behind every successful story is a strong foundation — and for me, that foundation is my father, 
Vijay Kalyan. He is the true founder of our business legacy. With his dedication, vision, and hard work,
he turned our small family trade into one of the top-selling businesses in Bihar, 
making the Kalyan name widely respected and recognized.
From an early age, I had the privilege of learning under his guidance. He didn’t just teach me business from books — he taught me through real-life experience, by involving me in every part of the journey. 
His support, values, and leadership shaped me into who I am today. I will always be grateful for the sacrifices he made and the knowledge he passed down.`,
      image: i2
    },
    {
      name: "🚀 Kishan Kalyan (CEO)",
      text: `As CEO of Kalyan Emporium, I’ve grown our business 5X with a focus on quality and trust. 
I’m proud to have received the Best Seller and Business Champion Awards from Jaquar World,
and was honored as the Youngest Entrepreneur of Bihar.
Beyond business, I stay active in social work, including skill training for inmates at Central Jail, Sherghati — believing success means giving back too.`,
      image: ijack
    }
  ];

  return (
    <div className="about-section-container">
      <h1 className="about-heading">Story Of My Journey</h1>

      <div className="about-container">
        <div className="about-image">
          <img src={i1} alt="kishu" />
        </div>
        <div className="about-text">
      <p>
  Hi, I’m <strong>Kishan Kalyan</strong> 👋, the youngest entrepreneur from Bodhgaya.
  <br /><br />
  My journey began in 2017 🛠️ when I started working alongside my father, learning the values of business, discipline, and hard work. In 2020, seeing my potential, he encouraged me to take the next step. With his support and my determination, I proudly launched my own store — <strong>Kalyan Emporium</strong> 🏬.
  <br /><br />
  Today, Kalyan Emporium is one of the top-selling outlets for <strong>Jaquar bath fittings and lighting solutions</strong> 💡🚿 in the region. Our mission is to deliver quality with trust and satisfaction.
  <br /><br />
  But my journey isn't just about business 📈.
  <br /><br />
  I believe in giving back to society ❤️. One of my most meaningful contributions was at <strong>Central Jail, Sherghati</strong> 🏛️, where I led a plumbing training program for inmates. The goal was simple — to give them a second chance and a skill to build a better life.
  <br /><br />
  Every step of my journey is about learning, growing, and lifting others along the way 🌱. To me, success isn’t just about profit — it’s about <strong>purpose</strong> 💫.
  <br /><br />
  Thank you for visiting! 🙏
</p>

        </div>
      </div>

      <Carousel interval={5000} pause={false} className="about-carousel">
        {carouselData.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className='about-slider-wrapper'>
              <video autoPlay loop muted className='about-slider-video'>
                <source src={bgVideo} type="video/mp4" />
              </video>

              <div className='about-slider-content'>
                <div className="about-image-box">
                  <img src={slide.image} alt={slide.name} className="about-image" />
                </div>

                <div className="about-text-box">
                  <h3>{slide.name}</h3>
                  <p>{slide.text}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default About;
