const currencies = [
  {
    name: 'Dirham dos Emirados Árabes Unidos',
    value: 0.725915,
  },
  {
    name: 'Afegane afegão',
    value: 15.604924,
  },
  {
    name: 'Lek albanês',
    value: 20.056733,
  },
  {
    name: 'Dram armênio',
    value: 102.772669,
  },
  {
    name: 'Florim das Antilhas Holandesas',
    value: 0.354769,
  },
];

const filterByValue = (minimumValue) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const currenciesFiltered = currencies
      .filter((currency) => currency.value >= minimumValue)
      .map((currency) => currency.name);
      if(currenciesFiltered.length > 0) {
        resolve(currenciesFiltered);
      }

      reject('Nenhuma moeda encontrada.');
  }, 1500);
});

module.exports = filterByValue;
