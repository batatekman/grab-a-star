const square = document.querySelectorAll(".square"); // collect all squares in per object
const Star = document.querySelectorAll(".star");
const timeLeft = document.querySelector("#time-left");

let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;
let realTimeCheckStatus; // Used to check if real timer to stop clicking count on 'Grab A Star'

/* 
Function used to randomly
move the star around the square
*/
function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("star");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("star");

  //id assigned to randomPosition is the hit position token for the star
  hitPosition = randomPosition.id;
}

/*
Loop through each event
to see if user has hit
the star. This is per
square event using id parameter
*/
square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      if (!realTimeCheckStatus == 0) {
        console.log("timer real: " + realTimeCheckStatus);
        result = result + 1;
        score.textContent = result;
      }
    }
  });
});

/*
Move the star by calling
randomSquare to add the star
to the grid randomly based
on the time interval by randomSquare
*/
function moveStar() {
  let timeID = null;
  timeID = setInterval(randomSquare, 1000);
}

/*
Count Down the timer
*/
function countDown() {
  currentTime--;
  realTimeCheckStatus = currentTime;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timeID);
    timeLeft.textContent = "Times Up";
    currentTime = 60;
    alert("Game Over. Your total score was " + result + ".");
  }
}

/*
Call function to move the Star
*/
moveStar();

/*
Start countDown using setInterval timer
*/
timeID = setInterval(countDown, 1000);
