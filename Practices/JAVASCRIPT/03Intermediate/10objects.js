var user={
    firstname:"bibek",
    lastname:"ghosh",
    role:"admin",
    loginCount:10,
    googleSignIn:true
};
console.log(user.firstname); //most efficiant way to acess the object element
console.log(user["lastname"]); //anathoer way to access but not the recommend way 
user.loginCount=15;  //this is how we can modifie a value in a object
console.table(user);  //printing the object value in the table format

// assinment

var mobilephone={
        name:"poco",
        model:"m4 pro 4g",
        price:11000,
        camera:"64mp",
        ram:"8gb",
        rom:"64bg",
        color:"blue",
        size:"6.2 inch",
        country:"India",
};
console.table(mobilephone);