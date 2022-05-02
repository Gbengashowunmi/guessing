const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const hint = document.querySelector('.hint');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let randomNumber 
again.addEventListener('click', function(){
    randomNumber = Math.ceil(Math.random() * 20);
    
    guess.innerHTML = randomNumber;
})


    check.addEventListener('click', function(){
        const val = document.getElementById('number').value; 
      if (randomNumber > +val) {
         hint.innerHTML = "your guess is too low"
      }
      else if (randomNumber < +val) {
        hint.innerHTML = 'your guess is too high'
      }

      else if (randomNumber === +val) {
        hint.innerHTML = "fantastic, you'll make a great gambler"
      }
        
    })



    

