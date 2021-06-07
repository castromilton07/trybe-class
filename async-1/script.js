// console.log('Olá pessoal turma 12');

/* setTimeout(() => {
  console.log('Olá mundo!')
}, 3000); */

/* const setTimeoutFake = (sleepDuration) => {
  const futureTime = new Date().getTime() + sleepDuration;
  let now = new Date().getTime();

  while(now < futureTime) {
    now = new Date().getTime();
  }
}; */

const lanche1 = (callback) => {
  // setTimeoutFake(3000);
  setTimeout(() => {
    console.log('1 - BigMac');
    callback();
  }, Math.random() * 10000);
};

const lanche2 = () => {
  // setTimeoutFake(3000);
  setTimeout(() => console.log('2 - BigTasty'), Math.random() * 10000);
};

console.log('PEDIR LANCHES');

lanche1(lanche2);
// lanche2();

console.log('ROLE NO SHOPPING');
