function isEven(element){
    if(element%2===0){
        return true;
    }
    return false;
}
console.log(isEven(17));

function isEven(number){
    return number%2===0;
} //better way to do the same thing
console.log(isEven(19));
 
var isEven=function(number){
    return number%2===0;
}//storing the funtoin into a variable

var isEven=(Number)=>{ //this is an arrow funtion
    return Number%2===0;
}

var result=[2,4,6,8].every(isEven); //cheching every element . here isEven is not a fun it's reference
console.log(result);


//let's learn about call back
var output=[2,4,6,8].every((num)=>num%2===0); 
console.log(output);