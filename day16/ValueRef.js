// Shallow coppy because of refence type
//  Outpur = [1, 2] for both 

let fridge  = [1, 2, 3]
let refrigerator = fridge  // not stored value to new location
fridge.pop()

console.log(fridge)
console.log(refrigerator)

// Deep copy because of value type
// Output : 10, 5

let a = 5
b = a // b stored value of a to new memory location
a = a + 5

console.log(a)
console.log(b)