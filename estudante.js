let estudante = {
    nome: 'Joana',
    idade: 43,
    hardSkills: 3,
    softSkills: 6,
    carreiraSkills: 5,
};

// Para adicionar uma chave e valor novo ao objeto, ambas as maneiras servem
estudante.cidade = 'São Paulo';
estudante['comidaFavorita'] = 'Doritos';

// Altera o valor (reatribuição) devido a pré-existencia da chave
estudante['nome'] = 'João';

estudante.apelidos = ['apelido1', 'apelido2', 'apelido3'];
estudante.endereco = {
    logradouro: 'Rua Dalvo Trombeta',
    numero: 357,
};

//delete estudante.nome;

for(let key in estudante) {
    console.log(estudante[key]);
    //console.log(key, estudante[key]);
}

console.log(estudante);
//console.table(estudante);

//console.log(estudante.endereco.logradouro);
//console.log(estudante.apelidos[0]);