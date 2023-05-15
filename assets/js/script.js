const gameGrid = document.querySelector('.gameGrid');  // linking to section in HTMl
const movesElem = document.querySelector('.moves'); // linking to section in HTML
let modal = document.getElementById('rulesModal');
const rulesBtn = document.getElementById('rulesBtn');
const closeBtn = document.getElementById('startBtn');

let counter = 0;  //setting the moves counter to O

//card data
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

//modal function 


/*rulesBtn.addEventListener('click', (event) => {
    console.log('clicked');
//function openRulesBtn (event) { 
        rulesBtn = event.target.button;
        document.getElementById("rulesBtn");
        modal.style.display = 'block';
});*/

//rulesBtn.addEventListener('click', rulesBtn);

rulesBtn.onclick = function() {
    modal.style.display = 'block';
    console.log('clicked');
}

// Function to randomly sort the cards
const randomiseCards = () => {
    const cardData = gameCards();  //fetch card data from the array
    cardData.sort(() => Math.random() -0.5);  // randomise 
    return cardData;
};

randomiseCards();

//Generate cards in the grid
const generateCards = () => {
    const cardData = randomiseCards(); // call randomiseCard function
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const cardFace = document.createElement('img');
        const cardBack = document.createElement('div');
        card.classList = 'card';
        cardFace.classList = 'cardFace';
        cardBack.classList = 'cardBack';
        //link the card info for the front and back to the cards
        cardFace.src = item.imgSrc;
        card.setAttribute('name', item.name); 
        //attach cards to grid
        gameGrid.appendChild(card);  
        card.appendChild(cardFace);
        card.appendChild(cardBack);
        // add eventlistener which calls the checkmatch function
        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkMatch(e); // call checkmatch function
        }); 
    });
}

// check if the cards picked match
const checkMatch = (e) => {
    const cardClicked = e.target;  
    cardClicked.classList.add('cardPicked'); //creates a cardPicked class
    const cardsPicked = document.querySelectorAll('.cardPicked');  //cards that are clicked (cardPicked) added to cardsPicked
    // if statement to check if the card names of the picked cards match
    if (cardsPicked.length === 2){ 
         if (cardsPicked[0].getAttribute('name') === cardsPicked[1].getAttribute('name')){  // if the cards match remove the from the cardPicked class and make them unclickable
            cardsPicked.forEach((card) => {  
                card.classList.remove('cardPicked');
                card.style.pointerEvents = 'none';
            });
        } else {
            cardsPicked.forEach((card) => {  //if the card names dont match then remove them from the cardPicked class and after a delay turn the cards back over
                card.classList.remove('cardPicked');
                setTimeout(() => card.classList.remove('toggleCard'), 1200);  
            });
        };
        movesCounter();
    };
};

generateCards();  //call the function to generate the cards in the grid

function movesCounter() {
    counter++;  // if the cardspicked length = 2 add one move to the counter and update on page
    movesElem.innerHTML = counter;
}










    
        
        
     





