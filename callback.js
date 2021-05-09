// Checkingcred function validates the username and password using callback function
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

// Function redirect will load the next ToDO page if the credentials entered by
// user is correct or else will reload the index.html page again

function redirect(result) {
    if (result == true) {
        sessionStorage.setItem("user","verified");
        window.location.href = "ToDo.html";

    }
    else {
        window.location.reload();
        sessionStorage.clear();
    }
}

//Function validatelogin will prevent any unauthorised users from accessing the ToDo page
function validatelogin(){
    var sessionvalue = sessionStorage.getItem("user");
    if (sessionvalue == null || sessionvalue != "verified"){
        window.location.assign("index.html");
    } else {
    ajax();
    }
    }

    // Function logout will clear out session variable when user clicks on Logout in Nav Bar
    function logout(){
        sessionStorage.clear();
        window.location.href = "index.html";
        
    }





