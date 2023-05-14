const gameGrid = document.querySelector('section');  // linking to section in HTMl
const movesCounter = document.querySelector('span'); // linking to section in HTML
const counter = 0;  //setting the moves counter to O

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
const generateCards = () => {  
    const cardData = randomiseCards();  // call randomiseCard function
    cardData.forEach((item) => { 
        const card = document.createElement('div');  
        const cardFace = document.createElement('img');
        const cardBack = document.createElement('div'); 
        card.classList = 'card'; 
        cardFace.classList = 'cardFace';
        cardBack.classList = 'cardBack';
        //link the card info for the front and back to the cards
        
        cardFace.src = item.imgSrc;
        //cardBack.src = cardBack;
        card.setAttribute('name', item.name);
        // attach the card to the game grid and attach the card front and back images to the card
        gameGrid.appendChild(card);  
        card.appendChild(cardFace);
        card.appendChild(cardBack);
        // event listener
        card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard");
        checkMatch(e);  // call checkmatch function
        });
    });        
};

// function to check if the cards picked match
const checkMatch = (e) => {
    const cardClicked = e.target;  
    cardClicked.classList.add('cardPicked'); //creates a cardPicked class
    const cardsPicked = document.querySelectorAll('.cardPicked');  //cards that are clicked (cardPicked) added to cardsPicked
    // if statement to check if the card names of the picked cards match
    if (cardsPicked.length === 2){   
        if (cardsPicked[0].getAttribute('name') === cardsPicked[1].getAttribute('name')){
            console.log('matched');
        } else {
            console.log('wrong');
        }
    }
};

generateCards();  //call the function to generate the cards in the grid





    
        
        
     





