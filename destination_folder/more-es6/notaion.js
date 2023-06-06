const student = {
    name: 'Korim Uddin',
    age: 15,
    class: 10,
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
};

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(chemistry);
console.log(subjectMarks);