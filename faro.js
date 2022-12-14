const cardsOnTable = {
    flipped: [],
    unflipped: [],
    winCard: [],
    loseCard: [],
}

function _renewDeck() {
    const deck = [
        '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC',
        '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH',
        '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS',
        '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'
    ];
    let newDeck = _shuffleDeck(deck).slice();
    cardsOnTable.flipped = [];
    cardsOnTable.unflipped = [];
    cardsOnTable.flipped.push(newDeck.shift());
    cardsOnTable.unflipped.push(...newDeck);
}

function deal() {
    if (cardsOnTable.winCard.length > 0) {
        cardsOnTable.flipped.push(...cardsOnTable.winCard, ...cardsOnTable.loseCard);
    }
    cardsOnTable.winCard.push(cardsOnTable.unflipped.shift());
    cardsOnTable.loseCard.push(cardsOnTable.unflipped.shift());
}

function _shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        const tempCard = deck[i];
        const randomIndex = Math.floor(Math.random() * deck.length);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
    return deck;
}

window.onload = () => {
    _renewDeck();
}

// console.log(cardsOnTable.unflipped);
// console.log(cardsOnTable.flipped);

// deal();
// console.log(cardsOnTable.unflipped);
// console.log(cardsOnTable.flipped);
// console.log(cardsOnTable.winCard);
// console.log(cardsOnTable.loseCard);

// deal();
// console.log(cardsOnTable.unflipped);
// console.log(cardsOnTable.flipped);
// console.log(cardsOnTable.winCard);
// console.log(cardsOnTable.loseCard);

