var user="user";

switch(user){
    case "admin":
        console.log("admin gets full access");
        break;
    case "subadmin":
        console.log("subadmin gets access to Create/delete courses");
        break;
    case "testprep":
        console.log("testprep gets access to create\ delete tests");
        break;
    case "user":
        console.log("get access to consume to the contant");
}