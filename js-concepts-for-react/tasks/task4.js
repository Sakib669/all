const obj = {
    naam: 'kuddus mia',
    marks: [32, 23, 33, 34, 51],
    money: 200,
    properties: {
        house:1,
        shop: 3
    },
    children: {son: 'abul',girl: 'jorina', son2: 'babul', girl2: 'sokhina'}
};

const stringifiedObj = JSON.stringify(obj);
// console.log(stringifiedObj);
const parsedObj = JSON.parse(stringifiedObj);
// console.log(parsedObj);

const date = new Date();
// console.log(date);
const time = new Date().getTime();
// console.log(time);

const keys = Object.keys(parsedObj);
// console.log(keys);
const values = Object.values(obj);
// console.log(values);