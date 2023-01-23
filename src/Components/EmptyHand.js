import emptyCard from './../empty.png'

function EmptyHand(props) {
    const side = (props.side === "right" ? "EmptyHandBottomRight" : "EmptyHandBottomLeft");

    return (
        <div className={side}>
            <img className="EmptyCards" src={emptyCard} alt="empty card"></img>
            <img className="EmptyCards" src={emptyCard} alt="empty card"></img>
        </div>
    )
}
export default EmptyHand;