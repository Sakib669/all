class TeamMember{
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback`);
    }

}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'web team'
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for modules ${module}`)
    }
}


class Devloper extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'web team'
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developFeatures(features){
        console.log(`please develop the ${features}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}


class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location)
        this.region = region
    }
    provideResume(features){
        console.log(`please develop the ${features}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

const alia = new Devloper ('Alia bhatttt', 'Delhi', 'Vue');
console.log(alia);
alia.provideFeedBack();

const bipasha = new JobPlacement('bipasha basu', 'kolkata', 'India');
console.log(bipasha);