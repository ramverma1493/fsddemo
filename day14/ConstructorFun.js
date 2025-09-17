function mobile(name, price, model){
    this.Name = name;
    this.Price = price;
    this.Model = model;
}

let mobile1 = new mobile("Samsung", 100000, "S25");
let mobile2 = new mobile("Apple", 125000, "iPhone 17");

console.log(mobile1);
console.log(mobile2);