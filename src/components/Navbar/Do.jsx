import React from "react";
import "./Do.css";
import imgmain from "../Assets/img/mainbaner.jpeg";

function Do() {
  return (
    <section className="what-we-do" id="what-we-do">
      <h2>What We Do</h2>
      <p>We blend tradition with modern design to bring you authentic products.</p>
      <img src={imgmain} alt="What We Do" />
    </section>
  );
}

export default Do;
