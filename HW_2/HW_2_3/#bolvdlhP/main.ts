// type Suit = `spade` | `diamond` | `heart` | `clubs`
// type Values = '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king'
// type Color = `red` | `black`
//
// class Card {
//     constructor(suit: Suit, value: Values) {
//         this.suit = suit;
//         this.value = value;
//         this.color = (suit === 'heart' || suit === 'diamond') ? `red` : `black`;
//     }
//
//     suit: Suit;
//     value: Values;
//     color: Color;
// }
//
// const suits: Suit[] = ['spade', 'diamond', 'heart', 'clubs']
// const values: Values[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
//
// const cards: Card[] = []
// for (const suit of suits) {
//     for (const value of values) {
//         cards.push(new Card(suit,value))
//     }
// }
// console.log(cards)
//
// console.log(cards.find(card => card.value === 'ace' && card.suit === 'spade'));
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.suit === 'diamond'));
// console.log(cards.filter(card => card.suit === 'clubs' && ![ '6' , '7' , '8' , '9'].includes(card.value)));
