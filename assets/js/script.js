// The array that is going to hold the car images
const cardArray = [  
{
    name: 'bird1', 
    img: 'images/bird1.png',
},
{
    name: 'bird2', 
    img: 'images/bird2.png',
},
{
    name: 'bird3', 
    img: 'images/bird3.png',
},
{
    name: 'bird4', 
    img: 'images/bird4.png',
},
{
    name: 'bird5', 
    img: 'images/bird5.png',
},
{
    name: 'bird6', 
    img: 'images/bird6.png',
},
{
    name: 'bird7', 
    img: 'images/bird7.png',
},
{
    name: 'bird8', 
    img: 'images/bird8.png',
},
]

cardArray.sort(()=> 0.5 - Math.random());  //randomly sort the images in the array

const gridDisplay = document.queryselector('.game-grid');

function createBoard () {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/cardBack.png');
        card.setAttribute('data-id', i);
        gridDisplay.appendChild('card');
    }
}

createBoard ();