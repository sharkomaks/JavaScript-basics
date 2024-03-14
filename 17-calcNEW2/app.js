"use strict";

function checkForNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        document.querySelector('.result__number').innerText = 'Введите число';
        return false;
    } else {
        return true;
    }
}

function setAction(action) {
    const num1 = document.querySelector('.input__num1').value;
    const num2 = document.querySelector('.input__num2').value;
    let result;
    if (!checkForNumber(num1, num2)) {
        return;
    }
    switch (action) {
        case 'add':
            result = Number(num1) + Number(num2);
            break;
        case 'subtract':
            result = Number(num1) - Number(num2);
            break;
        case 'multiply':
            result = Number(num1) * Number(num2);
            break;
        case 'divide':
            if (Number(num2) === 0) {
                document.querySelector('.result__number').innerText = 'На ноль делить нельзя';
                return;
            }
            result = Number(num1) / Number(num2);
            break;
    }
    document.querySelector('.result__number').innerText = result;
}