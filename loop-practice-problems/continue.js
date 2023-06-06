let numbers = [13, 31, 24, 43, 55, 62, 74, 82, 21, 43, 74, 88];
for(let i = 0; i <= numbers.length; i++){
    let element = numbers[i];
    if(element > 43){
        continue;
    }
    console.log(element);
}