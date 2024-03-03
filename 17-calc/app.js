// function resultOfAction() {
//     const num1 = document.querySelector('.input__num1').value;
//     const num2 = document.querySelector('.input__num2').value;
//     const result = document.querySelector('.result__number');
//
//     if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
//         result.innerText = 'Введите число'
//         return;
//     }
//
//     document.querySelector('.button-plus').addEventListener('click', function () {
//         result.innerText = Number(num1) + Number(num2);
//     });
//     document.querySelector('.button-minus').addEventListener('click', function () {
//         result.innerText = Number(num1) - Number(num2);
//     });
//     document.querySelector('.button-multiply').addEventListener('click', function () {
//         result.innerText = Number(num1) * Number(num2);
//     });
//     document.querySelector('.button-division').addEventListener('click', function () {
//         result.innerText = Number(num1) / Number(num2);
//     })
// } // хотел сделать все в одной функции получилось лажа, можешь пожалуйста подсказать, как правильно все сделать в одной функции, конечно если это возможно

function checkForNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        document.querySelector('.result__number').innerText = 'Введите число';
        return false;
    } else {
        return true;
    }
}

function add() {
    const num1 = document.querySelector('.input__num1').value;
    const num2 = document.querySelector('.input__num2').value;
    if (!checkForNumber(num1, num2)) {
        return;
    }
    document.querySelector('.result__number').innerText = Number(num1) + Number(num2);
}

function subtract() {
    const num1 = document.querySelector('.input__num1').value;
    const num2 = document.querySelector('.input__num2').value;
    if (!checkForNumber(num1, num2)) {
        return;
    }
    document.querySelector('.result__number').innerText = Number(num1) - Number(num2);
}

function multiply() {
    const num1 = document.querySelector('.input__num1').value;
    const num2 = document.querySelector('.input__num2').value;
    if (!checkForNumber(num1, num2)) {
        return;
    }
    document.querySelector('.result__number').innerText = Number(num1) * Number(num2);
}

function divide() {
    const num1 = document.querySelector('.input__num1').value;
    const num2 = document.querySelector('.input__num2').value;
    if (!checkForNumber(num1, num2)) {
        return;
    }
    document.querySelector('.result__number').innerText = Number(num1) / Number(num2);
}

function reset() {
    document.querySelector('.input__num1').value = '';
    document.querySelector('.input__num2').value = '';
    document.querySelector('.result__number').innerText = '';
}