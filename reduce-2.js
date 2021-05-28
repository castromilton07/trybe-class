const assert = require('assert');

const epic = ['O', 'inverno', 'está', 'chegando'];

const epicPhrase = epic.reduce((accumulator, currentValue) => {return `${accumulator} ${currentValue}`} );

// Testes
const expectedValue = 'O inverno está chegando';
assert.strictEqual(epicPhrase, expectedValue);
