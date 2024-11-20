import React, { useState } from 'react';
import "./BuildScreen.css";

function BuildScreen() {
  // State variables to hold form dataLandingPage';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep the previous data
      [name]: value, // Update the current field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted:', formData);
    // You can add logic to send data to a server here
  };

  return (
    <form id="characterCreator" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Character Name">Name:</label>
        <input
          type="text"
          id="name"
          name="Character Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="Class">Email:</label>
        <input
          type="text"
          id="Class"
          name="Class"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default BuildScreen;