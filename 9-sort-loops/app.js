const arr = [1, 40, -5, 10, 0];

function sort(array) {
    const arraySort = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let index = 0;
        for (let j = 0; j < array.length; j++) {
            if (current > array[j]) {
                index++;
            }
        }
        arraySort.splice(index, 0, current);
    }
    return arraySort
}

console.log(sort(arr));