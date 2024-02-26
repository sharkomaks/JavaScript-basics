const arr = [1, 15, -3, 10, -17, 24, 38, -11];

const filterArray = (array, removeFunc) => {
    return array.filter(number => !removeFunc(number));
}

const shouldRemove = num => num > 2;

const filter = filterArray(arr, shouldRemove);
console.log(filter);