const card = '4561-2612-1234-5464';

function luna(cardNumber) {
    let validNumber = cardNumber.split('-').join('');
    let sum = 0;
    for (let i = 0; i < validNumber.length; i += 2) {
        let number = Number(validNumber[i] * 2);
        if (number > 9) {
            number -= 9;
        }
        sum += number;
    }
    for (let i = 1; i < validNumber.length; i += 2) {
        let number = Number(validNumber[i]);
        sum += number;
    }
    return (sum % 10 === 0);
}

console.log(luna(card));