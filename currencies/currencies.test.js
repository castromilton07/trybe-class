  const { expect, beforeEach, describe } = require('@jest/globals');
  // let { filterByValue, currencies } = require('./currencies')

  let currencies = [
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

  describe('A função filterByValue', () => {

    beforeEach(() => {
      currencies = [
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
    });
    
    test('Moedas acima de 50', () => {
      expect.assertions(1);
      currencies.push({
        name: 'Dólar Canadense',
        value: 1001,
      });
    
      return filterByValue(50)
        .then((data) => {
          expect(data).toEqual(['Dram armênio', 'Dólar Canadense']);
      });
    });
    
    test('Moedas acima de 50', () => {
      expect.assertions(1);
      return filterByValue(50)
        .then((data) => {
          expect(data).toEqual(['Dram armênio']);
      });
    });
    
    test('Moedas acima de 1000', () => {
      expect.assertions(1);
      return filterByValue(1000)
        .catch((data) => {
          expect(data).toBe('Nenhuma moeda encontrada.');
      });
    });

    test('Moedas acima de 50 - Async/Await', async () => {
      expect.assertions(1);
      const data = await filterByValue(50);
      expect(data).toEqual(['Dram armênio']);
    });

    test('Moedas acima de 1000 - Async/Await', async () => {
      expect.assertions(1);
      try {
        await filterByValue(1000);
      } catch(error) {
        expect(error).toBe('Nenhuma moeda encontrada.');
      }      
    });

  });