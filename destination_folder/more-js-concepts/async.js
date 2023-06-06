// console.log(1);
// console.log(2);
// let number = 0;
// setTimeout(() => {
//     console.log('"set timeout"');
//     console.log('it does not work sequentially'); 
//     console.log('it can delay any function for a certain amount of time');
// }, 3000);
// console.log(4);
// console.log(5);
// console.log(6);

// function doSomthing(){
//     console.log(3);
// }

const zero = document.getElementById('zero').innerText;
let zeroParsed = parseFloat(zero);

document.getElementById('btn-start').addEventListener('click', () => {
    const intervalId = setInterval(() => {
        let x = zeroParsed++;
        zero.innerText = x;
        console.log(zeroParsed);
        document.getElementById('btn-stop').addEventListener('click', () => {
            clearInterval(intervalId);
        });
    }, 1000);
});
