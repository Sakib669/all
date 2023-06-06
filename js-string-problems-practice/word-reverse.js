function reverseWords(str){
    const element = str.split(" ").reverse().join(" ");
    return element;
    // const words = str.split(" ");
    // const result = [];
    // for (let i = words.length - 1; i >= 0; i--){
    //     const element = words[i];
    //     result.push(element);
    // }
    // const reversed = result.join(' ');
    // return reversed;
}







const myString = 'I am a good boy';
const yolo = reverseWords(myString);
console.log(yolo);