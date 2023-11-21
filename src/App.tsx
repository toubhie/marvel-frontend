import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoSuggestComponent from './components/AutoSuggestComponent';

function App() {
  const handleSelectCharacter = (character: { id: number; name: string }) => {
    // Display an alert with the selected character's name
    alert(`Selected character: ${character?.name}`);
  };

  return (
    <div>
      <h1>Marvel Character AutoSuggest</h1>
      <AutoSuggestComponent onSelectCharacter={handleSelectCharacter} />
    </div>
  );
};

export default App;
