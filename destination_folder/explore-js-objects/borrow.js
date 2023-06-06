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

const result = student.exam();
// console.log(result);

const badamAli = {
    name: 'kacha badam',
    money: 8000,
}

const result2 = student.exam.call(badamAli);
// console.log(result2);
const badamMoney = student.treatDey.call(badamAli, 400, 40);
console.log(badamMoney);
const badamMoney2 = student.treatDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);
const badamAliTreat = student.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);