const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers2.push(234);
numbers.push(111);

const numbers3 = [34234, 2222, ...numbers, 010101];
console.log(numbers2);
console.log(numbers3);
console.log(numbers);
