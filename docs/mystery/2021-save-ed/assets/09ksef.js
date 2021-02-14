function clickNEXT() {
    location.href = "./10xxld.html";
}


function checkCODE() {
    let CODE = document.getElementById("enterCODE").value
    let code = CODE.toLocaleLowerCase()

    if (code == "60" || code == "60 km/h") {
        document.getElementById("checkCODE").innerHTML = ' "' + CODE + '" is CORRECT!!';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else {
        document.getElementById("checkCODE").innerHTML = '"' + CODE + '" is NOT correct.';
        //alert('"' + CODE + '" is NOT correct.');
        return false;
    }
}