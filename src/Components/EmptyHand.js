import emptyCard from './../empty.png'

const positions = [
    "EmptyHandBottomLeft",
    "EmptyHandBottomRight",
    "EmptyHandTopLeft",
    "EmptyHandTopRight" 
]

function EmptyHand(props) {
    const side = positions[props.side]
    const level = (props.side > 1 ? "EmptyCardsTop" : "EmptyCardsBottom");

    return (
        <div className={side}>
            <img className={level} src={emptyCard} alt="empty card"></img>
            <img className={level} src={emptyCard} alt="empty card"></img>
        </div>
    )
}
export default EmptyHand;