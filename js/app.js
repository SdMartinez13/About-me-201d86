'use strict';

console.log('Hello World!');

let score = 0;
function questionOne(){
let answerOne = prompt('Do I have Children?').toLowerCase();

//console.log(answerOne);

if(answerOne === 'yes' || answerOne === 'y'){
  alert('You are correct');
  score++;
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Wrong, I have children!');
}
}
questionOne();

function questionTwo(){
let answerTwo = prompt('Do I love coding?').toLowerCase();

//console.log(answerTwo);

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('Yes, don\'t we all?');
  score++;
}else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('NO? Actually, I find it very exciting!');
}
}
questionTwo();

function questionThree(){
let answerThree = prompt('Am I in my 40s?').toLowerCase();

//console.log(answerThree);

if(answerThree === 'yes' || answerThree === 'y'){
  alert('Wow, good guess!!');
  score++;
}else if(answerThree === 'no' || answerThree === 'n'){
  alert('Thanks for that but no, I\'m 41');
}
}
questionThree();

function questionFour(){
let answerFour = prompt('Am I a Veteran?').toLowerCase();

//console.log(answerFour);

if(answerFour === 'yes' || answerFour === 'y'){
  alert('Correct, GO NAVY!');
  score++;
}else if(answerFour === 'no' || answerFour === 'n'){
  alert('I am a Veteran of the US Navy!');
}
}
questionFour();

function questionFive(){
let answerFive = prompt('Do I live in WA?').toLowerCase();

//console.log(answerFive);

if(answerFive === 'yes' || answerFive === 'y'){
  alert('Correct, I live in Pierce County');
  score++;
}else if(answerFive === 'no' || answerFive === 'n'){
  alert('Actually, I do.  I live in Pierce County, WA');
}
}
questionFive();
function questionUserName(){
let userName = prompt('Thanks for playing, What is your name?');

//console.log(userName);

alert('Welcome to my page, ' + userName);
}
questionUserName();

function questionSix(){
let maxGuesses = 4;

for (let i =1; i <=maxGuesses; i++){
  let answer = prompt('How many Children do I have?');
  if (answer === '6'){
    alert('BINGO!!!');
    score++;
    console.log('BINGO!!!');
    break;
  } else if (answer <= '5'){
    alert('Nope, Guess higher');
  }else if (answer >= '7'){
    alert('Nope, Guess lower');
  }else {
    alert('Close, I have 6 children');
  }
}
}
questionSix();

function questionSeven(){
let foodAnswer = ['tacos', 'pizza', 'sushi'];

for (let i = 0; i < 6; i++) {
  let answer = prompt('What are some of my favorite foods?');
  for (let j = 0; j < foodAnswer.length; j++) {
    if (answer === foodAnswer[j]) {
      alert('Thats right!' + ' I enjoy tacos, pizza, and sushi');
      score++;
      i=8;
      break;
    }
  }
}
}
questionSeven();

alert ('Good job ' + userName + ' you got ' + score + ' correct');



