import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">More than just shorter links</h1>
        <p className="hero-sub-title">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link to="/" className="hero-btn btn">
          Get Started
        </Link>
      </div>
      <div className="hero-right">
        <img
          src="./images/illustration-working.svg"
          alt="person working on his computer"
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;
