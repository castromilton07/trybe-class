const pizzas= [
    { sabor: 'Frango com Catupiry', pedidos: 99, status: '' },
    { sabor: 'Marguerita', pedidos: 75, status: '' },
    { sabor: 'Frango com Catupiry', pedidos: 70, status: '' },
    { sabor: 'Frango com Catupiry', pedidos: 80, status: '' },
];

const verificaPizza = 

pizzas.forEach((pizza) => {
    if (pizza.pedidos >= 75) pizza.status = 'TOP';
    else pizza.status = 'Não é top';
});

// console.log(pizzas);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiply = () => {
    const arr = [];

    /* for (let index = 0; index < numbers.length; index += 1) {
        arr.push(numbers[index] * 3);
    } */

    numbers.forEach((number) => arr.push(number * 3));

    return arr;
};

// console.log(multiply(numbers));
