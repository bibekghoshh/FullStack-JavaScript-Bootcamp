
console.log(name);
var name="bibek";

console.log(name);
tipper("5");

function tipper(a){
    var bill= parseInt(a);
    console.log(bill+5);
}


tipper("a"); 

bigtip(1);
var bigtip=function(b){
    var bill=parseInt(b);
    console.log(bill+10);
}
bigtip(10);