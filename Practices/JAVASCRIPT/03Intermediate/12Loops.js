for(let i=0;i<=5;i++){
    console.log(i);
}
const myState=["bengal",931,"bibek","punjub","hariyana","bihar","uttrakhand"];

for(let j=0;j<myState.length;j++){
    // console.log(myState[j]);
    if(typeof myState[j] !=="string") continue;

    // console.log(myState[j]);
}

myState.forEach((ok)=>console.log(ok));