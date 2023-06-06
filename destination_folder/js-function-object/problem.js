// problem 1
function foo(){
    console.log('foo');
}
function bar(){
    console.log('bar');
}
foo(bar()); 

// problem 2
function makeAvg(a, b, c){
    const sum = a + b + c;
    const avg = sum / 3;
    return avg;
}

// problem 3
const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);


// problem 4

function oddEven(para){
    if(para % 2 === 0){
        return 'It is a even number';
    }
    else{
        return 'It is a odd number';
    }
}
let test = oddEven(3);
console.log(test);


function oddEven2(para){
    if(para % 2 === 0){
        console.log('It is a even number');
    }
    else{
        console.log('It is a odd number');
    }
}
oddEven2(2);

// problem 5
let signal = 'yellow';
switch (signal) {
    case 'red':
        console.log('Danger ahed do not go');
        break;
    case 'green':
        console.log('Cross the road now');
        break;
    case 'yellow':
        console.log('Stop do not go now');
        break;
    default:
        console.log('The signal colour should be red, yellow or green');
        break;
}