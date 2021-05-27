const numbers = [1, 2, 3, 4];

const map = (array, callback) => {
    let newArray = [];
    for (let index = 0 ; index < array.length; index += 1) {
        const mappedItem = callback(array[index]);
        newArray.push(mappedItem);
    }
    return newArray;
};

// console.log(map(numbers, (number) => number * 2));

const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' },
];

const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CO', name: 'Centroeste' },
  { short: 'SE', name: 'Suldeste' },
  { short: 'S', name: 'Sul' },
];

const cities = [
  { state: 'AM', name:'Manaus', region: 'N' },
  { state: 'PA', name:'Belém', region: 'N' },
  { state: 'TO', name:'Porto Nacional', region: 'N' },
  { state: 'MG', name:'Lavras', region: 'SE' },
  { state: 'BA', name:'Feira de Santana', region: 'NE' },
  { state: 'PR', name:'Cascavel', region: 'S' },
  { state: 'SP', name:'Presidente Prudente', region: 'SE' },
  { state: 'RN', name:'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara',  region:'NE' },
];

const citiesAndState = cities.map((city) => `${city.name} - ${city.state}` );

// console.log(citiesAndState);

const citiesAndStateName = cities.map((city) => {
    const findState = states.find((state) => state.short === city.state);
    return `A cidade de ${city.name} fica no estado de ${findState.name}`;
});

// console.log(citiesAndStateName);

const arrayCities = cities.map((city => {
    const findState = states.find((state) => state.short === city.state);
    const findRegion = regions.find((region) => region.short === city.region);
    return {
        state: findState.name,
        city: city.name,
        region: findRegion.name,
    };
}));

console.log(arrayCities);