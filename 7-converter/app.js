const sum = Number(prompt('Введите сумму для перевода'));
const ourCurrency = prompt('Ваша валюта для конвертации: "USD", "EUR" или "RUB"?').toUpperCase();
const currencyChoice = prompt('Выберите валюту для конвертации: "USD", "EUR" или "RUB"').toUpperCase();


const converter = () => {
    let result;
    switch (true) {
        case (ourCurrency === 'USD' && currencyChoice === 'EUR'):
            result = sum * 0.9;
            break;
        case (ourCurrency === 'USD' && currencyChoice === 'RUB'):
            result = sum * 90;
            break;
        case (ourCurrency === 'EUR' && currencyChoice === 'USD'):
            result = sum * 1.11;
            break;
        case (ourCurrency === 'EUR' && currencyChoice === 'RUB'):
            result = sum * 100;
            break;
        case (ourCurrency === 'RUB' && currencyChoice === 'USD'):
            result = sum / 90;
            break;
        case (ourCurrency === 'RUB' && currencyChoice === 'EUR'):
            result = sum / 100;
            break;
        default:
            result = 0;
    }
    alert(`Результат: ${result.toFixed(2)}`);
};

converter();