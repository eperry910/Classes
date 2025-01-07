import React, { useEffect, useState } from 'react';
import './CharacterSheet.css';

const CharacterSheet = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchCharacter = async () => {
      try {
        const response = await fetch('https://adventurearchive-acc7c3d2apacgxg6.canadacentral-01.azurewebsites.net/CharacterSheet');
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, []);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-sheet">
      <h1>{character.name}</h1>
      <p><strong>Class:</strong> {character.class}</p>
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Level:</strong> {character.level}</p>
      <p><strong>Strength:</strong> {character.stats.strength}</p>
      <p><strong>Dexterity:</strong> {character.stats.dexterity}</p>
      <p><strong>Constitution:</strong> {character.stats.constitution}</p>
      <p><strong>Intelligence:</strong> {character.stats.intelligence}</p>
      <p><strong>Wisdom:</strong> {character.stats.wisdom}</p>
      <p><strong>Charisma:</strong> {character.stats.charisma}</p>
    </div>
  );
};

export default CharacterSheet;