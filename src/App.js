import './App.css';
import Deck from './Components/Deck'
import SigmaMode from './Components/SigmaMode';
import PlayerHand from './Components/PlayerHand';
import DeckObject from './Classes/Deck'
import EmptyHand from './Components/EmptyHand'

function App() {
  let deck = new DeckObject();
  deck = deck.shuffleDeck();

  return (
    <div className="App">
      <div className="Sigma">
        <SigmaMode/>
      </div>

      <div className='PlayerHandTop'>
        <EmptyHand side = {2}/>
        <EmptyHand side = {4}/>
        <EmptyHand side = {3}/>
      </div>

      <Deck deck={deck}/>
      <p className="TableText"> ♠️ bens poker ♠️ </p>

      <div className="PlayerHand">
        <EmptyHand side = {0}/>
        <PlayerHand deck={deck}/>
        <EmptyHand side = {1}/>
      </div>
    </div>
  );
}

export default App;
