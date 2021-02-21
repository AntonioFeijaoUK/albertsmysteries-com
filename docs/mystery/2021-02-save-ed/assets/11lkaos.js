console.log("Hello world!");


function clickSIM() {
    //alert("FIXE! Muito obrigado, vamos a isso!");
    document.getElementById("id-sim").innerHTML = "FIXE! Vamos a isso!"
    document.getElementById("NEXT").style.visibility = "visible";
    document.getElementById("id-nao").style.visibility = "hidden";

}

function clickNEXT() {
    location.href = "./12loopa.html";
}


function clickNAO() {
    //alert("Ohhh minha nossa....");
    document.getElementById("id-nao").style.visibility = "visible";
    document.getElementById("id-nao").innerHTML = "Está bem, vou ficar por Portugal então.";
    //location.href = "./";
}