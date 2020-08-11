
var user = "subadmin";

switch (user) {
    case "admin":
        console.log("You get the full access");
        break;

    case "subadmin":
        console.log("You can add or delete courses");
        break;
    case "user":
        console.log("You only view course");
        break;

    default:
        console.log("You are nothing");
        break;

}