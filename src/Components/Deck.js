import DeckObject from './Classes/Deck'
import './styles.css';

const Suits = [
    "hearts",
    "diamonds",
    "spades",
    "clubs"
];

const ranks = [
    "jack",
    "queen",
    "king",
    "ace"
]

function getDeck() {

    let deck = new DeckObject();
    deck = deck.shuffleDeck();
    
    let cards = [];
    for(let i = 0; i < 5; i++) {
        let str = "/cards/";
        str += (deck[i].value > 10) ? ranks[deck[i].value - 11] : deck[i].value;
        str += "_of_";
        str += Suits[deck[i].suit];
        str += ".png"

        cards.push(str);
    }

    return cards;
}

function Deck() {
    const cards = getDeck();

    return  (
    <div className='Deck'>
        <img className='Card' src={process.env.PUBLIC_URL + cards[0]} alt="card" />
        <img className='Card' src={process.env.PUBLIC_URL + cards[1]} alt="card" />
        <img className='Card' src={process.env.PUBLIC_URL + cards[2]} alt="card" />
        <img className='Card' src={process.env.PUBLIC_URL + cards[3]} alt="card" />
        <img className='Card' src={process.env.PUBLIC_URL + cards[4]} alt="card" />
    </div>
    );
}

export default Deck;