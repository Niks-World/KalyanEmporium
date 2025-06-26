import React from "react";
import "./Best.css";

function Best() {
  return (
    <section className="workers" id="workers">
      <h2>Our Best Workers</h2>
      <div className="carousel">
        <img src="/assets/worker1.jpg" alt="Worker 1" />
        <img src="/assets/worker2.jpg" alt="Worker 2" />
        <img src="/assets/worker3.jpg" alt="Worker 3" />
      </div>
    </section>
  );
}

export default Best;
