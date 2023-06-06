// factorial increament style
function factorial(params){
    let result = 1;
    for(let i = 1; i <= params; i++){
        result *= i;
    }
    return result;
}
// factorial decrement style
function factorial2(params){
    let result = 1;
    for(let i = params; i >= 1; i--){
        result *= i;
    }
    return result;
}

// factorial using while loop
function factorial3(params){
    let num = 1;
    let result = 1;
    while(num <= 7){
        num++;
        result *= num;
    }
    return result;
}

// factorial using while loop reversed
function factorial4(params){
    let num = params;
    let result = 1;
    while(num >= params){
        num--;
        result *= num;
    }
    return result;
}

let num = 5;
let res = factorial4(num);
console.log('factorial of', num,'is', res);