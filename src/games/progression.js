import getRandomNumber from '../random.js';

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, idx) => start + idx * step);
};

const getProgressionData = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default getProgressionData;


