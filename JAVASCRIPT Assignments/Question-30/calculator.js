let num1=23;
let num2=12;
let op="-";

switch (op) {
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default: console.log("Invalid operator");
        break;
}