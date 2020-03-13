'use strict'
var yourScore= 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var rndm= getRandomInt(0,20);
function guessingGame() {
    var name = prompt('Welcome! what\'s your name?');
    alert(`Hello ${name}`);
    var question1 = prompt('Are you ready?').toLowerCase();
    console.log(question1);
    if (question1 === 'yes' || question1 === 'y') {
        alert('You are correct!');
        yourScore++;
        console.log(yourScore);

    } else if (question1 === 'no' || question1 === 'n') {
        alert('Sorry, wrong answer!'); 
    } else {
        alert('Hello! You still there?!');
    }
    var question2 = prompt('Are you happy?').toUpperCase();
    if (question2 === 'YES' || question2 === 'Y') {
        alert('Sorry, wrong answer!');
    } else if (question2 === 'NO' || question2 === 'N') {
        alert('yes you right');
        yourScore++;
        console.log(yourScore);

    } else {
        alert('you mad bro!!');
    }
    alert(`Thank you ${name} for answering question 1 with ${question1} and anwering question 2 with ${question2}`);
}
guessingGame();
var yourGuess = prompt('How many siblings do you think I have?');

function guessSiblings() {
    for (var i = 0; i < 5 ; i++) {
        // console.log(yourGuess);

        if ( yourGuess == rndm) {
        alert('Correct Answer!');
        yourScore++;
        break;
        } else if (yourGuess > rndm) { 
        yourGuess= prompt('go lower');
        console.log(yourGuess);
        } else if (yourGuess < rndm) {
        yourGuess= prompt('go higher');
        console.log(yourGuess);
        } else {
        yourGuess = prompt('please answer with a number');
        console.log(yourGuess);
        }
    }
}
guessSiblings();
var choices = ['shutter island', 'the ring', 'the conjuring'];
var yourAnswer = prompt('guess my fav movie: shutter island, the ring, the conjuring, ps. i loveyou').toLowerCase();
var x=-1
function choiceQuestion() {
    for (var r=0 ; r<4 ; r++){
        for (var i=0 ; i<choices.length ; i++){
            if (yourAnswer === choices[i]) {
                x=i;
                break;
            }
        }
        if (x > -1) {
            alert('you answered correctly!');
            yourScore++;
            console.log(yourScore);

            break;
        } else {
            yourAnswer= prompt('pls take another guess:');
        }
    }
    if (x === -1) {
        alert(`out of chances! the answers were ${choices}`);
    }
        
    }
choiceQuestion();
alert(`${name}, here is your score ${yourScore}/4!`);