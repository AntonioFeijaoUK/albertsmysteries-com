function checkPassword() {
  if (document.getElementById("password").value == "lisbon") {
    alert("Correct Password!");
    location.href = "https://antonio.cloud/";
  } else {
    alert("Wrong Password!");
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
