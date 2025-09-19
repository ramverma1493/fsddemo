// function Declaration

function add(a, b){
    console.log(a+b);
}

// Function Expression

let sum = function (a, b){
    console.log(a+b);
}

// Arrow Function

let addition = (a, b) => console.log(a + b);

add(5,6);
sum(11, 12);
addition(9, 10);