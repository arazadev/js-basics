// let myName = "Ali       "
// let favFruit = "Mangoes"

// console.log(myName.trueLength);  // Can we create our own method?????????



let myHeroes = ["Ali", "Hussain"]

let heroEdu = {
    Ali : "Matric",
    Hussain : "Graduate",

    getAliEdu : function () {
        console.log(`Ali's Education is ${this.Ali}`)        
    }
}

Object.prototype.AR = function () {
    console.log("Ali is present in all Objects")
}

// heroEdu.AR()
// myHeroes.AR()

Array.prototype.as = function () {
    console.log("AS is here")
}

// myHeroes.as()   // array has access
// heroEdu.as()    // object has no access because "as" is pased to array but not the upper member in hiercharhy, and it throws error if we run it

// Prototypal Inheritance (Old Method)

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Prototypal Inheritance (Modern Syntax)

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherName = "Hussain        "

String.prototype.trueLength = function () {
    // console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherName.trueLength()


"Azeem".trueLength()
"Hasnain  ".trueLength()