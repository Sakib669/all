const result = Math.pow(3, 3);
// console.log(result);

let num1 = 20;
let num2 = 40;

const gap = Math.abs(num1 - num2);
if( gap < 5){
    console.log('ok');
}
else{
    console.log('not ok');
}

const number = 2.4343;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const fullNumber2 = Math.ceil(number);
const fullNumber3 = Math.floor(number);
// console.log(fullNumber2, fullNumber3);

// console.log(Math.random());
for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}