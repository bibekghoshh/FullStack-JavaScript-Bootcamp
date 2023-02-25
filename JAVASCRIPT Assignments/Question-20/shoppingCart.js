const shoppingcart=["Milk","Coffee","Tea","Honey"];
console.log(shoppingcart);

if(!shoppingcart.includes("Meat")){
    shoppingcart.unshift("Meat");
    console.log(shoppingcart);
}
if(!shoppingcart.includes("Sugar")){
    shoppingcart.push("Sugar");
    console.log(shoppingcart);
}

delete shoppingcart[4];
console.log(shoppingcart);

shoppingcart[3]="green tea";

console.log(shoppingcart);