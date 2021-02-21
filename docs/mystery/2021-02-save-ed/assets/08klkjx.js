function clickNEXT() {
    location.href = "./09ksef.html";
}


function checkCODE() {
    let CODE = document.getElementById("enterCODE").value
    let code = CODE.toLocaleLowerCase()

    if (code == "tejo" || code == "rio tejo") {
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