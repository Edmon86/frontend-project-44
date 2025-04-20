#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Функция для получения случайного числа
const getRandomNumber = () => Math.floor(Math.random() * 100);

// Функция для проверки, чётное ли число
const isEven = (num) => num % 2 === 0;

// Функция для игры
const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  
  while (correctAnswers < 3) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

// Запуск игры
playGame();
