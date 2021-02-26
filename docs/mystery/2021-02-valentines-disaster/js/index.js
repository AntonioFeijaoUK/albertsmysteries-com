function clickNEXT() {
    location.href = "welcome.html";
}


function checkCODE() {

    let CODE = document.getElementById("enterCODE").value
    let code = CODE.toLocaleLowerCase()

    if (code == "albert004") {
        document.getElementById("checkCODE").innerHTML = ' "' + CODE + '" is CORRECT!!';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("checkCODE").innerHTML = '"' + CODE + '" is NOT correct.';
        document.getElementById("NEXT").style.visibility = "hidden";
        //alert('"' + CODE + '" is NOT correct.');
        return false;
    }
}