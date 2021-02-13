console.log("Hello world!");

function myFunction() {
  document.getElementById("demo").innerHTML = "CLICAS-TE no botao! page index.js";
}


function clickSIM() {
  alert("FIXE! Muito obrigado, vamos a isso!");
  location.href = "./01/";
}


function clickNAO() {
  alert("Ohhh minha nossa....");
  location.href = "./";
}


function checkPassword() {
  if (document.getElementById("password").value == "pudding lane") {
    alert("Correct!");
    location.href = "https://www.albertsmysteries.com/20210206rita/02/";
  } else {
    alert("Wrong!");
    return false;
  }
}
