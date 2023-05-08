// The array that is going to hold the car images
const birdCards = [  
{
    name: 'bird1', 
    imgSrc: 'assets/images/bird1.png',
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

function createBoard () {
    for (let i = 0; i < birdCards.length; i++){  //for loop to iterate through the array
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/cardBack.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }  
}

createBoard () //call createBoard function

function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log(birdCards[cardId].name);
    console.log('clicked', cardId);
}