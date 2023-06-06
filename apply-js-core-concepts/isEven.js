function evenOdd(para){
    const remainder = para % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
let chk = evenOdd(2);
console.log(chk);
