// problem 13-23 done
let arr = [12, 34, 54, 11, 15];
let arr2 = [];
arr.pop();
//console.log(arr);

// problem 24
//let myBudget;

// if(myBudget > 80000){
//     console.log('I can buy Mac')
// }
// else if (myBudget > 60000){
//     console.log('I can buy Gaming Laptop');
// }
// else if (myBudget > 40000){
//     console.log('I can buy Lenovo Yoga');
// }
// else if( myBudget > 20000){
//     console.log('I can buy Old Laptop');
// }
// else{
//     console.log('I will manage with Phone');
// }

// problem 25

let monValaNa = 'Ajke amar mon bhalo nei';


for (let i = 1; i < monValaNa.length; i++) {
    const element = monValaNa;
    // console.log(element);
    if( i > 39){
        break
    }
}

// problem 29
let fiftyEight = 58;
// while(fiftyEight < 99){
//     console.log(fiftyEight);
//     fiftyEight++;
// }
for (let i = 58; i < 99; i++) {
    // console.log(i); 
}

// problem 30
let lets412 = 412;
while( lets412 < 457){
    // console.log(lets412);
    lets412 += 2;
}
for(i = 412; i < 457; i += 2){
    // console.log(i);
}

// problem 31

let lets581 = 581;
while( lets581 < 624){
    // console.log(lets581);
    lets581 += 2;
}
for(let i = 581; i < 624; i += 2){
    // console.log(i);
}

// problem 33
let learnings = ['first', 'math', 'problems', 'variable', 'variable-name', 'array', 'comparison', 'conditional', 'index', 'multiple-conditions', 'multi-stage-conditions', 'nested-conditions', 'push-pop', 'array-for', 'break', 'continue', 'even', 'for', 'numbers', 'odd', 'problems', 'reverse', 'while'];
for(let i = 0; i < learnings.length; i++) {
    const element = learnings[i];
    // console.log(element);
}

// problem 34
let phones = ['symphony', 'onetel', 'umidigi', 'poco'];
while(phones.length){
    // console.log(phones);
    phones++;
}

// problem 35

for (let i = 30; i < 86; i++) {
    // console.log(i);
    if (i >= 44){
        break;
    }  
}

// problem 36
let booksPrice = [360, 120, 50, 400, 30, 199, 560 ,100, 150, 180];
for(let i = 0; i < booksPrice.length; i++) {
    const element = booksPrice[i];
    console.log(element);
    if( element > 200){
        continue;
    }
}