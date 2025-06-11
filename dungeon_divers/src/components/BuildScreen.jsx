import React, { useState, useEffect } from 'react';
import "./BuildScreen.css";

function BuildScreen() {
  const [formData, setFormData] = useState({
    name: '',
    race: '',
    class: '',
    background: '',
    alignment: '',
  });

  const [options, setOptions] = useState({
    races: [],
    classes: [],
    backgrounds: [],
  });

  useEffect(() => {
    // Fetch options from the API
    const fetchOptions = async () => {
      try {
        const racesResponse = await fetch('https://adventurearchive-acc7c3d2apacgxg6.canadacentral-01.azurewebsites.net/OverallClasses');
        const classesResponse = await fetch('https://adventurearchive-acc7c3d2apacgxg6.canadacentral-01.azurewebsites.net/OverallClasses');
        const backgroundsResponse = await fetch('/api/backgrounds');

        const races = await racesResponse.json(); // Expecting an array of JSON objects
        const classes = await classesResponse.json(); // Expecting an array of JSON objects
        const backgrounds = await backgroundsResponse.json(); // Expecting an array of JSON objects

        console.log('Races:', races);
        console.log('Classes:', classes);
        console.log('Backgrounds:', backgrounds);

        setOptions({
          races: races.map((race) => ({ id: race._id, name: race.name })),
          classes: classes.map((cls) => ({ id: cls._id, name: cls.name })),
          backgrounds: backgrounds.map((bg) => ({ id: bg._id, name: bg.name })),
        });
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form id="characterCreator" className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Character Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="race">Race:</label>
        <select
          id="race"
          name="race"
          value={formData.race}
          onChange={handleChange}
          required
        >
          <option value="">Select a race</option>
          {options.races.map((race) => (
            <option key={race.id} value={race.name}>
              {race.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="class">Class:</label>
        <select
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        >
          <option value="">Select a class</option>
          {options.classes.map((cls) => (
            <option key={cls.id} value={cls.name}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="background">Background:</label>
        <select
          id="background"
          name="background"
          value={formData.background}
          onChange={handleChange}
          required
        >
          <option value="">Select a background</option>
          {options.backgrounds.map((bg) => (
            <option key={bg.id} value={bg.name}>
              {bg.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="alignment">Alignment:</label>
        <input
          type="text"
          id="alignment"
          name="alignment"
          value={formData.alignment}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default BuildScreen;