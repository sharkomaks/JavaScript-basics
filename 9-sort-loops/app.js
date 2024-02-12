const arr = [1, 40, -5, 10, 0];

function sort(array) {
    const arraySort = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let added = false;
        for (let j = 0; j < array.length; j++) {
            if (current > array[j]) {
                arraySort.push(current);
                added = true;
                break;
            } else if (current < array[j]) {
                arraySort.unshift(current)
                added = true;
                break;
            }
        }
    }
    return arraySort;
}

console.log(sort(arr));

// я не понимаю почему код работает не правильно