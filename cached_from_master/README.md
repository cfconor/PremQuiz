PremQuiz
======
A quiz about guessing goal scorers from various seasons of the Premier League

![PremQuiz webpage](../PremQuiz/assets/img/premquizcropped.png "PremQuiz Homepage")

## UX
### Target Audiences
This quiz website is primarily aimed at football fans, who would like to test their knowledge and memory of the top goalscorers of various leagues
### User Stories
* First Time Visitor
  * As a first time visitor, I want to clearly understand the purpose of the site I am visiting
  * As a first time visitor, I want to be able to clearly find all important parts of the website without too much scrolling or too many clicks on various links or buttons
  * As a first time visitor, I want to know how a quiz should work, and that my options at any time are clear
* Returning Visitor
  * As a returning visitor, I want to see a simple layout that doesn't require relearning after a long time
  * As a returning visitor, I'd like to have some feature that allows me to keep my score of the quiz if I unintentionally close my browser or my tabs
  * As a returning visitor, I'd like to have enough variety in the questions asked to keep me entertained and not have too much repetition

### Design
#### Colours
The colour scheme used here was primarily inspired by the colour palette used by the Premier League on their website and on much of their social media, so without using any copyright logos or icons, it was possible to emulate the feel of the Premier League in the design, adding authenticity.

#### Typography
Which I could not use the official **Radikal** font as it was quite expensive to purchase access to, the **Lato** font was used for its simplicity and modern design, which should help lend to the modern, authentic Premier League content experience.

#### Interface
The simple nature of the site means it is quick to figure out what is being offered, and how to use it. The interactive elements of the quiz means that a player could generate quite a high score with unique questions without being limited by a pre-determined list of questions, and no pagination is required for the quiz to be used. 

## Features

### Existing Features
* Multiple choice questions
  * Each question has multiple answers using buttons, rather than user input
* realtime updating scorekeeping
  * Each time a correct answer is given, the scoresheet updates.
  * An incorrect answer will display the final score, to allow users to try and beat their high score!
  * If you accidentally close your browser or the quiz tab, you can still recover your score, if you have cookies enabled, as the current score is stored on the client side using session cookies.

### Features to Implement
* Allow for additional types of questions
  * Assists
  * Appearances
  * Chances Per Game
  * Clean Sheets (for goalkeepers)
* A high score chart logging all previous scores. This will require knowledge of databases

## Technologies Used

### Languages Used
* Javascript
* HTML5
* CSS

### Source Control
* [Github](https://github.com/)
  * Used to safely store and manage my codebase, allowing me to control any changes or updates to the html, CSS and Javascript, as well as roll back any unwanted changes

### External Libraries, APIs and Frameworks Used

* [JQuery](https://jquery.com/)
  * Used for eventhandlers
  * Used for html selectors, to more easily manipulate the elements on the page that with vanilla Javascript
* [Bootstrap 5](https://getbootstrap.com/)
  * Used to quickly build a presentable website using the intelligent Bootstrap grid system
  * Bootstraps powerful CSS manipulation allowed for extensive page styling without needing to write any local CSS scripts, all features required were fulfilled by the Bootstrap library
* [Google Fonts](https://fonts.google.com/)
  * Used to call the **Lato** font into the html page
* [Github Pages](https://pages.github.com/)
  * Used to host the codebase once complete
  * Github Pages allowed the deployment of the developed code to a public URL that could be accessed anywhere, saving unnecessary time and effort put into finding suitable third party sites that could offer similar functions


## Testing

The W3C HTML Validator was used to validate the main quiz page to ensure validity:

[W3C HTML Validator Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcfconor.github.io%2FPremQuiz%2F)

The W3C CSS validator was also used, however this fired errors due to some of the Bootstrap 5 properties used, which I decided was not worth discarding my Bootstrap tags for, as they are invaluable to the presentation of this project


![PremQuiz webpage zoomed to show layout](../PremQuiz/assets/img/premquiztestingimage.png "PremQuiz Layout")


### First Time Visitor Goals
* As a first time visitor, I want to clearly understand the purpose of the site I am visiting
  * Upon opening the site, the user is presented with a simple layout, with little clutter
  * All text elements are well-contrasted and easy to read, while a minimum of text is used in order to reduce clutter further
* As a first time visitor, I want to be able to clearly find all important parts of the website without too much scrolling or too many clicks on various links or buttons
  * The entire webpage fits onto most desktop screens without requiring any scrolling up or down, and it is the only webpage on the site currently, so finding all of the content and features can be done without having to even move the mouse or touch the keyboard
* As a first time visitor, I want to know how a quiz should work, and that my options at any time are clear
  * The question - answer formula laid out is similar, as there are pre-determined options already displayed on the screen, allowing the user to directly interact within moments by pressing answer buttons
  * The javascript functionality has been carefully designed so that buttons that are not intended to be pressed with be set to a greyed-out, *disabled* state, meaning the user is guided more easily and simply towards which set of buttons they should be interacting with next
### Returning Visitor Goals
* As a returning visitor, I want to see a simple layout that doesn't require relearning after a long time
  * Because of the uncluttered layout and simple features, which do not require any text input or complex interaction, coming back to the PremQuiz after a period of time will not require much relearning to become familiar
* As a returning visitor, I'd like to have some feature that allows me to keep my score of the quiz if I unintentionally close my browser or my tabs
  * *PremQuiz* uses session cookies to save the current score of the user, meaning that unless the user deletes their cookies or does not allow cookies on a site, the current score will be persistent and they can return to continue the quiz, while the cookie has not expired
* As a returning visitor, I'd like to have enough variety in the questions asked to keep me entertained and not have too much repetition
  * There are are several datasets for each possible season that a user can be quizzed on, and players that are chosen randomly at each new question, allowing for potentially dozens if not hundreds of permutations, meaning that users will be presented with plenty of unique questions before repitition becomes an issue

### Further Testing
* The webpage was tested on **Google Chrome** and **Mozilla Firefox**
* Friends were presented with the documentation to review any spelling mistakes or confusing documentation

## Deployment
### Github Pages Deployment
In order to deploy the developed codebase onto Github Pages, it is necessary to carry out some steps:
1. Log into the github website
2. Locate the *PremQuiz* repository
3. Navigate to the **Settings** section of the Repository
4. Find and navigate to the **Options** portion of the **Settings** page
5. Scroll through the **Options** contents, to the **Github Pages** section
6. Under the **Source** heading, open the first dropdown menu and change *none* to *main* (or whatever branch the intended code to publish is in)
7. If the second dropdown under **Source** is not *(root)*, change the value to *(root)*, otherwise do not change anything
8. Under **Source**, Click **Save**
9. The codebase is now being deployed, and a green box will appear with the link, this can be used to navigate to the public URL of the webpage, which will appear after a few minutes

### Deploying Locally
In order to clone this repo for your own use, you can use the following steps:
1. Log into the github website
2. Locate the *PremQuiz* repository 
3. Locate the *Code* button, it will open a dropdown menu
4. Select the download zip option
5. Select this to download the entire codebase onto your local machine
6. From here, depending on your IDE, you may have to use various methods or application in order to preview the working webpage, however the codebase will be fully reviewable from your device providing you have a text editor capable of reading and recognising filetypes such as javascript and CSS files

## Credits

### Code
* A function from the W3C Schools article on [choosing random integers from a range](https://www.w3schools.com/js/js_random.asp) helped develop the logic behind choosing individual players

### Acknowledgements 
* My tutor for his advice and support through the project lifecycle
* My friends for helping to playtest and review the documentation on the site