const fnc = (a, b) =>{
    const sum = a + b;
    const sum2 = sum / 2;
    if(sum2 % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const res = fnc(10,10);
// console.log(res);