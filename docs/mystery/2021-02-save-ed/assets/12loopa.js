function clickNEXT() {
    location.href = "https://eduardoestrela.com/";
}


function clickSIM() {
    //alert("FIXE! Muito obrigado, vamos a isso!");
    document.getElementById("id-sim").innerHTML = "Bravo, vamos lá nesta aventura!"
    document.getElementById("NEXT").style.visibility = "visible";
    document.getElementById("id-nao").style.visibility = "hidden";

}


function clickNAO() {
    //alert("Ohhh minha nossa....");
    document.getElementById("id-nao").style.visibility = "visible";
    document.getElementById("id-nao").innerHTML = "Foi uma boa experiência, mas não haverá próxima : (      ";
    //location.href = "./";
}