// CODE here for your Lambda Classes
class Person{
    constructor(pAttr){
        this.name = pAttr.name
        this.age = pAttr.age
        this.location = pAttr.location
        this.gender = pAttr.gender
    }
    speak() {
        return `Hello my ${this.name} is Fred, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(iAttr){
        super({
            name: iAttr.name,
            age: iAttr.age,
            location: iAttr.location,
            gender: iAttr.gender
        })
        this.specialty = iAttr.specialty
        this.favLanguage = iAttr.favLanguage
        this.catchPhrase = iAttr.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(sAttr){
        super({
            name: sAttr.name,
            age: sAttr.age,
            location: sAttr.location,
            gender: sAttr.gender
        })
        this.previousBackground = sAttr.previousBackground
        this.className = sAttr.className
        this.favSubjects = sAttr.favSubjects
    }
    listSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(subject)
        });
    }

    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr){
        super({
            name: pmAttr.name,
            age: pmAttr.age,
            location: pmAttr.location,
            gender: pmAttr.gender,
            specialty: pmAttr.specialty,
            favLanguage: pmAttr.favLanguage,
            catchPhrase: pmAttr.catchPhrase,
        })
        this.gradClassName = pmAttr.gradClassName
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times`)
    }

    debugsCode(student, object){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}