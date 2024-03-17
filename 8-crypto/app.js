// const password = prompt('Введите пароль:')
// console.log(password)

function cryptoPassword(password) {
    const half = Math.floor(password.split('').length / 2);
    const firstHalf = password.slice(0, half);
    const secondHalf = password.slice(half);
    return [secondHalf, firstHalf].join('');
}

function checkPassword(encryptedPassword, password) {
    const half = Math.floor(encryptedPassword.split('').length / 2);
    const firstHalf = encryptedPassword.slice(0, half);
    const secondHalf = encryptedPassword.slice(half);
    const checkPass = [secondHalf, firstHalf].join('');
    return checkPass === password;
}

console.log(cryptoPassword('password')); // Выведет: wordpass
console.log(checkPassword('wordpass', 'password'));// Выведет: true
console.log(checkPassword('wordpass', 'wrong')); // Выведет: false

// console.log(cryptoPassword(password));
// console.log(checkPassword(cryptoPassword(password), password));
// console.log(checkPassword(cryptoPassword(password), password.split('').reverse().join('')));