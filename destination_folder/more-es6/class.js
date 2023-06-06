// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for modules ${module}`)
    }
}

const amir = new Instructor('aamir', 'mumbai');
// console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(60);

const solaiman = new Instructor('solaiman fokir', 'nowakhali');
console.log(solaiman)
solaiman.createQuiz(80);
solaiman.startSupportSession('11.30');