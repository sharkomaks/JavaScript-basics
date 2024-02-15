const arr = [1, 15, -3, 10, -17, 24, 38, -11];

const filterArray = (array, removeFunc) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!removeFunc(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

const shouldRemove = num => num > 2;

const filter = filterArray(arr, shouldRemove);
console.log(filter)