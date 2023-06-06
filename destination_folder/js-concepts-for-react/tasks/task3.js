// task 1

const student = {
    name: 'sakib khan',
    age: 33,
    movie: ['king khan', 'bang bang', 'boss no.1', 'my name is khan']
};
const templateStr = `নামঃ ${student.name} বয়সঃ ${student.age} ছবিঃ${student.movie[2]}`;
// console.log(templateStr);

// task 2
const {name, age, ...movies} = student;
const movies2 = student.movie.filter(m => m.includes('b'));
// console.log(movies);
// console.log(movies2);

let merlin = {
	job: 'wizard',
	age: '942',
	hobbies: ['disappearing', 'seeming aloof'],
	spells: ['dancing broomsticks', 'turning into animals'],
	height: '6 feet 3 inches',
	eyes: 'blue'
};

let {hobbies, height, eyes, ...merlinAbridged} = merlin;
// console.log(merlinAbridged);

// task 3
const func = () => 9;
// console.log(func());
const func2 = (x) => x * 12;
// console.log(func2(12));
const func3 = (x, y) => (x + y) / 4 ;
// console.log(func3(10,10));
const func4 = (x, y) => {
    const sum1 = x + 5;
    const sum2 = y + 5;
    return sum1 * sum2;
};
// console.log(func4(7,7));


// task 4
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
for(let x in obj.children){
    console.log(x); 
}

// task 5
const {naam, money} = obj;
// console.log(naam);
// console.log(money);
const [a, b] = obj.marks;
console.log(a, b);

// task 6
const func5 = (x=5) => x * 12;
// console.log(func5());

// task 7
const zzp = obj?.children?.son;
// console.log(zzp);