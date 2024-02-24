const query = {
    search: 'Вася',
    take: 10
};

function addQueryString(params) {
    return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&')
}

console.log(addQueryString(query));