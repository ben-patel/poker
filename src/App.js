import './App.css';
import Deck from './Components/Deck'
import SigmaMode from './Components/SigmaMode';

function App() {
  return (
    <div className="App">
      <div className="Sigma">
        <SigmaMode/>
      </div>
      <Deck/>
      <p className="TableText"> ♠️ bens poker ♠️ </p>
    </div>
  );
}

export default App;
