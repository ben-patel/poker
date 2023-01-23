import audio from './../topg.mp3';

let count = 0;
function SigmaMode() {
    var song = new Audio(audio); 

    const SigmaToggle = () => {
        
        if (count%2 === 0) {
            song.play(); 
            song.volume = 0.1;
        }else {
            song.pause();
            song.currentTime = 0;
        }
        count++;

    }
    return (
    <div>
        <button className="SigmaButton" onClick={SigmaToggle}> toggle sigma mode </button>
    </div>
    )
}

export default SigmaMode;