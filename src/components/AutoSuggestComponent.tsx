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

    const handleSearch = () => { }

    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ marginBottom: '10px' }}>

                <input
                    type="text"
                    placeholder="Type the first 2 letters of a Marvel character"
                    value={searchTerm}
                    onChange={handleChange}
                    style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }}
                />

                <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
                    Search
                </button>
            </div>
            {characters.length > 0 && (
                <div
                    style={{
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        background: '#fff',
                        marginTop: '5px',
                    }}
                >
                    {characters.map((character, index) => (
                        <div
                            key={character.id}
                            onClick={() => handleSelectCharacter(character)}
                            style={{
                                padding: '10px',
                                borderBottom: index === characters.length - 1 ? 'none' : '1px solid #ccc',
                            }}
                        >
                            {character.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default AutoSuggestComponent;
