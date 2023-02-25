var num=10;

let i;

for (i = 2; i <num; i++) {
    if(num%i==0){
        console.log("not prime");
        break;
    }
}
if(i==num){
    console.log("Prime");
}