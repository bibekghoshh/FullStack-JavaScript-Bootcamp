var name="Bibek";

console.log("line number 3",name);

function sayName(){
    var name="Ghosh";
    console.log("line number 7",name);
    sayNameTwo();
    function sayNameTwo(){
        // var name="Sourav";
        console.log("line number 11",name);
            sayNameThree();
        function sayNameThree(){
            var name="ami tumi";
            console.log("line number 15",name);
        }
    }
}
sayName();