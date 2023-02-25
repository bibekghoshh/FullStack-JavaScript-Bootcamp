let weight=75;
let height=165;

let bmi = (weight / ((height * height) / 10000)).toFixed(2);

if(bmi<18.5){
    console.log("UnderWeight");
}else if(bmi>=18.5 && bmi<=24.9){
    console.log("Normal");
}else if(bmi>=25 && bmi<=29.9){
    console.log("OverWeight");
}else{
     console.log("Obese");
}