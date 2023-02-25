var Authenticated=true;

if(Authenticated){
    console.log("show signout button");
}else{
    console.log("show login options");
}

Authenticated?console.log("show signout button"): console.log("show login options");