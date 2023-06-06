const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userInput.toLocaleLowerCase())
console.log(userInput.toUpperCase())
console.log(userInput.toLowerCase())

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}