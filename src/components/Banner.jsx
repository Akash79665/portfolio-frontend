import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Hello, I'm Akash Turkhade</h1>
        <p>Full Stack Developer crafting amazing web experiences.</p>
        <a href="#portfolio" className="banner-btn">View My Portfolio</a>
        <div className="banner-image">
          <img
            src="https://via.placeholder.com/400x300.png?text=Portfolio+Image"
            alt="Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
