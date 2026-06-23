// FIRST PROMISE=================================
// =============
const promiseOne = new Promise(function(resolve, reject){

    //Do an async task
    //DB calls, cryptography, network

    setTimeout(() => {
        console.log("Async is Completed")
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log('promise consumed')
})


// SECOND PROMISE=================================
// ==============

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Task 2 Done')
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 consumed')
})

// THIRD PROMISE=================================
// =============

const promiseThree = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({username: "Ali", age: 20})
        }, 1000);
})

promiseThree.then(function (user) {
    console.log(user.age)
    console.log(user)
})

// FOUR PROMISE=================================
// ============

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true //try making value of error to false
        if(!error){
            resolve({username: "Ali", password: '123'})
        }
        else{
            console.log("ERROR: Something Went Wrong!")
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
} ).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))

// FIVE PROMISE=================================
// ============

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true //try making value of error to false
        if(!error){
            resolve({username: "JS", password: '123'})
        }
        else{
            console.log("ERROR: JS Went Wrong!")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }   
}

consumePromiseFive()

// fetch  


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
