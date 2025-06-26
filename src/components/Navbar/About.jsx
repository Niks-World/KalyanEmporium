import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

import bgVideo from "../Assets/bgVideo.mp4";
import i1 from "../Assets/about.jpeg";

function About() {
  return (
    <div className="about-section-container">
      <h1 className="about-heading">About</h1>

      <Carousel interval={5000} pause={false} className="about-carousel">
        {[{
          name: "Gautam Singh",
          text: `Freedom without the strength to support it and, if need be, defend it, 
                  would be a cruel delusion. And the strength to defend freedom can itself
                  only come from widespread industrialisation and the infusion of modern 
                  science and technology into the country's economic life.
          would be a cruel delusion...`,
        }, {
          name: "Mukesh Ambani",
          text: `Freedom without the strength to support it and, if need be, defend it, 
                  would be a cruel delusion. And the strength to defend freedom can itself
                  only come from widespread industrialisation and the infusion of modern 
                  science and technology into the country's economic life.With honest and straightforward business principles...`,
        }, {
          name: "Shyam Prakash (Founder)",
          text: `Freedom without the strength to support it and, if need be, defend it, 
                  would be a cruel delusion. And the strength to defend freedom can itself
                  only come from widespread industrialisation and the infusion of modern 
                  science and technology into the country's economic life.
          would be a cruel delusion..`,
        }].map((slide, index) => (
          <Carousel.Item key={index}>
            <div className='about-slider-wrapper'>
              <video autoPlay loop muted className='about-slider-video'>
                <source src={bgVideo} type="video/mp4" />
              </video>

              <div className='about-slider-content'>
                <div className="about-image-box">
                  <img src={i1} alt={slide.name} className="about-image" />
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
