const gameGrid = document.querySelector('section');  // linking to section in HTMl
const movesCounter = document.querySelector('span'); // linking to section in HTML
const counter = 0;  //setting the moves counter to O.

movesCounter.textContent = counter; 

// card Data
const cardData = () => [   // The array that is going to hold the card images
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

// Function to randomly sort the cards
const randomiseCards = () => {
    const gameCards = cardData ();  //fetch card data from the array
    gameCards.sort(() => Math.random () -0.5);  // randomise
    console.log(gameCards);

}



