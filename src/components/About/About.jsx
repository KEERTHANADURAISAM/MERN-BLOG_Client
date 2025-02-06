import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">Welcome to Tara</h1>
        <p className="about-intro">
          At <strong>Tara</strong>, we believe in the power of storytelling and visual expression. Our platform is dedicated to bringing you inspiring blogs, insightful articles, and creative perspectives from around the world.
        </p>
        <p className="about-intro">
          Whether you're a seasoned writer or just getting started, Tara is the perfect place to explore, learn, and share your voice with a community that values quality content.
        </p>

        <div className="why-choose">
          <h2>Why Choose Tara?</h2>
          <ul>
            <li>
              <span>🌟</span> A hub for creativity and innovation
            </li>
            <li>
              <span>✍️</span> Engaging and thought-provoking content
            </li>
            <li>
              <span>🌍</span> A community that values your voice
            </li>
          </ul>
          <blockquote>
            "Writing is the painting of the voice." – Voltaire
          </blockquote>
        </div>

        <button className="cta-button">Join Tara Today</button>
      </div>
    </section>
  );
};

export default About;
