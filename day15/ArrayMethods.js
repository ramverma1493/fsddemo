let arr = [1, 2, 4, 5, 6]
console.log(arr)

// add to last
arr.push(3)
console.log(arr)

//remove from last
arr.pop()
console.log(arr);

// add from start
arr.unshift(0)
console.log(arr)

//remove from start
arr.shift()
console.log(arr)

// calculate length
console.log(arr.length)

// join 
console.log(arr.join("*"))

// Slice the array

let slice = arr.slice(0, 2)
console.log(slice)

// delete from mid and also add more number
let deletedArr = arr.splice(1, 2, 0, 9) // deleted method alwasy return deleted value
console.log(arr)
console.log(deletedArr)