function checkingcred() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    validate(username, password, redirect);
    return false;
}
function validate(username, password, callback) {

    if (username == "admin" && password == "12345") {

        callback(true);
    }
    else if (username == "admin" && password != "12345") {
        alert("Password is incorrect");
        callback(false);
    }
    else if (username != "admin" && password == "12345") {
        alert("username is incorrect");
        callback(false);
    }
    else {
        alert("Username and Password is incorrect");
        callback(false);
    }
}
function redirect(result) {
    if (result == true) {
        document.loginform.action="ToDo.html";
        
    }
    else {
        window.location.reload();
    }
}


