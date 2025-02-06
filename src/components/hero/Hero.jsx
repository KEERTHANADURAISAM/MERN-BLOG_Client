import React from "react";
import "./Hero.css";
import gif from "../../assets/image/windy-flower.gif";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-title">
          <h1 className="hero-title-lg">Where are you</h1>
          <h2 className="hero-title-md">Come to here for your life</h2>
          <p className="hero-title-sm">
            Create your own <span className="highlight">Blog</span> from here
          </p>
          <Link to="/write">
            <button className="hero-button">Create Your Blog</button>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-img" src={gif} alt="What We Do" />
      </div>
    </div>
  );
}
