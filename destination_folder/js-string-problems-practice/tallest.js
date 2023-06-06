function maxInArray(param){
    let largest = param[0];
    for (let i = 0; i < param.length; i++) {
        const element = param[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
function minInArray(param){
    let lowest = param[0];
    for (let i = 0; i < param.length; i++) {
        const element = param[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
const lowEst = minInArray(heights);
console.log('tallest person is ', tallest);
console.log('lowest person is ', lowEst);