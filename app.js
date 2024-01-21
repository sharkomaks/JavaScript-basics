const positionLat = 0;
const positionLong = 0;
const addressLat = 11;
const addressLong = 11;
const distanceToObject = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(`Расстояние до объекта ${distanceToObject}`);