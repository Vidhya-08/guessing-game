function tip() {
  let y = document.querySelector(".start");
  let x = document.querySelector(".tip");
  if (x.style.display == "none") {
    x.style.display = "flex";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function start() {
  let x = document.querySelector(".tip");
  let y = document.querySelector(".start");
  if (y.style.display == "none") {
    y.style.display = "flex";
    x.style.display = "none";
  } else {
    y.style.display = "none";
  }
}
var c = 10;
var count = document.querySelector("#count");
var hint = document.querySelector("#hint");
var over = document.querySelector("#over");
var actualguess = Math.floor(Math.random() * 20);

function play() {
  if (c <= 10 && c > 0) {
    var value = document.querySelector("#guess").value;
    if (value < 1 || value > 20) {
      alert("Enter a number between 1 to 20");
    } else {
      c = c - 1;
      count.textContent = c;
      if (c == 0) {
        over.textContent = "X--GAME OVER--X";
      } else if (value < actualguess) {
        hint.textContent = "Your Guess is Low";
      } else if (value > actualguess) {
        hint.textContent = "Your Guess is High";
      } else if (value == actualguess) {
        hint.textContent = "🎆🎆🎆You Won🎇🎇🎇";
      }
    }
  }
}
