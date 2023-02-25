
const prime=[];

for (let i = 0; i <= 100; i++) {
    if(i==0 || i==1){
        continue;
    }
    let j;
    for (j = 2; j < i; j++) {
        if(i%j==0){
            break;
        }
    }
    if(j==i){
        prime.push(i);
    }
}

console.log(prime);