function reverseString(params){
    let reversed = '';
    for (let i = params.length - 1; i >= 0; i--) {
        const element = params[i];
        reversed += element;
        console.log(element, reversed);
    }
    return reversed
        ``
}
const myString = 'I am trying to be a good student';
const reversed = reverseString(myString);
console.log(reversed);