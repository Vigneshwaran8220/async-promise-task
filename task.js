// // class time task/////////////////////////////////////////////////////////////////////////////////////////////////

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


