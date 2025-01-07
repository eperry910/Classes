import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuildScreen from './components/BuildScreen';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CharacterSheet from './components/CharacterSheet';

function Routing() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/CharacterCreator" element={< BuildScreen />} />
          <Route path="/Character" element={< CharacterSheet />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;