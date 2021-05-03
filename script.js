window.onload = function() {
    let button = document.getElementById('start-race-btn');
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');

    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';

    // 1. Qual é o tipo do evento?
    // 2. O que será feito quando este evendo acontecer?
    // button.addEventListener(1, 2);

    button.addEventListener('click', function () {
        
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px';
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Carro VERMELHO ganhou!!');
            resetCars(car1, car2);
        }

        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Carro VERDE ganhou!!');
            resetCars(car1, car2);

        }
    });
}

function resetCars(car1, car2) {
    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';
}
