let arr = [];;
for(let i = 1; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        arr.push('foobar'+ ' ' + i);
    }
    else if(i % 3 === 0){
        arr.push('foo'+ ' ' + i);
    }
    else if(i % 5 === 0){
        arr.push('bar'+ ' ' + i)
    }
    else{
        arr.push(i)
    }
}
console.log(arr);