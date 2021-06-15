const { test, expect } = require('@jest/globals');
const currencyTips = require('./currencyTips');

test('Retorna uma curiosidade sobre moedas', (done) => {
  const callback = (data) => {
    expect(data).toBe(' "Dirham dos Emirados Árabes Unidos" é um nome bem grande de moeda! ');
    done(); 
  };
  currencyTips(callback);
});
