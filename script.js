"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
  let question = prompt("Угадай число от 1 до 100"),
    number = 10, //Загаданное число
    conter = 1,
    answer,
    win;
  function getQuestion() {
    if (question === null) {
      answer = alert("Игра окончена");
    } else if (isNumber(question)) {
      if (conter < 10) {
        if (question > 100) {
          question = prompt(
            `Загаданное число меньше, осталось попыток ${10 - conter}`
          );
          conter++;
          getQuestion();
        } else if (question < 1) {
          question = prompt(
            `Загаданное число больше, осталось попыток ${10 - conter}`
          );
          conter++;
          getQuestion();
        } else if (question == number) {
          win = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          if (win) {
            game();
          } else {
            answer = alert("Пока!");
          }
        } else {
          answer = alert("Вы не угадали");
        }
      } else {
        win = confirm("Попытки закончились, хотите сыграть еще?");
        if (win) {
          game();
        } else {
          answer = alert("Пока!");
        }
      }
    } else {
      question = prompt("Введи число!");
      getQuestion();
    }
  }
  getQuestion();
}

game();
