/*
Truthy:
1. true
2.any number(+ve, -ve) will be thruthy except 0
3. any string will be thruthy except empty string ''
4. '0' , 'false'
5. any type of object, array will be thruthy


Falsy:
1.false
2. 0
3. '' (empty string)
4. undefined
5. null 
*/ 

let x = [];
console.log(x);
if(x){
    console.log('this is truthy');
}
else{
    console.log('this is falsy');
}

// optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

// check true
const z = {};
if(!!z){
    console.log('value is truthy');
}