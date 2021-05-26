const pizzas= [
    { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
    { sabor: 'Marguerita', pedidos: 75, status: '' },
    { sabor: 'Gratinada', pedidos: 68, status: '' },
    { sabor: '4 Queijos', pedidos: 80, status: '' },
];

const flavorSome = pizzas.some((pizza) => pizza.sabor === '4 Queijos');
const orderSome = pizzas.some((pizza) => pizza.pedidos < 60);

 console.log(flavorSome);
 console.log(orderSome);
