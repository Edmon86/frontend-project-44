import isEven from '../src/games/even.js'

test('Четное число', () => {
  expect(isEven(4)).toBe(true)
})

test('Нечетное число', () => {
  expect(isEven(5)).toBe(false)
})
