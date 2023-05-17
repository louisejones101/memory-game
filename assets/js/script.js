// code for the code within the main grid was taken from tutorial online by "developedbyed" and edited to suit - link in ReadME

// declare variables and link them to the correct class and Id names in HTML
const gameGrid = document.querySelector('.gameGrid'); 
const movesElem = document.querySelector('.moves'); 
var modalOne = document.getElementById('rulesModal');
const modalTwo = document.getElementById('winModal')
const modalBackground = document.getElementById('modalOverlay');
const rulesButton = document.getElementById('rulesBtn');
const closeButton = document.getElementById('startBtn');
const playAgainButton = document.getElementById('playAgainBtn');
const resetButton = document.getElementById('resetGameBtn');
let cardsMatched = 0; //setting the cardsMatched to 0
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


//Rules modal button event listeners and functions

rulesButton.addEventListener('click', rulesBtn);  // event listener for when the rules button is clicked
rulesButton.onclick = function() {   // function to open rules modal
    modalOne.style.display = 'block';  //block the default hidden in css
}

closeButton.addEventListener('click', startBtn); // event listener for when the start game button is clicked
closeButton.onclick = function() {  // function to close rules modal
    modalOne.style.display = 'none';  // return modal to hidden
}

//win Modal

function winModalMessage () {   // winModal function
    modalTwo.style.display = 'block'; 
    resetGame();  //call resetGame function 
}

playAgainButton.addEventListener('click', playAgainButton); // event listener for when the start game button is clicked
playAgainButton.onclick = function() {  // function to close rules modal
    modalTwo.style.display = 'none';
    resetCounter(); 
}

// reset Game event listener and reset button function to call reset game function

resetButton.addEventListener('click', resetGameBtn);  // event listener for when the reset button is clicked
resetButton.onclick = function() {   // function to reset game 
resetGame(); // call the resetGame function
resetCounter();
}


// functions for the moves counter

function movesCounter() {  
    counter++;  // if the cardspicked length = 2 add one move to the counter and update on page
    movesElem.innerHTML = counter;  // show the increasing counter number in the HTML 
}

function resetCounter(){  
    counter = 0;  //reset the counter to 0
    movesElem.innerHTML = counter;  // show the new reset counter in the HTML
};


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
    cardData.forEach((item) => {  // loop through the cardData and apply the code to each item
        const card = document.createElement('div');  //
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
        //add eventlistener which calls the checkmatch function
        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");  
            checkMatch(e); // call checkmatch function
        }); 
    });
};

// check if the cards picked match
const checkMatch = (e) => {
    const cardClicked = e.target; 
    cardClicked.classList.add('cardPicked'); //creates a cardPicked class
    const cardsPicked = document.querySelectorAll('.cardPicked');  //cards that are clicked (cardPicked) added to cardsPicked
    const toggleCard = document.querySelectorAll('toggleCard'); 
    // if statement to check if the card names of the picked cards match
    if (cardsPicked.length === 2){ 
         if (cardsPicked[0].getAttribute('name') === cardsPicked[1].getAttribute('name')){  // if the cards match remove them from the cardPicked class and make them unclickable
            cardsPicked.forEach((card) => {  
                card.classList.remove('cardPicked');
                card.style.pointerEvents = 'none';
                cardsMatched++;  //if 2 cards matched add to variable cards matched
            });
        } else {
            cardsPicked.forEach((card) => {  //if the card names dont match then remove them from the cardPicked class and after a delay turn the cards back over
                card.classList.remove('cardPicked');
                setTimeout(() => card.classList.remove('toggleCard'), 1000); // set a delay of 1 sec before flipping cards back over
            });
        };
        movesCounter();  //call movesCounter function
    }
    // if cards matched is equal to all the cards alert win
    if (cardsMatched === 16){
        setTimeout(() => {  // set a 1 second delay before displaying the winModal
            winModalMessage();  //call the winModal
        }, 1000);   
    };   
};

// resetGame function

const resetGame = () => {
    let cardData = randomiseCards ();  // apply the randomiseCards function to the cardData
    let cardFace = document.querySelectorAll(".cardFace");
    let cardReset = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {   // loop through the card data and apply the code below to each
        cardReset[index].classList.remove('toggleCard');   // remove the togglecard that keeps the cards facing up
        setTimeout(() => {   //set a time delay for 1s the code below
            cardReset[index].style.pointerEvents = 'all';  // resinstate the pointer events which were disabled in the if statement in CheckMatch Function
            cardFace[index].src = item.imgSrc;  // reset the images on the cardFace
            cardReset[index].setAttribute('name', item.name);  //link the item name to the new cardFace image
        },1000); 
        // reset the counters
        cardsPicked = 0;    
        cardsMatched = 0;  
    });    
};
generateCards();  //call the function to generate the cards in the grid