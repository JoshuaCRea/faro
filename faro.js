const starterDeck = [
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'
];

const cardsOnTable = {
    flipped: [],
    unflipped: [],
}

function _renewDeck(deck) {
    let newDeck = _shuffleDeck(deck);
    cardsOnTable.flipped = [];
    cardsOnTable.flipped.push(newDeck.shift());
    cardsOnTable.unflipped.push(newDeck);
}

//function that deals one lose card (first) and one win card (second)

function _shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        const tempCard = deck[i];
        const randomIndex = Math.floor(Math.random() * deck.length);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
    return deck.slice();
}

window.onload = () => {
    _renewDeck(starterDeck);
    console.log(cardsOnTable.unflipped);
    console.log(cardsOnTable.flipped);

    _renewDeck(starterDeck);
    console.log(cardsOnTable.unflipped);
    console.log(cardsOnTable.flipped);
}

