const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const startingLine = document.querySelector('.starting-line');
const question = document.querySelector('.question');
const answersList = document.querySelector('.answer-list');
const cars = ['Audi', 'BMW', 'Tesla', 'Volkswagen'];
const score = document.querySelector('.current-score');
let newButton = document.createElement('button');
const carsTwo = ['Lexus', 'Ferrari', 'Jaguar', 'Kia'];
let listItem = document.getElementsByTagName('li');

reset.addEventListener('click', reloadPage);
start.addEventListener('click', questionOne);

function reloadPage() {
  location.reload();
}

function questionOne(evt) {
  evt.preventDefault();
  startingLine.style.visibility = 'hidden';
  question.innerText =
    'Question 1: Which car company is leading in electric technology?';
  for (i = 0; i < 4; i++) {
    let answer = document.createElement('li');
    answersList.appendChild(answer);
    answer.innerText = cars[i];
    answer.classList = cars[i];
    answersList.addEventListener('click', answerOne);
  }
}

function answerOne(evt) {
  if (evt.target.className === 'Tesla') {
    question.innerText =
      'Correct! Tesla is leading the pack in the electric vehicle industry.';
    score.innerText = parseInt(score.innerText) + 1;
    question.appendChild(newButton);
    newButton.innerText = 'NEXT QUESTION';
    newButton.classList = 'next';
    newButton.addEventListener('click', questionTwo);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is Tesla!';
    question.appendChild(newButton);
    newButton.innerText = 'NEXT QUESTION';
    newButton.classList = 'next';
    newButton.addEventListener('click', questionTwo);
  }
}

function questionTwo(evt) {
  evt.preventDefault();
  question.innerText = 'Question 2: Which car company is built in Italy?';
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsTwo[i];
    listItem[i].classList = carsTwo[i];
    answersList.addEventListener('click', answerTwo);
  }
}

function answerTwo(evt) {
  if (evt.target.className === 'Ferrari') {
    question.innerText = 'Correct! Ferrari are built and designed in Italy!';
    score.innerText = parseInt(score.innerText) + 1;
    question.appendChild(newButton);
    newButton.innerText = 'NEXT QUESTION';
    newButton.classList = 'next';
    newButton.addEventListener('click', questionThree);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is Ferrari!';
    question.appendChild(newButton);
    newButton.innerText = 'NEXT QUESTION';
    newButton.classList = 'next';
    newButton.addEventListener('click', questionThree);
  }
}
