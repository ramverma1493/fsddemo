let mobile = {
    name:"Samsung",
    price:"50000",
    model:"S24 Ultra"
}

console.log(mobile.name); 

// Access all key of Object

for(let key in mobile){
    console.log(key+":"+mobile[key]);
}