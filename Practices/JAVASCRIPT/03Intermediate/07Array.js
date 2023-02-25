var country=["india","usa","russia","canada","america","bengal"];
console.log(country);
country[2]="bharat";
console.log(country);

// console.log(country.length);

var user=new Array("Bibek","bibek7478@gmail.com",3,23,true);

user[0]="Ghosh";

console.log(user);
user.pop();  //delete the last element
console.log(user);
user.unshift("Bibek"); //add a new value at the first by shifting other values index by +1
console.log(user);
user.shift();  //remove the at first value
console.log(user);

console.log(user.indexOf(23)); //searching for an element

console.log(Array.from("BibekGhosh")); //converting a string into char array
