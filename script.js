const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const startingLine = document.querySelector('.starting-line');
const question = document.querySelector('.question');
const answersList = document.querySelector('.answer-list');
const score = document.querySelector('.current-score');
let listItem = document.getElementsByTagName('li');
let newButton = document.createElement('button');

const cars = ['Audi', 'BMW', 'Tesla', 'Volkswagen'];
const carsTwo = ['Lexus', 'Ferrari', 'Jaguar', 'Kia'];
const carsThree = ['GMC', 'Chevrolet', 'Ford', 'Dodge'];
const carsFour = ['Audi', 'Volkswagen', 'Porsche', 'Lamborghini'];
const carsFive = ['1912', '1924', '1900', '1908'];
const carsSix = ['engine', 'transmission', 'differential', 'throttle'];
const carsSeven = ['Italy', 'Spain', 'Germany', 'France'];
const carsEight = ['300 Million', '1 Billion', '500 Million', '600 Million'];
const carsNine = ['1948', '1932', '1965', '1954'];
const carsTen = ['8', '10', '12', '16'];

reset.addEventListener('click', reloadPage);
start.addEventListener('click', questionOne);
answersList.addEventListener('mouseover', hover);

function reloadPage() {
  location.reload();
}

function hover(evt) {
  if (evt.target.localName === 'li') {
    evt.target.style.color = '#D93A2B';
    setTimeout(function() {
      evt.target.style.color = '';
    }, 750);
  }
  false;
}

function nextButton() {
  question.appendChild(newButton);
  newButton.innerText = 'NEXT QUESTION';
  newButton.classList = 'next';
}

function questionOne() {
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
      'Correct! Tesla is leading in the electric vehicle industry.';
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

function questionTwo() {
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

function questionThree() {
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

function questionFour() {
  question.innerText = `Question 4: Which car company owns the other three?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsFour[i];
    listItem[i].classList = carsFour[i];
    answersList.addEventListener('click', answerFour);
  }
}

function answerFour(evt) {
  if (evt.target.className === 'Volkswagen') {
    question.innerText = `Correct! Volkswagen owns many car manufacturers!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionFive);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is VW!';
    nextButton();
    newButton.addEventListener('click', questionFive);
  }
}

function questionFive() {
  question.innerText = `Question 5: In what year did Henry Ford create the iconic Model T?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsFive[i];
    listItem[i].classList = carsFive[i];
    answersList.addEventListener('click', answerFive);
  }
}

function answerFive(evt) {
  if (evt.target.className === '1908') {
    question.innerText = `Correct! 1908 is the year of the Model T!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionSix);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is 1908!';
    nextButton();
    newButton.addEventListener('click', questionSix);
  }
}

function questionSix() {
  question.innerText = `Question 6: Your car's horsepower comes from where?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsSix[i];
    listItem[i].classList = carsSix[i];
    answersList.addEventListener('click', answerSix);
  }
}

function answerSix(evt) {
  if (evt.target.className === 'engine') {
    question.innerText = `Correct! The engine makes all that horsepower!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionSeven);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is engine!';
    nextButton();
    newButton.addEventListener('click', questionSeven);
  }
}

function questionSeven() {
  question.innerText = `Question 7: The Nurburgring is a famous racetrack in what country?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsSeven[i];
    listItem[i].classList = carsSeven[i];
    answersList.addEventListener('click', answerSeven);
  }
}

function answerSeven(evt) {
  if (evt.target.className === 'Germany') {
    question.innerText = `Correct! The Nurburgring is in Germany!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionEight);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is Germany!';
    nextButton();
    newButton.addEventListener('click', questionEight);
  }
}

function questionEight() {
  question.innerText = `Question 8: How many cars are estimated to be on Earth?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsEight[i];
    listItem[i].classList = carsEight[i];
    answersList.addEventListener('click', answerEight);
  }
}

function answerEight(evt) {
  if (evt.target.className === '1 Billion') {
    question.innerText = `Correct! Over 1 Billion Cars!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionNine);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is 1 Billion!';
    nextButton();
    newButton.addEventListener('click', questionNine);
  }
}

function questionNine() {
  question.innerText = `Question 9: In what year was NASCAR founded?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsNine[i];
    listItem[i].classList = carsNine[i];
    answersList.addEventListener('click', answerNine);
  }
}

function answerNine(evt) {
  if (evt.target.className === '1948') {
    question.innerText = `Correct! NASCAR was founded in 1948!`;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    newButton.addEventListener('click', questionTen);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is 1948!';
    nextButton();
    newButton.addEventListener('click', questionTen);
  }
}

function questionTen() {
  question.innerText = `Question 10: The supercar Bugatti Veyron has how many engine cylinders?`;
  for (i = 0; i < 4; i++) {
    listItem[i].innerText = carsTen[i];
    listItem[i].classList = carsTen[i];
    answersList.addEventListener('click', answerTen);
  }
}

function answerTen(evt) {
  if (evt.target.className === '16') {
    question.innerText = `Correct! The Bugatti Veyron has a 16 cylinder engine! Wow!`;
    score.innerText = parseInt(score.innerText) + 1;
    setTimeout(finalScore, 3000);
  } else {
    question.innerText =
      'Incorrect, the correct answer we are looking for is 16!';
    setTimeout(finalScore, 3000);
  }
}

function finalScore() {
  answersList.parentNode.removeChild(answersList);
  question.innerText = `Congratulations, you finished the game with a score of ${score.innerText}/10!`;
}
