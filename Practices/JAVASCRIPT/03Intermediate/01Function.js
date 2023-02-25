 function sayhello(){
    console.log("hey there, Bibek here");
 }

 sayhello();  //calling a function
 sayhello;  //referencing a functioin


 function sayhello(name){
    console.log(`hey there, ${name}. how are you man? `);
 }
 sayhello("bibek");


 function namasty(){
    return "Hello in India";
 }
 var greeting=namasty();  //strong the funtion return value into the variable
 console.log(namasty());     //printing the function return value
 console.log(greeting); //printing the variable value