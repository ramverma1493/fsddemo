// If any function return an obeject then its a Factory Function.   Work without Construtor.

function product(name, price, launch, quantity){
    return{
        Name:name,
        Price:price,
        Launch:launch,
        Quantity:quantity
    }
}

let product1 = product("Laptop", 500000, "01/01/2025", 50);
let product2 = product("Mobile", 400000, "10/12/25", 40);

console.log(product1);
console.log(product2);