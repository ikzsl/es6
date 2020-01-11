const greetind = 'Привет. Как тебя зовут?';
function random(number) {
  return Math.ceil(Math.random() * number);
}
let name = prompt(greetind);


while (name == '' || name == null) {
  name = prompt(greetind);
}

let number = random(100);
let guess = prompt(`${name} \nУгадай число`);
let numberOfGuesses = 1;
while (guess != number) {
  numberOfGuesses += 1;
  if (guess > number) {
    guess = prompt('Много, попробуй еще раз');
  } else if (guess < number) {
    guess = prompt('Мало, попробуй еще раз');

  }
}

alert(`Ты угадал! Это число \n ${number} \n Ты угадал за ${numberOfGuesses} попыток`)