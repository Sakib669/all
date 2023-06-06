// task 1
const obj = {
    name: 'rohim',
    age: 15,
    marks: [33, 82, 55, 92, 12],
    subject:{
        math: ['general math', 'higher mathematics'],
        physics: 'newtonian mechanics'

    },
    studyStyle: function(x){
        return `${x} a boshe boshe portase for ${this.subject.math[1]} and ${this.subject.physics}`;
    },
    studyMaterial: function (param){
        return `${this.name} ${this.studyStyle(param)}`
    }
};
const output = obj.studyMaterial('chair');
// console.log(output);
const ul = document.getElementById('ul');
ul.innerHTML = `
<li>${obj.name}</li>
<li>${obj.age}</li>
<li>${obj.marks[3]}</li>
<li>${obj.subject.math[1]}</li>
<li>${output}</li>
`;