// Média
let num1 = 10;
let num2 = 20;
let num3 = 30;

let media = (num1 + num2 + num3) / 3;

//console.log(media);

function mediaCalc(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};

//console.log(mediaCalc(10, 20, 400));

/* ------------------------------------------- */
// Nome Completo

let nome = 'Milton';
let sobrenome = 'Castro';
let nomeCompleto = nome + ' ' + sobrenome;

//console.log(nomeCompleto);

function fullName(nome, sobrenome) {
    return(nome + ' ' + sobrenome);
}

//console.log(fullName('Milton', 'Castro'));

/* ------------------------------------------- */
// Gerar Array com 100 caracteres Iguais

function gerarArray(caractere) {
    let array = [];
    for(let index = 0; index < 100; index++) {
        array.push(caractere);
    }
    return array;
}

//console.log(gerarArray('*'));

/* ------------------------------------------- */
// Mega-Sena <3

/* let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60); */

let firstNumber = randomNumber(90);
let secondNumber = randomNumber(90);
let thirdumber = randomNumber(90);
let fourthNumber = randomNumber(90);
let fifthNumber = randomNumber(90);
let sixthNumber = randomNumber(90);

function randomNumber(maxValue) {
    return Math.ceil(Math.random() * maxValue);
}

function generateNumbers() {
    let numbers = [];
    for(let index = 0; index < 6; index++) {
        numbers.push(randomNumber(60));
    }
    return numbers;
}

console.log([firstNumber, secondNumber, thirdumber, fourthNumber, fifthNumber, sixthNumber]);
console.log(generateNumbers());