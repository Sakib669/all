const player = {};
player.name = 'small nirob';
player.job = 'batsman';
player.bat = function(){
    console.log('he will bat and make runs');
};
// console.log(player);
// player.bat();

const student = {
    name: 'pandey',
    job: 'roj khay mangsho',
    ball: function(){
        console.log('he can ball and out batsman');
    },
    salary: 1000
};
// console.log(student);
// student.ball;

// object constructor
const person = new Object();
// console.log(person);

// object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);

class Person{
    name = 'abul';
    address = 'gulisthan';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(12);
// console.log(person1);

// function
function Car(model, price){
    this.model = model;
    this.price = price;
};

const tesla = new Car('elon', 32);
console.log(tesla);