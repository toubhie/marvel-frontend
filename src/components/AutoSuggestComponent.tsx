import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { fetchCharacters } from '../api/apis';
import { getTimestamp } from '../utils/helpers';

interface Character {
  id: number;
  name: string;
}

interface AutoSuggestComponentProps {
  onSelectCharacter: (character: Character) => void;
}

const AutoSuggestComponent: React.FC<AutoSuggestComponentProps> = ({ onSelectCharacter }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Fetch characters from Marvel API
    if (value.length >= 2) {
      const results = await fetchCharacters(value, getTimestamp());

      console.log('results', results)

      setCharacters(results);
    }
  };


  const handleSelectCharacter = (character: Character) => {
    // Pass the selected character to the parent component
    onSelectCharacter(character);

    // Clear the input field
    setSearchTerm('');
    setCharacters([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type the first 2 letters of a Marvel character"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {characters?.map((character) => (
          <li key={character?.id} onClick={() => handleSelectCharacter(character)}>
            {character?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoSuggestComponent;
