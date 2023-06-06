// problems 1
var arr = ['apple', 'banana', 'orange'];
var positonOfBanana = arr.indexOf('banana');
arr[1] = 'mango';
arr.pop();
arr.push('watermelon');
// console.log(arr);

// problems 2
var me = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

// if( john >= 80){
//     console.log('A grade');
// }
// else if( john >= 60){
//     console.log('B grade');
// }
// else if( john >= 50){
//     console.log('C grade');
// }
// else if ( john >= 40){
//     console.log('D grade');
// }
// else if ( john <= 39){
//     console.log('F grade');
// }


// problem 3

var ar = [13, 79, 45];

if (ar[1] > ar[0] && ar[2] > ar[0]) {
    var z = ar[0];
    ar[0] = ar[1];
    ar[1] = ar[2];
    ar[2] = z;
}

//console.log(ar);




// problem 4
var triangle = [9, 8, 9];


if (triangle[0] == triangle[1] || triangle[1] == triangle[2] || triangle[0] == triangle[2]){
    console.log('Isosceles');
}
else{
    console.log('not Isosceles');
}
