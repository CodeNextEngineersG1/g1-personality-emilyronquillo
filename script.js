/* remove this comment and place your JavaScript here */
let person = null;
let friend = null;
let sexuality = null;
let pageTitle = document.querySelector('#paper-title'),
    pageTitleText = document.getElementById('paperTitle').innerHTML,
    tryAgain = document.querySelector('#try-again'),
    quizWrapper = document.querySelector('#quiz-wrapper'),
    result = document.querySelector('#result'),
    formSubmit = document.querySelector('#form-submit');

tryAgain.addEventLister('click',resetQuiz);
formSubmit.addEventLister('click', processResults);

function processResults() {

}
function getPersonality() {

}
function resetQuiz() {

}

function getPersonality(){
  let score = 0;
  if(friend.id === "geek"){
    score +=1;
  }
  else if (friend.id === "gamer"){
    score +=2;
  }
  else if (friend.id === "cool"){
    score =+3;
  }
  if (person.id === "bad-priorities"){
    score +=1;
  }
  else if (person.id === "nervous"){
    score +=2;
  }
  else if (person.id === "sneky"){
    score +=3;
  }
  if (sexuality.id === "straight"){
    score +=1;
  }
  else if (sexuality.id === "ace"){
    score +=2;
  }
  else if (sexuality.id === "bi"){
    score +=3;
  }
}

if (score == 0 || score == 1) {
  return 0; //christine
}
if (score == 2 || score == 3) {
  return 1; //jeremy
}
if (score == 4 || score == 5 || score == 6 || score == 7) {
  return 2; //micheal
}
if (score == 8 || score == 9) {
  return 3; //rich
}
