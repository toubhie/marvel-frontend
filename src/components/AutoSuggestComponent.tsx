import React, { useState, ChangeEvent } from 'react';
import { fetchCharacters } from '../api/apis';
import { getTimestamp } from '../utils/helpers';
import { Character } from '../interfaces/character';

interface AutoSuggestComponentProps {
    onSelectCharacter: (character: Character) => void;
}

const AutoSuggestComponent: React.FC<AutoSuggestComponentProps> = ({ onSelectCharacter }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [characters, setCharacters] = useState<Character[]>([]);

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length >= 2) {
            const results = await fetchCharacters(value, getTimestamp());

            console.log('results', results)

            setCharacters(results);
        }
    };


    const handleSelectCharacter = (character: Character) => {
        // Clear the input field
        setSearchTerm('');
        setCharacters([]);

        // Pass the selected character to the parent component
        onSelectCharacter(character);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Type first 2 letters of a Marvel character"
                value={searchTerm}
                onChange={handleChange}
            />

            {characters.length > 0 && (
                <div className="dropdown">
                    {characters.map((character, index) => (
                        <React.Fragment key={character.id}>
                            {index > 0 && <div className="divider" />}
                            <div className="dropdown-item" onClick={() => handleSelectCharacter(character)}>
                                {character.name}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};


export default AutoSuggestComponent;
