// not in JS that frequently: range error
const numbers = [2, 5, 3, 1];
//  you should not do it (most of the time)
console.log(numbers.length, numbers);
numbers.length = 2;
console.log(numbers.length, numbers);


// reference error
// console.log(money);
const money = 80;


// syntax error
for(let i = 0; i < 5 i++){
    // console.log(i);
}

// type error
const studen = {};
// console.log(studen.address.city);