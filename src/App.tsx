import './App.css';
import AutoSuggestComponent from './components/AutoSuggestComponent';

function App() {
  const handleSelectCharacter = (character: { id: number; name: string }) => {
    // Display the alert with the selected character's name
    alert(`Selected character: ${character?.name}`);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Marvel Characters AutoSuggest</h1>

      <p>Search for your favorite Marvel character</p>

      <AutoSuggestComponent onSelectCharacter={handleSelectCharacter} />
    </div>
  );
};

export default App;
