const { test, expect } = require('@jest/globals');

function myRandom() {
  return Math.random();
}

function sumRandom(a, b) {
  const random = myRandom();
  return a + b + random;
}

function randomDice(sides) {
  const random = myRandom();
  return Math.ceil(random * sides);
}

test('Testando a randomDice', () => {
  myRandom = jest.fn()
    .mockReturnValueOnce(0.6)
    .mockReturnValueOnce(0.1)
    .mockReturnValueOnce(0.3)
    .mockReturnValueOnce(0.7)
    .mockReturnValueOnce(0);

    expect(randomDice(10)).toBe(6);
    expect(randomDice(10)).toBe(1);
    expect(randomDice(10)).toBe(3);
    expect(randomDice(10)).toBe(7);
    expect(randomDice(10)).toBe(0);

    expect(myRandom).toHaveBeenCalledTimes(5);
});
