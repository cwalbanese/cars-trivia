const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const startingLine = document.querySelector('.starting-line');
const question = document.querySelector('.question');
const answersList = document.querySelector('.answer-list');
const cars = ['Audi', 'BMW', 'Tesla', 'Volkswagen'];

reset.addEventListener('click', reloadPage);
start.addEventListener('click', questionOne);

function reloadPage() {
  location.reload();
}

function questionOne(evt) {
  evt.preventDefault();
  startingLine.style.opacity = 0;
  question.innerText =
    'Question 1: Which car company is leading in electric technology?';
  for (i = 0; i < 4; i++) {
    let answer = document.createElement('li');
    answersList.appendChild(answer);
    answer.innerText = cars[i];
    answer.classList = cars[i];
  }
}
