const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const rules =
  'Answer "yes" if the number is even, otherwise answer "no".';

export default getQuestionAndAnswer;
