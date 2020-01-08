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

// const answersSix = ['engine', 'transmission', 'differential', 'throttle'];
// const answersSeven = ['Italy', 'Spain', 'Germany', 'France'];
// const answersEight = ['300 Million', '1 Billion', '500 Million', '600 Million'];
// const answersNine = ['1948', '1932', '1965', '1954'];
// const answersTen = ['8', '10', '12', '16'];

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

// function questionSix() {
//   question.innerText = `Question 6: Your car's horsepower comes from where?`;
//   for (i = 0; i < 4; i++) {
//     listItem[i].innerText = answersSix[i];
//     listItem[i].classList = answersSix[i];
//     answersList.addEventListener('click', answerSix);
//   }
// }

// function answerSix(evt) {
//   if (evt.target.className === 'engine') {
//     question.innerText = `Correct! The engine makes all that horsepower!`;
//     score.innerText = parseInt(score.innerText) + 1;
//     nextButton();
//     newButton.addEventListener('click', questionSeven);
//   } else {
//     question.innerText =
//       'Incorrect, the correct answer we are looking for is engine!';
//     nextButton();
//     newButton.addEventListener('click', questionSeven);
//   }
// }

// function questionSeven() {
//   question.innerText = `Question 7: The Nurburgring is a famous racetrack in what country?`;
//   for (i = 0; i < 4; i++) {
//     listItem[i].innerText = answersSeven[i];
//     listItem[i].classList = answersSeven[i];
//     answersList.addEventListener('click', answerSeven);
//   }
// }

// function answerSeven(evt) {
//   if (evt.target.className === 'Germany') {
//     question.innerText = `Correct! The Nurburgring is in Germany!`;
//     score.innerText = parseInt(score.innerText) + 1;
//     nextButton();
//     newButton.addEventListener('click', questionEight);
//   } else {
//     question.innerText =
//       'Incorrect, the correct answer we are looking for is Germany!';
//     nextButton();
//     newButton.addEventListener('click', questionEight);
//   }
// }

// function questionEight() {
//   question.innerText = `Question 8: How many answers are estimated to be on Earth?`;
//   for (i = 0; i < 4; i++) {
//     listItem[i].innerText = answersEight[i];
//     listItem[i].classList = answersEight[i];
//     answersList.addEventListener('click', answerEight);
//   }
// }

// function answerEight(evt) {
//   if (evt.target.className === '1 Billion') {
//     question.innerText = `Correct! Over 1 Billion answers!`;
//     score.innerText = parseInt(score.innerText) + 1;
//     nextButton();
//     newButton.addEventListener('click', questionNine);
//   } else {
//     question.innerText =
//       'Incorrect, the correct answer we are looking for is 1 Billion!';
//     nextButton();
//     newButton.addEventListener('click', questionNine);
//   }
// }

// function questionNine() {
//   question.innerText = `Question 9: In what year was NASCAR founded?`;
//   for (i = 0; i < 4; i++) {
//     listItem[i].innerText = answersNine[i];
//     listItem[i].classList = answersNine[i];
//     answersList.addEventListener('click', answerNine);
//   }
// }

// function answerNine(evt) {
//   if (evt.target.className === '1948') {
//     question.innerText = `Correct! NASCAR was founded in 1948!`;
//     score.innerText = parseInt(score.innerText) + 1;
//     nextButton();
//     newButton.addEventListener('click', questionTen);
//   } else {
//     question.innerText =
//       'Incorrect, the correct answer we are looking for is 1948!';
//     nextButton();
//     newButton.addEventListener('click', questionTen);
//   }
// }

// function questionTen() {
//   question.innerText = `Question 10: The supercar Bugatti Veyron has how many engine cylinders?`;
//   for (i = 0; i < 4; i++) {
//     listItem[i].innerText = answersTen[i];
//     listItem[i].classList = answersTen[i];
//     answersList.addEventListener('click', answerTen);
//   }
// }

// function answerTen(evt) {
//   if (evt.target.className === '16') {
//     question.innerText = `Correct! The Bugatti Veyron has a 16 cylinder engine! Wow!`;
//     score.innerText = parseInt(score.innerText) + 1;
//     setTimeout(finalScore, 3000);
//   } else {
//     question.innerText =
//       'Incorrect, the correct answer we are looking for is 16!';
//     setTimeout(finalScore, 3000);
//   }
// }
