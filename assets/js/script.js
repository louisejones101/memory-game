// The array that is going to hold the card images
const birdCards = [  
{
    name: 'bird1', 
    img: 'assets/images/bird1b.png',
},
{
    name: 'bird2', 
    img: 'assets/images/bird2.png',
},
{
    name: 'bird3', 
    img: 'assets/images/bird3.png',
},
{
    name: 'bird4', 
    img: 'assets/images/bird4.png',
},
{
    name: 'bird5', 
    img: 'assets/images/bird5.png',
},
{
    name: 'bird6', 
    img: 'assets/images/bird6.png',
},
{
    name: 'bird7', 
    img: 'assets/images/bird7.png',
},
{
    name: 'bird8', 
    img: 'assets/images/bird8.png',
},
{
    name: 'bird1', 
    img: 'assets/images/bird1b.png',
},
{
    name: 'bird2', 
    img: 'assets/images/bird2.png',
},
{
    name: 'bird3', 
    img: 'assets/images/bird3.png',
},
{
    name: 'bird4', 
    img: 'assets/images/bird4.png',
},
{
    name: 'bird5', 
    img: 'assets/images/bird5.png',
},
{
    name: 'bird6', 
    img: 'assets/images/bird6.png',
},
{
    name: 'bird7', 
    img: 'assets/images/bird7.png',
},
{
    name: 'bird8', 
    img: 'assets/images/bird8.png',
},
];

birdCards.sort(()=> 0.5 - Math.random());  //randomly sort the images in the array

const gridDisplay = document.querySelector('#game-grid');
let cardsPicked = [];  //empty array waiting for the matched cards when picked
let cardsPickedId = []; //empty array waiting for the ids of the matched cards
const cardsMatched = [];  //

// function to create the Board using the cards in the array birdCards
function createBoard () {
    for (let i = 0; i < birdCards.length; i++){  //for loop to iterate through the array
        const card = document.createElement('img')
        console.log(card, i);
        card.setAttribute('src', 'assets/images/cardBack.png'); 
        card.setAttribute('data-id', i); 
        card.addEventListener('click', flipCard); //on click function flip card
        gridDisplay.append(card);
    }  
}

createBoard () //call createBoard function

//function to check if there is a match
function checkMatch() {
    const cards = document.querySelectorAll('img');  //search every image
    if (cardsPickedId == cardsPickedId){  //if the same card is clicked twice
        alert('You have clicked the same image, pick another one')

    }
    if (cardsPicked[0] == cardsPicked[1]){
        alert('You have found a match!');
        cards[cardsPickedId[0].removeEventListener('click', flipCard)]; // stop listening for click on this card
        cards[cardsPickedId[1].removeEventListener('click', flipCard)];
        cardsMatched.push(cardsPicked);  //pushes matched cards to the array cardsmatched
    } 
    cardsPicked = []; 
    cardsPickedId = [];

}

// flip card function
function flipCard() {  
    const cardId = this.getAttribute('data-id'); //fetches the data-id for each card
    cardsPicked.push(birdCards[cardId].name); //pushes the cards that have been picked to the array cardsPicked
    cardsPickedId.push(cardId);  //pushes the id of the cards picked to the array cardsPickedId
    console.log(cardsPicked);
    console.log(cardsPickedId);
    this.setAttribute('src', birdCards[cardId].img); //get card image linked to the card Id
    if(cardsPicked.length === 2){  
        setTimeout(checkMatch, 500); //set a slight delay when two cards clicked before calling checkMatch function
    }
}

