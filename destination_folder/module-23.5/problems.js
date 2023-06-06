// problem 1
function feetToInch(param){
    let inch = param * 12;
    return inch;
}

// problem 2
function centimeterToMeter(param){
    let meter = param / 100;
    return meter;
}

// problem 3
function paperRequirements(a,b,c){
    let firstBookPages = a * 100;
    let secondBookPages = b * 200;
    let thirdBookPages = c * 300;
    let totalPages = firstBookPages + secondBookPages + thirdBookPages;
    return totalPages;
}

// problem 4
function bestFriend(param){
    let largest = param[0]
    for(let i = 1; i < param.length; i++){
        let element = param[i];
        if(element.length > largest.length){
            largest = element;
            // console.log(largest);
        }
    }
    return largest;
}

let friendsNames = ['abul', 'babul', 'alal', 'dulaal', 'sylvester stallone', 'cruise', 'holland', 'kashem', 'kuddus ali', 'abul kashem'];
let checkFunctions = bestFriend(friendsNames);
// console.log(checkFunctions);

// problem 5

function negativeNumberCheck(param){
    let newArray = [];
    for(let i = 0; i < param.length; i++) {
        let element = param[i];
        if(element > 0){
            newArray.push(element);
        }
        else{
            // break;
        }
    }
    return newArray;
}
let numberArray = [12, 34, 2, 84, -2, 7, 8, -11, 23, 11, 984, -23]

let checkFunctions2 = negativeNumberCheck(numberArray);
console.log(checkFunctions2)