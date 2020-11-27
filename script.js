'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function game(){
  let question = prompt('Угадай число от 1 до 100');
  let number = 10; //Загаданное число
  let answer;
  function getQuestion() { 
    if(question === null){
      answer = alert('Игра окончена');
    }else if(isNumber(question)){
      if(question > 100){
        question = prompt('Загаданное число меньше');
        getQuestion();
      }else if(question < 1){
        question = prompt('Загаданное число больше');
        getQuestion();
      }else if(question == number){
        answer = alert('Поздравляю, Вы угадали!!!');
      }else {
        answer = alert('Вы не угадали');
      }
    }else{
      question = prompt('Введи число!');
      getQuestion();
    }
   }
   getQuestion();
}
game();
