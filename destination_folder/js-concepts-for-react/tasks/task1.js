// task 1
const pi = 3.14;
let season = 'summer';

// task 2
if(pi >= 3 && pi <= 4 || season.length === 5){
    console.log('if ');
}
else if(season !== 'Summer'){
   console.log('else if '); 
}
else{
    console.log('else');
}

// task 3
const arr = [12, 32, 11, 88, 334, 1];
const arrLength = arr.length;
arr.pop();
arr.push(101);
console.log(arr.includes(32));
arr.shift();
arr.unshift(111);

const arr2 = ['murgi', 'kutta', 'bilai']
const joinArr = arr.join('');
console.log(joinArr);

// task 4 
let wh = 0;
while(wh < 5){
    wh++;
    if(wh > 5){
        break;
    }
}

for(let i = 0; i < 5; i++){
    const element = i;
    console.log(element);
}

for(const a of arr){
    console.log(a);
}

const student = {
    name: 'sakib khan',
    age: 33,
    movie: ['king khan', 'bang bang', 'boss no.1', 'my name is khan']
};
student.wifes = ['apu', 'bubly', 'puja'];
console.log(student);

const age = student['age'];
const name = student.name;

console.log(name);
console.log(age);