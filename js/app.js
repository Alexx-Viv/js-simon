var timer = 30;
var simonsLength = 5;
var max = 100;

var countdown = document.getElementById("timer");

var simonNumbers = [];

do {
  var number = Math.floor(Math.random() * max) + 1;
  if (!simonNumbers.includes(number)) {
    simonNumbers.push(number);
  }
} while (simonNumbers.length < simonsLength);

alert("Ricordati i seguenti numeri: " + simonNumbers + ".");

countdown.innerHTML =
  "Sei sicuro che tra  " +
  timer-- +
  " secondi ti ricorderai tutti i numeri ? :P";

setInterval;

var showCountdown = setInterval(
  function () {
    if (timer != 0) {
      countdown.innerHTML =
        "Sei sicuro che tra  " +
        timer +
        " secondi ti ricorderai tutti i numeri ? :P";
    } else {
      clearInterval(showCountdown);
      guess(simonsLength)
    }
    timer--;
  },

  100
);

function guess(simonsLength) {
  var userNumbers = [];
  var rightUserNumbers = [];
  var rightGuess = 0;
  for (var i = 0; i < simonsLength; i++) {
    do {
      var userNumber = parseInt(
        prompt(
          "Che numero ti ricordi ? Te ne restano " + (i + 1) + "/" + simonsLength
        )
      );
    } while (!userNumber || isNaN(userNumber) || userNumber < 1 || userNumbers.includes(userNumber));
    if (simonNumbers.includes(userNumber)) {
        rightUserNumbers.push(userNumber);
        rightGuess += 1;
    }
    userNumbers.push(userNumber);
  }

  alert('Ti sei ricordato ' + rightGuess + ' numeri su ' + simonsLength + '. Cioè sei riuscito a ricordati: ' + rightUserNumbers)
}
