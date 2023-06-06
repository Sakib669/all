// tast 1
let lets = 5;
const coons = 3;

// task 2
const dynamic = `this is lets: ${lets} and this is coons: ${coons}`;
// console.log(dynamic);


// task 3.1
const task3p1 = x => x / 5;
// console.log(task3p1(10));

// task 3.2
const task3p2 = (a,b) => {
    const c = a + 2;
    const d = b + 2;
    return c * d;
};
// console.log(task3p2(2,3));

// task 3.3
const task3p3 = (a, b, c) => a * b * c;
// console.log(task3p3(1,2,3));

// task 4
// search on google js arrow function vs regular function

// task 4.5
// difference between var, let, const
/*
1.var is global scope, it can be called from anywhere, it's value can be changed
2. let is block scope, it can't be called from anywhere, it's value can be changed
3. const is block scope, it can't be called from anywhere, it's value can't be changed because it's constant
*/ 

// task 5
const task5 = x => x.map(a => a * 5);
// console.log(task5([1,2,3]));
// task 6
const task6 = x => x.map(a =>  a % 2 !== 0 ? a : false)
// console.log(task6([1,2,3,4,5,6]));

// task 7
const task7 = x => x.find(a => a.price > 5000);

// task 7.5
/*
1.map = map if similar to for, for of, for in loop. it can do a loop to any array or object and return each and every element
2.forEach = forEach can loop through any object or array but it can't return any value except console.log()
3.filter = filter will loop through any array or object and will return the matching element of your condition and most importantly it will find those elements by taking an condition
4.find = find will loop through any array or object and it will take an condition then it will return the first matching element of the condition
*/

// taskt 8
// const {x,y} = obj;

// task 9
// const three = obj[2]

// task 10
const task10 = (a, b, c = 7) => a + b + c;
// console.log(task10(1,2));

// task 11
const task11 = {
    name: 'kuddus',
    age: 15,
    subjects: {
        physics: 98,
        chemistry: 85,
        biology: 80,
        math: 100,
    },
    meritPositions: [8, 22, 2, {
        cause: 'I did not completed my syllabus at all so that is why it happened. Otherwise I would take the rank 1'
    }, 1]
};

// task 12
const task121 = task11.subjects?.physics;
const task122 = task11.subjects?.chemistry;
const task123 = task11.subjects?.biology;
const task124 = task11.subjects?.math;
const task125 = task11.meritPositions[3]?.cause;
// console.log(task121);
// console.log(task122);
// console.log(task123);
// console.log(task124);
// console.log(task125);