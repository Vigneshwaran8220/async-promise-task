let taskCompletion = 77;

let taskPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(taskCompletion >=75){
            resolve("your placement is guaranteed")
        }else{
            reject("Sorry you haven't completed the course")
        }
    },5000)
})
console.log(taskPromise);
setTimeout(()=>{
    console.log(taskPromise)
},5000)
let taskCompleted = 90;

let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(taskCompleted >=75){
            resolve("your placement is guaranteed")
        }else{
            reject("Sorry you haven't completed the course")
        }
    },3000)
})
console.log(promise);
setTimeout(()=>{
    console.log(promise)
},5000)
// // class time task////
let constructionWorkDays= 11;


let constructerPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(constructionWorkDays >=12){
            resolve("Your work is finish")
        }else{
            reject("sorry your work doesn't finish")
        }
    },5000)
})
console.log(constructerPromise)
setTimeout(()=>{
    console.log(constructerPromise)
},3000)
let taskCompletation =50;
console.log("program-stated")
// producer of promise

let createPromise = new Promise(
    (resolve, reject) => {
        setTimeout(()=>{
            if(taskCompletation >=70){
                resolve("your placement is guarandeed")
            } else{
                reject("Sorry Your placement is doesn't guarandeed")
            }
        },4000)
    
    }
)

let newPromise = newPromise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(25)
    },5000)
})

//  consumer of promise
promise
.then((returnValue)=>{
    console.log(returnValue);
})
.catch((error)=>{
    console.log(error);
})


// //////////////////////////////////chaining the function////////////////////////////////////////
newPromise 
.then((value)=>{
    console.log(value);
    return value*2;
}).then((val2)=>{
    console.log(val2);
    return val2*3;
}).then((val3)=>{
    console.log(val3);
})






///////////states of promise///////

