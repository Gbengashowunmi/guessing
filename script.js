const body = document.querySelector('.body');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const hint = document.querySelector('.hint');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let randomNumber;
let scores = 20;
let highscores = 20;

window.addEventListener('DOMContentLoaded', function(){
  randomNumber = Math.ceil(Math.random() * 20);
    score.innerHTML = 'Score:' + scores;
    console.log(randomNumber);
    guess.classList.remove('correct');
})
again.addEventListener('click', function(){
    location.reload('default');
    randomNumber = Math.ceil(Math.random() * 20);
    score.innerHTML = 'Score:' + 20;
    console.log(randomNumber);
})
    check.addEventListener('click', function(){
        const val = document.getElementById('number').value; 
       if (+val > 20) {
          score.innerHTML = 'score: ' + scores;
          hint.innerHTML = "Range exceeded!! kindly enter a number between 1 and 20"; 
        }
      else if (randomNumber > +val) {
         hint.innerHTML = "your guess is too low";
         scores -=1
         score.innerHTML = 'score: ' + scores;
         guess.classList.remove('correct')
      }
      else if (randomNumber === +val) {
        hint.innerHTML = "fantastic!!! You'll make a great gambler"; 
         highscore.innerHTML = 'High' + score.innerHTML;
         guess.innerHTML = randomNumber;
         guess.classList.add('correct');
         body.style.background = 'rgb(52, 186, 230)';
      }
      else if (randomNumber < +val) {
        hint.innerHTML = 'your guess is too high';
        scores -=1
         score.innerHTML = 'score: ' + scores;
         guess.classList.remove('correct')
      }
    })
