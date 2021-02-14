console.log("Hello world!");

function myFunction() {
    document.getElementById("demo").innerHTML = "CLICAS-TE no botao! page index.js";
}


function clickSIM() {
    //alert("FIXE! Muito obrigado, vamos a isso!");
    document.getElementById("id-sim").innerHTML = "FIXE! Muito obrigado, vamos a isso!"
    document.getElementById("NEXT").style.visibility = "visible";
    document.getElementById("id-nao").style.visibility = "hidden";

}

function clickNEXT() {
    location.href = "./01kjhax.html";
}


function clickNAO() {
    //alert("Ohhh minha nossa....");
    document.getElementById("id-nao").style.visibility = "visible";
    document.getElementById("id-nao").innerHTML = "Ohhh minha nossa....";
    //location.href = "./";
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