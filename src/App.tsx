import './App.css';
import AutoSuggestComponent from './components/AutoSuggestComponent';

function App() {
  const handleSelectCharacter = (character: { id: number; name: string }) => {
    // Display the alert with the selected character's name
    alert(`Selected character: ${character?.name}`);
  };

  return (
    <div>
      <h1>Marvel Characters AutoSuggest</h1>

      <AutoSuggestComponent onSelectCharacter={handleSelectCharacter} />
    </div>
  );
};

export default App;
