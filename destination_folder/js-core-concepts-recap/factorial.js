function factorial(param){
    let initial = 0;
    for(let i = 1; i <= param; i++){
        let element = param * i- 1;
        initial += element;
    }
    return initial;
}
console.log(factorial(3));

// recursive way 
function factorial2(param){
    if(param === 1){
        return 1;
    }
    return param * factorial2(param-1);
}
console.log(factorial2(3));