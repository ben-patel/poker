import './styles.css';
import Suits from './../Classes/Suits'
import Ranks from './../Classes/Ranks'

function getDeck(deck) {
    
    let cards = [];
    for(let i = 0; i < 5; i++) {
        let str = "/cards/";
        str += (deck[i].value > 10) ? Ranks[deck[i].value - 11] : deck[i].value;
        str += "_of_";
        str += Suits[deck[i].suit];
        str += ".png"

        cards.push(str);
    }

    return cards;
}

function Deck(props) {
    const cards = getDeck(props.deck);

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