import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BuildScreen from './components/BuildScreen';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CharacterCreator" element={< BuildScreen/>} />
      </Routes>
    </Router>
  );
}

export default Routing;