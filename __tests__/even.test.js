import getQuestionAndAnswer from '../src/games/even.js'

describe('getQuestionAndAnswer', () => {
  test('возвращает корректный ответ для чётного числа', () => {
    const originalMathRandom = Math.random
    Math.random = () => 0.4 // 0.4 * 100 = 40 (чётное)

    const [question, correctAnswer] = getQuestionAndAnswer()

    expect(question).toBe('40')
    expect(correctAnswer).toBe('yes')

    Math.random = originalMathRandom
  })

  test('возвращает корректный ответ для нечётного числа', () => {
    const originalMathRandom = Math.random
    Math.random = () => 0.37 // 0.37 * 100 = 37 (нечётное)

    const [question, correctAnswer] = getQuestionAndAnswer()

    expect(question).toBe('37')
    expect(correctAnswer).toBe('no')

    Math.random = originalMathRandom
  })
})
