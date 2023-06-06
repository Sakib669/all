const numbers = [2, 8, 4, 6, 3];


function getdoubles(numbers){
    const output = [];
    for (const number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return  output;
}

function doubleItOld(number){
    return number * 2;
}

const doubleIt = num => num * 2;

console.log(getdoubles(numbers));

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDouble);
console.log(makeDoubleDirect);

/*
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/ 