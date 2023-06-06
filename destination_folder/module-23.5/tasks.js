// task 1
let str = 'this is a string variable';
let num = 123;
let isTrue = true;

// task 2
let change = 12;
change = 21;
const constantVariable = 123;

// task 3
let num1 = 33;
let num2 = 44;
let sum = num1 + num2;
let sum2 = num1 - num2;
let sum3 = num1 * num2;
let sum4 = num1 / num2;
let sum5 = num1 % num2;

// task 4
let x = 5;
let y = 8;
if(x === 5){}
if(y >= 3){}
if(x <= 3){}
if(y !== 10){}

// task 5
let a = 12;
let b = 22;
if(a >= 10 && a % 2 === 0 || b >= 20){}

// task 6
let xr = 120
if(xr === 120){
    // console.log('i will buy Iphone XR')
}
else{
    // console.log('i will buy Iphone XR later when the price drops')
}

// tast 7
let odd = 7;
while(odd <= 19){
    if(odd % 2 !== 0){
        // console.log(odd);
    }
    odd++;
}

// task 8
let arr = ['murgi', 'kutta', 'haash', 'bilai', 'sheeeaaal', 'bheeera', 'dumba', 'induuuur'];
let length = arr.length;
arr[4] = 'pecha';
arr.pop(); 
arr.push('kobutor', 'tel aaa poka')
// console.log(arr);


// task 9
for(ar of arr){
    // console.log(ar);
}
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}

// task 10
let arr2 = [30, 85, 89, 90, 104, 294, 12, 9, 28, 76, 101];
for(x of arr2){
    if(x > 80){
        // console.log(x);
    }
}
for(let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if(element > 80){
        // console.log(element);
    }
}

// task 11

function multiply(a,b,c){
    let result = a * b * c;
    return result;
}

// task 12

let obj = {
    name: 'shorif baadmaash',
    age: 33,
    profession: 'murgichor'
};
obj.age = 40;
console.log(obj);