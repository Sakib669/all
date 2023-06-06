const bottle = {color: 'blue', price: 100, isCleaned: true, capacity: 1};
const numbers = [22, 88, 53, 19, 93];


// for of can not be used with objects

// 1.first option to loop through an object
const values = Object.values(bottle);
const keys = Object.keys(bottle);
/*
3 ways to read object properties
bottle.color
bottle['color']
bottle[key] 
*/
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    const value = bottle[key];
    // console.log(key, bottle[key])
}

// advanced 
const pair = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}
