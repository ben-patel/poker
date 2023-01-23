import './App.css';
import Deck from './Components/Deck'
import SigmaMode from './Components/SigmaMode';
import PlayerHand from './Components/PlayerHand';
import DeckObject from './Classes/Deck'

function App() {
  let deck = new DeckObject();
  deck = deck.shuffleDeck();

  return (
    <div className="App">
      <div className="Sigma">
        <SigmaMode/>
      </div>
      <Deck deck={deck}/>
      <p className="TableText"> ♠️ bens poker ♠️ </p>
      <div className="PlayerHand">
        <PlayerHand deck={deck}/>
      </div>
    </div>
  );
}

export default App;
