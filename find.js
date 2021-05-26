const pizzas= [
    { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
    { sabor: 'Marguerita', pedidos: 75, status: '' },
    { sabor: 'Gratinada', pedidos: 68, status: '' },
    { sabor: '4 Queijos', pedidos: 80, status: '' },
];

const flavorFind = pizzas.find((pizza) => pizza.pedidos > 60 && pizza.pedidos < 80);

console.log(flavorFind);
