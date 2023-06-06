//this function will take positive number as parameter then it will miltiply parameter with 3, then add 10, then divide by 2, then minus 5 and will the overall value to sum, later then it will return sum, if the parameter is not positive number then it will return an error
function mindGame(param){
    let output = param * 3 + 10 /2 -5;
    let output2 = output + 10;
    let output3 = output2 / 2;
    let output4 = output3 - 5;
    return output4;
    if(typeof(positiveNumber) === "number"){
    }
    else{
        return 'Please enter a number';
    }
}

// this function will take string as parameter then if the length of parameter has remainder 0 after divided by 2 it will return even or it will return odd, if the parameter is not string then it will return an error
function evenOdd(str){
    if(typeof(str) == "string"){
        let output = str.length;
        if(output % 2 === 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
    else{
        return 'Please enter a string';
    }
}


//this function will take number as parameter then it will minus 7 from the parameter and it will send the remainder value to sum , then if sum is less than 7 it will return sum, if sum is greater than 7 then it will return sum multiplied by 2, if the parameter is not number then it will return an error
function isLGSeven(parameter){
    if(typeof(parameter) == "number"){
        let sum = parameter - 7
        if(sum < 7){
            return sum;
        }
        else if(sum >= 7){
            return sum * 2;
        }
    }
    else{
        return 'Please enter a number';
    }
}


// this function will take array as parameter then it will return the array has how many negative numbers, if the parameter is not array then it will return an error
function findingBadData(array){
    let negativeNumbers = [];
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        if(typeof(element) === "number"){
            if(element < 0){
                negativeNumbers.push(element);
            }
        }
        else{
            return 'Please enter a array';
        }
    }
    return negativeNumbers.length;
}


// this function will take three parameters then it will multiply first parameter with 21, then multiply second parameter with 32, then multiply third parameter with 43, then it will make a sum of the three parameters multiplied value , if sum is greater than 2000 then it will return sum minus 2000, if sum is greater than, if sum is less than 2000 then it will return sum
function gemsToDiamond(fristFriendGem,secondFriendGem,thirdFriendGem){
    let firstFriendDiamond = fristFriendGem * 21;
    let secondFriendDiamond = secondFriendGem * 32;
    let thirdFriendDiamond = thirdFriendGem * 43;
    let totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if(totalDiamond > 2000){
        totalDiamond -= 2000;
        return totalDiamond;
    }
    else if(totalDiamond < 2000){
        return totalDiamond;
    }
}


console.log(mindGame(5), mindGame(50), mindGame(33));
console.log(evenOdd('phero'), evenOdd('Batch7'), evenOdd('chatgpt'))  
console.log(isLGSeven(6), isLGSeven(-15), isLGSeven(15))
console.log(findingBadData([1,2,5]), findingBadData([2,-5,-7,-13]), findingBadData([-4,-9,-5,-33,-55]));
console.log(gemsToDiamond(1,1,1), gemsToDiamond(20, 200, 50), gemsToDiamond(100, 5, 1))
