//const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const fibo = [0, 1];
const fibo2 = [144, 89];
function fibonacci(params){
    for (let i = 2; i <= 15; i++) {
        params[i] = params[i-1] + params[i-2];   
    }
    return params;
}
function fibonacci2(params){
    for (let i = 2; i <= 15; i++) {
        params[i] = params[i-2] - params[i-1];   
    }
    return params;
}
console.log(fibonacci(fibo), fibonacci2(fibo2));