let gen = [];
let user = [];
let level = document.querySelector(".level");
let start = document.querySelector(".start");
let gameOver = document.querySelector(".gameOver");
let bnts = document.querySelector(".bnts");

function getBox() {
  let id = Math.floor(Math.random() * 4) + 1;
  let box = document.querySelector(`.bnt_${id}`);
  return box;
}
function binkButton(ele) {
  ele.classList.add("active");
  setTimeout(() => ele.classList.remove("active"), 300);
}
function binkBody(ele) {
  let body = document.querySelector("body");
  body.classList.add("bg-red");
  setTimeout(() => {
    body.classList.remove("bg-red");
  }, 300);
}

function befReStart() {
  let score = document.querySelector(".gameOver > h3 >span >span");
  score.innerText = level.children[0].innerText;
  gameOver.classList.remove("none");
  start.classList.remove("none");
  level.classList.add("none");
  level.children[0].innerText = 1;
  gen = [];
  user = [];
}
function updateLevel() {
  let preLevel = level.children[0].innerText;
  level.children[0].innerText = parseInt(preLevel) + 1;
  user = [];
}

function validet() {
  if (JSON.stringify(gen) == JSON.stringify(user)) {
    updateLevel();
    startGame();
  } else {
    binkBody();
    befReStart();
  }
}

function startGame() {
  let ele = getBox();
  binkButton(ele);
  gen.push(ele.classList[0]);
}

window.addEventListener("keypress", (e) => {
  if (e.code == "KeyS") {
    start.classList.add("none");
    level.classList.remove("none");
    gameOver.classList.add("none");
    startGame();
  }
});

bnts.addEventListener("click", (e) => {
  user.push(e.target.classList[0]);
  if (gen.length == user.length) {
    validet();
  }
});
