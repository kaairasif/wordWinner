window.addEventListener("load", init)

// Globals

// Available labels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

// To change level 
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');
// const start = document.querySelector('#start');


const takeScreenshot = document.querySelector('#take-screenshot')
const takeScreenshot2 = document.querySelector('#take-screenshot-2')

let words = [
  "test",
  "hello",
  "hi",
  "good",
  "fine",
  "best",
  "basic",
  "super",
  "riazul"
]

// Initialize game
function init(){
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words)
  // Start matching on word input

  wordInput.addEventListener('input', function (e) {
    startMatch()
  });

  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);

 
}

// start.addEventListener("click", init)

// Start match
function startMatch() {
  if(matchWords()) {
   isPlaying = true;
   time = currentLevel + 1;
   showWord(words);
   wordInput.value = '';
   score++;
  }

  // If score is -1, display 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0
  } else {
    scoreDisplay.innerHTML = score
  }
  
}


// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}


// Countdown timer
function countdown() {
  // Make sure time is not run out
  if(time > 0) {
    // Decrement
    time--
  } else if(time === 0) {
    // Game is over
    isPlaying = false
  }

  // Show time
  timeDisplay.innerHTML = time;
}


// Check game status
function checkStatus() {
  if(!isPlaying && time == 0) {
    message.style.color = 'red';
    message.innerHTML = 'Game over!';
    score = 1;
  }
}


// Match currentword to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false
  }
}





// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scrennshot test

// takeScreenshot.addEventListener("click", () => {
//   html2canvas(document.querySelector("#capture")).then(canvas => {
//     document.body.prepend(canvas)
//   });
  
// })

// takeScreenshot2.addEventListener("click", () => {
//   html2canvas(document.querySelector("#second-screenshot")).then(canvas => {
//     document.body.prepend(canvas)
//   });
// })
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
