/*function add() {
    let a = 5
    let b = 6
    return a+b
    console.log(a)
}
console.log(add())
*/

function add(){ //  Parent Function
    let a = 5
    let b = 6
    console.log(a)
    return function print(){ // Child Function
        console.log(a+b)
    }
}

let print = add()
print()


// we all know once the function is called it delted all its memory
// but child function still have the access of the parent function memory