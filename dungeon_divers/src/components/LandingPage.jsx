// src/components/LandingPage.jsx
import React from "react";
import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Forge Your Legend</h1>
        <p>Create, design, and store your epic D&D character sheets with ease.</p>
        <button className="cta-button" onClick={() => navigate('/CharacterCreator')}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
