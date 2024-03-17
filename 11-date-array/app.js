const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
console.log(arr)

function filter(array) {
    return array
        .filter(date => date.includes('-') || date.includes('/'))
        .map(date => {
            if (date.includes('-')) {
                return date.split('-');
            } else if (date.includes('/')) {
                return date.split('/');
            }
        })
        .filter(date => date[0] <= 31 && date[1] <= 12)
        .map(date => date.join('-'))
}

console.log(filter(arr))