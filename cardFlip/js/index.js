const cardValue = ["A", "K", "Q", "J", "9", "8", "7", "6", "5", "4", "3", "2"];

const cardSuite = ["♥", "♦", "♠", "♣"];

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
//shuffle arrays
shuffleCards(cardValue);
shuffleCards(cardSuite);

// Create card objects with randomized pairs
const cards = [];
for (let i = 0; i < cardValue.length; i++) {
    const cardValues = cardValue[i];
    const cardSuites = cardSuite[i];
    const card = {
        value: cardValues,
        suit: cardSuites,
    };
    cards.push(card);
}

for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const cardValueElement = document.createElement("div");
    cardValueElement.classList.add("card-value");
    cardValueElement.textContent = card.value;

    const cardSuitElement = document.createElement("div");
    cardSuitElement.classList.add("card-suite");
    cardSuitElement.textContent = card.suit;

    const mainCard = document.querySelector(".card.flipped");
    mainCard.setAttribute("data-suite", card.suit);

    cardElement.appendChild(cardValueElement);
    cardElement.appendChild(cardSuitElement);
}

const cardFlip = document.querySelectorAll(".card.flipped");

const handleCardFlip = () => {
    for (let card of cardFlip) {
        card.classList.toggle("flipped");
    }
};

const addCardEventListeners = (cards) => {
    for (let card of cardFlip) {
        card.addEventListener("click", (e) => {
            handleCardFlip;
        });
    }
};
(() => {
    // cardFlip.addEventListener("click", handleCardFlip);
    const cardFlip = document.querySelectorAll(".card.flipped");
    addCardEventListeners(cardFlip);
})();
