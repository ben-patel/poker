import Card from './Card'

class Deck {
    constructor(name) {
        this.deck = [];

        for(let i = 0; i <= 3; i++) {
            for(let j = 2; j <= 14; j++) {
                this.deck.push(new Card(i, j));
            }
        }
    
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }

        return this.deck;
    }
};

export default Deck;