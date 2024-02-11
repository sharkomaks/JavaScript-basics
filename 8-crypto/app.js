// const password = prompt('Введите пароль:')
// console.log(password)

function cryptoPassword(password) {
    const [one, two, three, four, five, six, seven, eight, ...other] = password.split('');
    return [seven, five, four, three, eight, one, six, two, ...other].join('')
}

function checkPassword(encryptedPassword, password) {
    const [seven, five, four, three, eight, one, six, two, ...other] = encryptedPassword.split('');
    const checkPass = [one, two, three, four, five, six, seven, eight, ...other].join('');
    return checkPass === password;
}

console.log(cryptoPassword('password')); // Выведет: rwssdpoa
console.log(checkPassword('rwssdpoa', 'password'));// Выведет: true
console.log(checkPassword('rwssdpoa', 'wrong')); // Выведет: false

// console.log(cryptoPassword(password));
// console.log(checkPassword(cryptoPassword(password), password));
// console.log(checkPassword(cryptoPassword(password), password.split('').reverse().join('')));