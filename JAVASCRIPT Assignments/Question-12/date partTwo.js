var date=new Date();

let year=date.getFullYear();
let month=date.getMonth()+1;
let datee=date.getDate();
let day=date.getDay();
let hours=date.getHours()+1;
let minutes=date.getMinutes();

let dateFormat=`-${year}-${month}-${datee} ${hours}:${minutes}`;
let dateFormat2=`-${datee}-${month}-${year} ${hours}:${minutes}`;
let dateFormat3=`-${datee}/${month}/${year} ${hours}:${minutes}`;


console.log(dateFormat);
console.log(dateFormat2);
console.log(dateFormat3);