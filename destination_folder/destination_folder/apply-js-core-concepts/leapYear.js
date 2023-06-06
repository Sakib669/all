function leapYear(para){
    const remainder = para % 4;
    if(remainder === 0){
        console.log(para, ' is a leap year');
        return true;
    }
    else{
        console.log(para, ' is not a leap year');
        return false;
    }
}

let check = leapYear(2002);
console.log(check);