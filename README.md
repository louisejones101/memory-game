# Tropical Birds Pairs Memory Game
<br>
This Tropical Birds Pairs Memory Game was created for the Milestone 2 project of the Level 5 Web Applications Development with Code Insitute The project aim was to Design, develop and implement a dynamic Front end web application using HTML, CSS and JavaScript.

<br>
<br>

[View Tropical Birds Game Here](https://louisejones101.github.io/memory-game/)

<br>

<kbd><img src="assets/images/readmeimages/iamresponsive.jpg"  width="800"></kbd>

<br>

# Contents
<br>

* [User Experience (UX)](#user-experience-(ux))
  * [Initial Discussion](#initial-discussion)
  * [User Stories](#user-stories)
  * [Design](#design)
    * [Colour Scheme](#colour-scheme)
    * [Typography](#typography)
    * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Page Features](#page-features)
  * [Accessibility](#accessibility)
  * [Future Implementations](#future-implementations)
* [Technologies](#technologies)
  * [Languages Used](#languages-used)
  * [Fameworks Libraries and Programs Used](#frameworks-libraries-and-programs-used)
* [Testing](#testing)
  * [Accessibility Testing](#accessibility-testing)
  * [Responsiveness](#responsiveness)
  * [Browser Compatibility](#browser-compatibility)
  * [Features](#features)
  * [Testing User Stories](#testing-user-stories)
  * [Lighthouse](#lighthouse)
  * [W3C Validator](#w3c-validator)
  * [W3C Jigsaw](#w3c-jigsaw)
* [Bugs](#bugs)
* [Deployment and Local Development](#deployment-and-local-development)
  * [Deployment Instructions](#deployment)
  * [Local Development](#local-development)
* [Credit Section](#credit-section)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Images](#images)
  * [information](#information)
* [Acknowledgements](#acknowledgments)

<br>
<br>  

# User Experience (UX) 

<br>

## Initial Discussion

The Game consists of single home page with a tropical theme where the user tries to match pairs of identical tropical birds.  The aim of the game is to flip two cards over each turn and find the find the matching pairs of images.  

The game consists of a 16 card grid of made up of 4 x 4 tiles. There is a timer, a moves counter, a reset button, and a rules button.   The user will be able to read the rules before using the game if they wish by clicking on the rules button which will create a pop up containing the information.  

The game begins when the user clicks their first card choice which then triggers the timer to start.  The user will only be able to flip one card at a time and only two cards each turn.  If the cards match then they will stay visible on the screen, if not they are both flipped back over and they must click their next choice.  

Once all of the cards have been found the user will get a pop up congratulating them and letting them know how much time the game took them to complete and how many moves. They will have the option to play again and the game will reset.

<br>

## User Stories

### As a user

*   As a user I want to be able to see clearly on arriving at the site that it is a memory game, with a clear title and layout.  

*   I want to be able to see and understand the rules of the game before I play.

*   I want to be able to click two cards at a time and reveal the cards that I have clicked on.

*   I want the cards to stay revealed if they are a match and flip back over if not.

*   I want to be able to reset the game and the counter if I want to finish it early or start again.  

*   I want to be told when the game has finished. 

*   I want to be offered the opportunity to play again.  

<br>

## Design

The aim of this project was to build an interactive game that was fun, easy to operate and visually appealing. The game is able to be played by a user of any age.

### Colour Scheme

The color scheme chosen were a vibrant coral, yellow, blues and greens.  The inspiration for the colour palette was taken from the background tropical image that I chose to use.  The colours chosen are bright and colourful. 

The title text, card backs, and buttons are the same colour to match the blue in the toucan.  The coral background of the game grid, was chosen to be similar to the toucans beak colour and matches the modal backgrounds to tie them all togther. The move counter text and the modal text are black so that they are able to be read easily against the coral background.  

The light yellow background was chosen to have a calming effect against the busy game colours and toucan image and help to distinguish between the game grid and the background.  
Below is a screenshot of the colours used.

<kbd><img src="assets/images/readmeimages/colourpalette.png"  width="800"></kbd>



<br>

### Typography

The fonts for this project were imported from Google Fonts, link in the [credit section](#credit-section).  The main font chosen was Merienda which I thought was quite a playful funky font.  For the Modal contents Calibri was used as there was quite alot of text and calibri is easier to read at small sizes than Merienda.  The back up text is San-serif. 

| Merienda font | Calibri |             
|--------|--------|
|<img src="assets/images/readmeimages/mainfont.png" width="500">|<img src="assets/images/readmeimages/modalcontentfont.png" >



<br>

### Imagery

The pictures used for his site were sourced from online websites that offer free images (these are listed in the [credit section](#credit-section). The bird images used for the face of the cards were on one sheet and had to be split down to smaller images.  The images were resized using Photoshop and Illustrator.

<br>

## Wireframes

The wireframes for this project were created by hand on the Ipad in Procreate.

<br>

### Main page Desktop wireframe

<kbd><img src="assets/images/readmeimages/destktopwireframe.jpg"  width="500"></kbd>

<br>

### Main page tablet device and mobile wireframes

<kbd><img src="assets/images/readmeimages/tabletandmobilewireframe.jpg"  width="500"></kbd>

<br>

### Modal wireframes

<kbd><img src="assets/images/readmeimages/modalpopupwireframes.jpg"  width="500"></kbd>

<br>

## Page Features

The website consists of a main game page.  The game page contains the title of the game, the game grid, a background image, a rules button, a reset came button and a move counter.  When the user clicks on the rules button a modal pops up on screen and the user has to click the play Game button in the modal to close the window and begin the game.  

Once the user has successfully matched all the pairs of cards another modal pops up telling the user they have won the game. The user can then click the play again button to return to the game.  All of the cards are reset when the game has been succesfully completed. The cards are flipped back over, the counter is returned to 0 and the cards are shuffled to new positions. 

The cards have a coloured background and then are flipped over to reveal the image.  The buttons change colour when clicked to show that they have been activated.  The modal backgrounds are a slightly translucent black colour to partially hide the screen behind so as not to distracted from the message on the screen.

The site has a favicon as the website icon which was created using the coral and blue colours of the grid and the first letters of the Title.

<br>


| Game | Game cards flipped |             
|--------|--------|
|<img src="assets/images/readmeimages/features1.jpg">|<img src="assets/images/readmeimages/features2.jpg">|

<br>

| Rules modal | Win modal |             
|--------|--------|
|<img src="assets/images/readmeimages/features3.jpg">|<img src="assets/images/readmeimages/features4.jpg">|

<br> 

## Accessibility

<br>

In order to make the site as accessible as possible I followed the w3c guidelines.

The font families and font size were chosen for their readability.

Colours for the backgrounds and the text where chosen to give as much contrast as possible for users to be able to see the text clearly. During testing using Wave some of the text was flagged as having slight contrast issues so changes were made to improve this (discussed in testing below).

Alt tags with clear descriptive text were given to each of the images on the site.

A clear structure to the flow of the site and appropriate headings on the page in order of importance.

Aria-labels added to the form and the social media icon links to allow them to be read by screen readers.



<br>



## Future Implementations

Future implementations - log in, record scores, have the modal tell your moves score.  Different levels more cards. A timer.  

change the background image layout on small mobile devices 

close modals by clicking outside the box


<br>

# Technologies

## Languages Used

  HTML, CSS and Javascript

## Fameworks Libraries and Programs Used

  Procreate - used for the wireframes

  Git and Github - for version control, storing of files and deploying the site

  Gitpod - used as the coding environment.

  Google Fonts - used for the Typography on the page.

  favicon.io  - used to generate the favicon for the site

  Google Dev Tools - to test the style features, layout of pages and responsiveness as the site was being built.

  Photoshop and Illustrator - resizing and editing of images

  W3C Markup Validation - to test HTML code

  W3C Jigsaw - to test CSS code

  Wave by Webaim - Used to check the accessibility of the site

<br>

# Testing

## Accessibility Testing



## Responsiveness
## Browser Compatibility
## Features
## Testing User Stories
## Lighthouse
## W3C Validator
## JSHint

section should be a div

## W3C Jigsaw

w3c validator one error - unneccesary bg-image position - relative, removed

<br>


# Bugs

I have been testing throughout the build using Google dev tools and fixing problems as they arised.  Images not resizing properly in the grid.  perspective fundtion in 3d causing glitch where parts of other cards being shown when a card is clicked.  counter not resetting.  


# Deployment and Local Development

## Deployment Instructions

The site is deployed using GitHub pages

To deploy the site:-

1.  Log in or sign up to Github
2.  Click on the respository name
3.  Click on settings
4.  Find Pages on the lefthand side menu and click
5.  Scroll to Build and Deployment section
6.  Make sure the Deploy from a branch is selected in the Source box
7.  In the Branch dropdown menu select Main and root and then save.

You will then see a notification at the top of the page to say that the site is live and a link to visit the site.  This may take a few minutes.

<br>

## Local Development

How to fork the respository:-

1.  Log in or sign up to Github
2.  Click on the respository name
3.  Click on Fork in the top-right hand corner of the page
4.  Select the owner of the respository
5.  Add a description of your fork (optional)
6.  Copy the main branch only (default)
7.  Click on the create Fork button

<br>

How to clone the repository:-

1.  Log in or sign up to Github
2.  Click on the Code button above the list of files
3.  Copy the repository URL
4.  Open the terminal
5.  Change the working directory to where you want to put the cloned directory
6.  Type 'git clone' and then add the URL
7.  Press enter

<br>
<br>

# Credit Section

## Code Used

YouTube tutorial by "DevelopedByEd' - Awesome Vanilla JavaScript Memory Card Game Tutorial"  https://www.youtube.com/watch?v=-tlb4tv4mC4 - I followed this tutorial to build the main grid of the game and the flip functions.  The main game container, grid and cards code was used and edited to fit what I wanted.  

W3 Schools - How to make a modal box with CSS.  https://www.w3schools.com/howto/howto_css_modals.asp  - I used some of the CSS styling from this example for my modal background to get the partly transparent overlay, I edited to suit my project.

w3schools for general code ideas

Stack overflow - when having problems with any bit of code then this channel used to look at different answers given.


<br>

## Content
  
Am I responsive - (https://ui.dev/amiresponsive)

Colour palette generator - coolors - (https://coolors.co/22292f-035746-caa59b-fcf8cf)

<br>

## Images

The Bird images for the card faces were taken from this free download on freepik by macrovector. - 
 "https://www.freepik.com/free-vector/exotic-birds-set_3817867.htm#query=jungle%20birds&position=9&from_view=search&track=ais"


The background was made up from part of a tropical background image by BiZkettE1 which I downloaded from freepik.  The file was a psd file with layers so I was able to change the image around, delete and resize some of the features to suit what I wanted. - "https://www.freepik.com/free-psd/colorful-summer-nights-poster-template-with-toucan_4793703.htm#page=2&position=11&from_view=author"

The blue gradient background card image was created by myself in photoshop.

<br>

| birds | background |             
|--------|--------|
<img src="assets/images/readmeimages/birdimage.jpg" width="400">|<img src="assets/images/readmeimages/tropicalbackground.png" width='300'>|

<br>

## information



<br>


# Acknowledgements


