// function add (first, second){
//     second = second || 0;
//     const total = first + second;
//     return  total;
// }

// function add (first, second){
//     if(second === undefined){
    // second = 0;
// }
//     const total = first + second;
//     return  total;
// }


function add (first, second = 0){
    const total = first + second;
    return  total;
}

const result = add(12, 8);
console.log(result);

function fullName(first, last = 'murgi chor'){
    const name = first + ' ' + last;
    return name;
}
const myName = fullName('abul');
console.log(myName);