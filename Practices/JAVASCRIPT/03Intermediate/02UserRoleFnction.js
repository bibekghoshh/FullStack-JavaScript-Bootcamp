function getUserRole(name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break; //break is not neccesery here because we are calling return keyword before break
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
        case "user":
            return `${name} is User with access to consume the content`;
        default:
            return `${name} is trial user did't verify his account`;
    }
}

console.log(getUserRole("ghosh","subadmin"));

var getRole=getUserRole("Bibek","admin");
console.log(getRole);