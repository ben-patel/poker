import './App.css';
import Deck from './Components/Deck';
import SigmaMode from './Components/SigmaMode';
import PlayerHand from './Components/PlayerHand';
import DeckObject from './Classes/Deck';
import EmptyHand from './Components/EmptyHand';
import React, { useState, useEffect } from 'react';

const LOCAL_KEY = 'DeckKey'
const dd = new DeckObject().shuffleDeck();

function App() {
  let [deck, setDeck] = useState(dd);

  // calls on page load only
  useEffect(() => {
    const storedDeck = JSON.parse(localStorage.getItem(LOCAL_KEY));
    setDeck(storedDeck);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(deck)); 
  }, [deck])

  function handleShuffle() {
    const newDeck = (new DeckObject()).shuffleDeck();
    setDeck(newDeck);

    setDeck((prevDeck) => {
      return prevDeck;
    })
  }

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
      <button className= "ShuffleButton" onClick={handleShuffle}>shuffle deck</button>
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
