// problem 1
function hourToMinute(hour){
    let minutes = hour * 60;
    return minutes;
}
function minutesToSecond(minutes){
    let seconds = minutes * 60;
    return seconds;
}

// problem 2


let arr = [2020, 2021, 2022, 2023, 2025, 2024, 2028, 2030, 2032];

function learYear(params){
    let year = [];
    for(let i = 0; i < params.length; i++){
        const element = params[i];
        if((element % 4 === 0)){
            year.push(element);
        }
        // console.log(year);
    }
    return year;
}
console.log(learYear(arr));


// problem 3

function celciusToFarenhit(params){
    let element = params * 32;
    return element
}

// problem 4
function farenhitToCelcius(params){
    let element = params / 32;
    return element;
}

// problem 5
function percentage(param, param2){
    let element = param * param2 / 100;
    return element;
}

// problem 6
function gpaCounter(params){
    if(params >= 80){
        return console.log('A+');
    }
    else if(params >= 70){
        return console.log('A');
    }
    else if(params >= 60){
        return console.log('A-');
    }
    else if(params >= 50){
        return console.log('B');
    }
    else if(params >= 40){
        return console.log('C');
    }
    else if(params >= 33){
        return console.log('D');
    }
    else if (params < 33){
        return console.log('F');
    }
}