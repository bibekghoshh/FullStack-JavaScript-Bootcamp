var testArray=[2,12,3,4,5,6,6,4,5,3];
console.log(testArray.fill(1));  //we can fill the entire array with 1
console.log(testArray.fill("bibek")); //we can fill the entire array with a Sting as well
console.log(testArray.fill("b",2));  //it start from index 2 and fill with string b
console.log(testArray.fill("a",1,6));

const mynumber=[23,54,12,65,87,23,12,32,54,67];
var result=mynumber.filter(num=>num<50);
console.log(result);

// slice and splice
console.log(mynumber.slice(3,9));

console.log(mynumber.splice(2,0,"bibek"));
console.log(mynumber);