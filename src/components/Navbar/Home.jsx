import React from "react";
import "./Video.css";
import m1 from "../Assets/banner-video.mp4"
function Home() {
  return (
    <header className="hero-section">
      <video autoPlay loop muted className="background-video">
        <source src={m1} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Welcome to Kalyan Emporium</h1>
        <p>Crafting Elegance & Tradition</p>
      </div>
    </header>
  );
}

export default Home;
