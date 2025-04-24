
import getRandomNumber from '../random.js';
import runGame from '../index.js';

const operations = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 10);
  const operator = operations[getRandomNumber(0, operations.length - 1)];

  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
  }

  return [`${num1} ${operator} ${num2}`, String(answer)];
};

export default () => runGame('What is the result of the expression?', getQuestionAndAnswer);
