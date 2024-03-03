function resultOfAction() {
    const num1 = document.querySelector('.input__num1').value;
    const num2 = document.querySelector('.input__num2').value;
    const result = document.querySelector('.result__number');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = 'Введите число'
        return;
    }

    document.querySelector('.button-plus').addEventListener('click', function () {
        result.innerText = Number(num1) + Number(num2);
    });
    document.querySelector('.button-minus').addEventListener('click', function () {
        result.innerText = Number(num1) - Number(num2);
    });
    document.querySelector('.button-multiply').addEventListener('click', function () {
        result.innerText = Number(num1) * Number(num2);
    });
    document.querySelector('.button-division').addEventListener('click', function () {
        result.innerText = Number(num1) / Number(num2);
    })
}