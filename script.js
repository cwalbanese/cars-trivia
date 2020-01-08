const questions = [
  {
    question:
      'Question 1: Which car company is leading in electric technology?',
    answers: ['Audi', 'BMW', 'Tesla', 'Volkswagen'],
    correctAnswer: 'Tesla',
    correctResponse:
      'Correct! Tesla is leading in the electric vehicle industry.',
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is Tesla!'
  },
  {
    question: 'Question 2: Which car company is built in Italy?',
    answers: ['Lexus', 'Ferrari', 'Jaguar', 'Kia'],
    correctAnswer: 'Ferrari',
    correctResponse: 'Correct! Ferrari are built and designed in Italy!',
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is Ferrari!'
  },
  {
    question: `Question 3: Which car company's logo is commonly referred to as "the bowtie"?`,
    answers: ['GMC', 'Chevrolet', 'Ford', 'Dodge'],
    correctAnswer: 'Chevrolet',
    correctResponse: `Correct! Chevrolet's logo resembles a bowtie!`,
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is Chevrolet!'
  },
  {
    question: `Question 4: Which car company owns the other three?`,
    answers: ['Audi', 'Volkswagen', 'Porsche', 'Lamborghini'],
    correctAnswer: 'Volkswagen',
    correctResponse: `Correct! Volkswagen owns many car manufacturers!`,
    incorrectResponse: 'Incorrect, the correct answer we are looking for is VW!'
  },
  {
    question: `Question 5: In what year did Henry Ford create the iconic Model T?`,
    answers: ['1912', '1924', '1900', '1908'],
    correctAnswer: '1908',
    correctResponse: `Correct! 1908 is the year of the Model T!`,
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is 1908!'
  },
  {
    question: `Question 6: Your car's horsepower comes from where?`,
    answers: ['engine', 'transmission', 'differential', 'throttle'],
    correctAnswer: 'engine',
    correctResponse: `Correct! The engine makes all that horsepower!`,
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is engine!'
  },
  {
    question: `Question 7: The Nurburgring is a famous racetrack in what country?`,
    answers: ['Italy', 'Spain', 'Germany', 'France'],
    correctAnswer: 'Germany',
    correctResponse: `Correct! The Nurburgring is in Germany!`,
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is Germany!'
  },
  {
    question: `Question 8: How many cars are estimated to be on Earth?`,
    answers: ['300 Million', '1 Billion', '500 Million', '600 Million'],
    correctAnswer: '1 Billion',
    correctResponse: `Correct! Over 1 Billion cars!`,
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is 1 Billion!'
  },
  {
    question: `Question 9: In what year was NASCAR founded?`,
    answers: ['1948', '1932', '1965', '1954'],
    correctAnswer: '1948',
    correctResponse: `Correct! NASCAR was founded in 1948!`,
    incorrectResponse:
      'Incorrect, the correct answer we are looking for is 1948!'
  },
  {
    question: `Question 10: The supercar Bugatti Veyron has how many engine cylinders?`,
    answers: ['8', '10', '12', '16'],
    correctAnswer: '16',
    correctResponse: `Correct! The Bugatti Veyron has a 16 cylinder engine! Wow!`,
    incorrectResponse: 'Incorrect, the correct answer we are looking for is 16!'
  }
];

let question = document.querySelector('.question');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const startingLine = document.querySelector('.starting-line');
const answersList = document.querySelector('.answer-list');
const score = document.querySelector('.current-score');
let listItem = document.getElementsByTagName('li');
let newButton = document.createElement('button');
let currentQuestion = 0;

answersList.addEventListener('click', answerList);
reset.addEventListener('click', reloadPage);
start.addEventListener('click', questionList);
answersList.addEventListener('mouseover', hover);
newButton.addEventListener('click', questionList);

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
function questionList() {
  if (currentQuestion === 10) {
    finalScore();
    return;
  }
  startingLine.style.visibility = 'hidden';
  question.innerText = questions[currentQuestion].question;
  answersList.innerHTML = '';
  for (i = 0; i < 4; i++) {
    let answer = document.createElement('li');
    answersList.appendChild(answer);
    answer.innerText = questions[currentQuestion].answers[i];
    answer.classList = questions[currentQuestion].answers[i];
    answersList.addEventListener('click', answerList);
  }
}

function answerList(evt) {
  if (evt.target.className === questions[currentQuestion].correctAnswer) {
    question.innerText = questions[currentQuestion].correctResponse;
    score.innerText = parseInt(score.innerText) + 1;
    nextButton();
    answersList.removeEventListener('click', answerList);
  }

  if (evt.target.className !== questions[currentQuestion].correctAnswer) {
    question.innerText = questions[currentQuestion].incorrectResponse;
    nextButton();
    answersList.removeEventListener('click', answerList);
  }
  currentQuestion++;
}

function nextButton() {
  question.appendChild(newButton);
  newButton.innerText = 'NEXT QUESTION';
  newButton.classList = 'next';
}

function finalScore() {
  answersList.parentNode.removeChild(answersList);
  question.innerText = `Congratulations, you finished the game with a score of ${score.innerText}/10!`;
}
