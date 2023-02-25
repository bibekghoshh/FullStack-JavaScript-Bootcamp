
let num=3;
let s="";

for(let i=0;i<num;i++){

    for(let k=1;k<num-i;k++){
        s +=" ";
    }

    for(let j=0;j<(i*2)+1;j++){
        s +="*";
    }
    s +="\n";
}
console.log(s);
