function ticketPrice(param){
    if(param >= 200){
        let first = 100 * 100;
        let second = 100 * 90;
        let rest = param - 200;
        let third = rest * 70;
        let total = first + second + third;
        return total;
    }
    else if(param >= 100){
        let first = 100 * 100;
        let rest = param - 100;
        let second = rest * 90;
        let total = first + second;
        return total;
    }
    else{
        let total = param * 100;
        return total;
    }
}
console.log(ticketPrice(101));