const bottle = {color: 'blue', price: 100, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);
const twoDimensional = [ [ 'color', 'blue' ],[ 'price', 100 ],[ 'isCleaned', true ],[ 'capacity', 1 ] ];
const join = Object.assign(keys, values)
// console.log(join);

// console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 10000;
bottle.height = 18;
console.log(bottle);