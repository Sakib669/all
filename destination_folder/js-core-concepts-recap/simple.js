function sum(param){
    let result = 0;
    for(let i = 1; i <= param; i++){
        let element = i;
        result = result + element;
    }
    return result;
}
console.log(sum(5));

function fibonacci(param) {
    let arr = [];
    for(i = 2; i < param; i++) {
        let element = i-1 + i-2;
        arr.push(element);
    }
    return arr;
}
console.log(fibonacci(8));


// recursion way
function sum2(i){
    if(i === 1){
        return 1;
    }
    return i + sum2(i - 1);
}