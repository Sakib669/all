function kitchen(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const x = kitchen();
const y = kitchen();
console.log(x());
console.log(x());
console.log(y());
console.log(x());
console.log(x());
console.log(y());
console.log(x());
console.log(y());
console.log(x());
console.log(y());
console.log(x());
console.log(y());