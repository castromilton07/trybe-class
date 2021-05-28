const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os numeros do array com reduce
const sumWithReduce = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue; } );

console.log(`Valor com reduce: ${sumWithReduce}`);

// Somando os numeros do array com for
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) sumWithFor += numbers[index];

console.log(`Valor com for: ${sumWithFor}`);

// Testes
const expectedValue = 59;
assert.strictEqual(sumWithFor, expectedValue);
assert.strictEqual(sumWithReduce, expectedValue);

const sumEvenNumbers = numbers.reduce((previousValue, currentValue) => {
  // console.log(previousValue, currentValue);
  if (currentValue % 2 === 0) return previousValue + currentValue;
  return previousValue;
}, 0);

console.log(sumEvenNumbers);

const sumEvenNumbersWithFilter = numbers.filter((number) => number %2 === 0).reduce((previousValue, currentValue) => { return previousValue + currentValue } );

console.log(sumEvenNumbersWithFilter);
