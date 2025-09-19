let fridge = [1, 2, 3]
let refrigerator = [...fridge]  // spread Operator used for deep Copy of reference type

fridge.push(4)

console.log(fridge)
console.log(refrigerator)

// Problem with ... spread operator 
// Spread operator only give deep copy when array and  object dont have nested value

console.log("....................")

let fridge1 = [1, 2, 3, [4, 5, 6]]
let refrigerator2 = [...fridge1]  // spread Operator can not do deep copy

fridge1[1] = 10
fridge1[3][1] = 20

console.log(fridge1)
console.log(refrigerator2)


// to deep copy nested array 
// JASON.parse and JASON.stringify

let arr = [1, 2, 3, [4, 5, 6]]
let str = JSON.stringify(arr)
console.log(str)
console.log(typeof str)

let arrCopy = JSON.parse(str)

arr[3][1] = 20
console.log(arr)
console.log(arrCopy)
console.log(typeof arrCopy)