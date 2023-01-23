import Suits from './../Classes/Suits'
import Ranks from './../Classes/Ranks'

function PlayerHand(props) {

    const c1 = getCard(props,1);
    const c2 = getCard(props, 2);

    return (
        <div>
            <img className='PlayerCards' src={process.env.PUBLIC_URL + c1} alt="card" />
            <img className='PlayerCards' src={process.env.PUBLIC_URL + c2} alt="card" />
        </div>
        );
}

function getCard(props, val) {
    let str = "/cards/";
    str += ((props.deck)[val + 4].value > 10) ? Ranks[(props.deck)[val + 4].value - 11] : (props.deck)[val + 4].value;
    str += "_of_";
    str += Suits[(props.deck)[val + 4].suit];
    str += ".png" 
    
    return str;
}

export default PlayerHand;