// problem 1
function multiply(a, b, c) {
    return a * b * c;
}
// console.log(multiply(1, 2, 3));

// problem 2
const threeLines = `
I am a Web Developer.
I love to code.
I love to ear biryani
`;
// console.log(threeLines);

// problem 3
const add = (a, b = 0) => a + b;
// console.log(add(2));

// problem 4
const names = ['murgi', 'kutta', 'beli', 'deli'];
const friendNameEvenOrOdd = x => {
    const returnArray = [];
    for(let i = 0; i < x.length; i++) {
        const element = x[i];
        if(element.length % 2 === 0) {
            returnArray.push(element);
        }
    }
    return returnArray;
}
// console.log(friendNameEvenOrOdd(names));

// problem 5
