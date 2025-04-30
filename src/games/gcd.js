import getRandomNumber from '../random.js';

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const getGcdData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return [question, answer];
};

export default getGcdData;
