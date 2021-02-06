function checkPassword() {
    if (document.getElementById("password").value == "bomb") {
        alert("Correct!");
        location.href = "https://www.albertsmysteries.com/20210206rita/08/";
    } else {
        alert("Wrong!");
        return false;
    }
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}