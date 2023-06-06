const student = {
    name: 'Kuddus Ahemd',
    money: 3000,
    study: 'ACCE',
    subject: ['calculus', 'algebra', 'geomatry'],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`;
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('calculus');
// console.log(reExam);
const remaining = student.treatDey(1200, 50);
console.log(remaining);
const dolaRemaining = student.treatDey(1200, 100);
console.log(dolaRemaining);