const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const startingLine = document.querySelector('.starting-line');
const question = document.querySelector('.question');
const answersList = document.querySelector('.answer-list');
const cars = ['Audi', 'BMW', 'Tesla', 'Volkswagen'];
const score = document.querySelector('.current-score');
let newButton = document.createElement('button');
const carsTwo = ['Lexus', 'Ferrari', 'Jaguar', 'Kia'];
const carsThree = ['GMC', 'Chevrolet', 'Ford', 'Dodge'];
let listItem = document.getElementsByTagName('li');

reset.addEventListener('click', reloadPage);
start.addEventListener('click', questionOne);

function reloadPage() {
  location.reload();
}

function nextButton() {
  question.appendChild(newButton);
  newButton.innerText = 'NEXT QUESTION';
  newButton.classList = 'next';
}

function questionOne(evt) {
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
    nextButton();
    newButton.addEventListener('click', questionTwo);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is Tesla!';
    nextButton();
    newButton.addEventListener('click', questionTwo);
  }
}

function questionTwo(evt) {
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
    nextButton();
    newButton.addEventListener('click', questionThree);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is Ferrari!';
    nextButton();
    newButton.addEventListener('click', questionThree);
  }
}

answersList.addEventListener('mouseover', hover);

function hover(evt) {
  if (evt.target.localName === 'li') {
    evt.target.style.color = '#D93A2B';
    setTimeout(function() {
      evt.target.style.color = '';
    }, 500);
  }
  false;
}

function questionThree(evt) {
  question.innerText = `Question 3: Which car company's logo is commonly referred to as "the bowtie"?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsThree[i];
    listItem[i].classList = carsThree[i];
    answersList.addEventListener('click', answerThree);
  }
}

function answerThree(evt) {
  if (evt.target.className === 'Chevrolet') {
    question.innerText = `Correct! Chevrolet's logo resembles a bowtie!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionFour);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is Chevrolet!';
    nextButton();
    newButton.addEventListener('click', questionFour);
  }
}
