// no parameter
const getPie = () => 3.14;

// one parameter
const doutbleIt = (num) => num * 2;
// one parameter simple version 
const fiveTimes = num => num * 5;


// multi line arrow fuction
// if you want to return something, use the return
const doMath = (x,y,z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
} ;