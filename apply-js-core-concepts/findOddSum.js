function getSumOfAnArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[index];
        // sum = sum + element;
        sum += element;
        // console.log(i, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[i];
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

let myNumbers = [12, 65, 45, 78, 32, 45, 92];
console.log(getOddNumbersOfAnArray(myNumbers));
console.log(getSumOfAnArray(myNumbers));