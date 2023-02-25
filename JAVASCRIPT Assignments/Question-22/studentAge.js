const age=[19,22,19,24,20,25,26,24,25,24];

age.sort();

let len=age.length;
let min=age[0];
console.log(min);

let max=age[len-1];
console.log(max);

let mid=len/2;
let median=(age[mid]+age[mid+1])/2;
console.log(median);


let average=()=>{
    let total=0;
    for (let i = 0; i <len; i++) {
        total=total+age[i];
    }
    return total/len;
}
let avg=average();
console.log(avg);

let ranges=max-min;
console.log(ranges);

console.log(Math.abs(min-avg));
console.log(Math.abs(max-avg));