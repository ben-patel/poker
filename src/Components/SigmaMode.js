import audio from './../topg.mp3';
import {useState} from 'react';
import Green from "./../green.png"
import sigmaPhil from "./../philly.jpeg"

var song = new Audio(audio); 
function SigmaMode() {
    const [isActive, setIsActive] = useState(false);

    const SigmaToggle = () => {
        setIsActive(current => !current);

        if (!isActive) {
            song.play(); 
            song.volume = 0.1;
        }else {
            song.pause();
        }
    }
    return (
    <div>
        <button className="SigmaButton" onClick={SigmaToggle} style={{backgroundImage: (isActive  ? `url(${sigmaPhil})` : `url(${Green})`)}}> 
            toggle sigma mode 
        </button>
    </div>
    )
}

export default SigmaMode;