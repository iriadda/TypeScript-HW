type Suit = `spade` | `diamond` | `heart` | `clubs`
type Values = '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king'
type Color = `red` | `black`

class Card {
    constructor(suit: Suit, value: Values) {
        this.suit = suit;
        this.value = value;
        this.color = (suit === 'heart' || suit === 'diamond') ? `red` : `black`;
    }

    suit: Suit;
    value: Values;
    color: Color;
}

const suits: Suit[] = ['spade', 'diamond', 'heart', 'clubs']
const values: Values[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const cards: Card[] = []
for (const suit of suits) {
    for (const value of values) {
        cards.push(new Card(suit,value))
    }
}

const reduce = cards.reduce((accum, card:Card) => {
       switch (card.suit){
           case "heart":
               accum.hearts.push(card)
               break;
           case "spade":
               accum.spades.push(card)
               break;
           case 'diamond':
               accum.diamonds.push(card)
               break;
           case 'clubs':
               accum.clubs.push(card)
               break
       }

        return accum
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });
console.log(reduce);