const gameGrid = document.querySelector('section');  // linking to section in HTMl
const movesCounter = document.querySelector('span'); // linking to section in HTML
const counter = 0;  //setting the moves counter to O.

movesCounter.textContent = counter; 

// card Data
const gameCards = () => [   // The array that is going to hold the card images
{
    name: 'bird1', 
    imgSrc: 'assets/images/bird1b.png',
},
{
    name: 'bird2', 
    imgSrc: 'assets/images/bird2.png',
},
{
    name: 'bird3', 
    imgSrc: 'assets/images/bird3.png',
},
{
    name: 'bird4', 
    imgSrc: 'assets/images/bird4.png',
},
{
    name: 'bird5', 
    imgSrc: 'assets/images/bird5.png',
},
{
    name: 'bird6', 
    imgSrc: 'assets/images/bird6.png',
},
{
    name: 'bird7', 
    imgSrc: 'assets/images/bird7.png',
},
{
    name: 'bird8', 
    imgSrc: 'assets/images/bird8.png',
},
{
    name: 'bird1', 
    imgSrc: 'assets/images/bird1b.png',
},
{
    name: 'bird2', 
    imgSrc: 'assets/images/bird2.png',
},
{
    name: 'bird3', 
    imgSrc: 'assets/images/bird3.png',
},
{
    name: 'bird4', 
    imgSrc: 'assets/images/bird4.png',
},
{
    name: 'bird5', 
    imgSrc: 'assets/images/bird5.png',
},
{
    name: 'bird6', 
    imgSrc: 'assets/images/bird6.png',
},
{
    name: 'bird7', 
    imgSrc: 'assets/images/bird7.png',
},
{
    name: 'bird8', 
    imgSrc: 'assets/images/bird8.png',
},
];

// Function to randomly sort the cards
const randomiseCards = () => {
    const cardData = gameCards();  //fetch card data from the array
    cardData.sort(() => Math.random() -0.5);  // randomise 
    return cardData;
};

randomiseCards();

//Generate cards in the grid
const generateCards = () => {   // 
    const cardData = randomiseCards();  // call randomiseCard function
    const cards = document.querySelectorAll('card');  // use all the cards 
    cardData.forEach(item => { 
        const card = document.createElement('div');  
        const cardFace = document.createElement('img');  
        const cardBack = document.createElement('div'); 
        card.classList = 'card'; 
        cardFace.classList = 'cardFace';
        cardBack.classList = 'cardBack';

        //link the card info for the front and back to the cards
        cardFace.src = item.imgSrc;  
        cardBack.src = ('assets/images/cardBack.png'); 

        // attach the card to the game grid and attach the card front and back images to the card
        gameGrid.appendChild(card);  
        card.appendChild(cardFace);
        card.appendChild(cardBack);

    });         
};

generateCards();  //call the function to generate the cards in the grid



    
        
        
     





