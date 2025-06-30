import React from "react";
import "./Best.css";
import pro1 from "../Assets/img/prod2.jpg";
import pro2 from "../Assets/img/prod3.jpg";
import pro3 from "../Assets/img/prod4.jpg";
import pro4 from "../Assets/img/mewithprod2.jpg";
import pro5 from "../Assets/img/prod5.jpg";
import pro6 from "../Assets/img/prod1.jpg";
import pro7 from "../Assets/img/prod7.jpeg";


function Best() {
  return (
    <section className="workers" id="workers">
      <h2>Our Best Workers</h2>
      <div className="carousel">
        <img src={pro1} alt="Worker 1" />
        <img src={pro2} alt="Worker 2" />
        <img src={pro3} alt="Worker 3" />
         <img src={pro4} alt="Worker 4" />
          <img src={pro7} alt="Worker 7" />
        <img src={pro5} alt="Worker 5" />
        <img src={pro6} alt="Worker 6" />
        
      </div>
    </section>
  );
}

export default Best;
