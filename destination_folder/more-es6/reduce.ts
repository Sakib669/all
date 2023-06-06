const a = [1,2,3,4,5];
// .reduce (accumulatorFunction, initialValue)
// accumulatorFunction use two parameters
const b = a.reduce((previous, current) => previous + current, 0)
console.log(b);