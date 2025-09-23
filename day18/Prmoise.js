// let obj = new Promise(callback function)

let promise = new Promise((resolve, reject) => {
    let marks = 92
    if(marks >= 90){
        setTimeout(() => {
            resolve("New Laptop")
        }, 10000)
    }else{
        reject("No Laptop")
    }
})

console.log(promise)

promise.then((msg) => console.log(msg)).catch((err) => console.log(err))