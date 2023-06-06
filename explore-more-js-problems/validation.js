function add(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'please enter a number';
    }
    return a + b;
}
const result = add(false, 45);
// console.log(result);