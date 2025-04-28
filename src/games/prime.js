import getRandomNumber from '../random.js';

// Проверка на простое число
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeData = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default getPrimeData;
