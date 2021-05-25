// Crie uma função que:

// 1. Recebe um número
// 2. Recebe uma funcção

// Execute a função a quantidade de vezes dada pelo parâmetro número

const repeat = (number, callback) => {
  for (let count = 0; count < number; count += 1) {
    callback();
  }
};

const xablau = () => console.log('HoFs são Maravilhosas!')

repeat(5, xablau);

const trybeProject = (score, callback) => {
  if (score >= 80) {
    callback();
  } else {
    console.log('Ainda faltam alguns requisitos para sua aprovação.');
  }
};

const scoreProject = () => {
  console.log('Parabéns, você obteve apropação! :D');
  // registerScore();
};

trybeProject(81, scoreProject);