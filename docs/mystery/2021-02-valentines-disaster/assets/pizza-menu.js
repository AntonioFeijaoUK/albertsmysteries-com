function clickNEXT() {
    location.href = "./pizza-menu.html";
}


function checkCODE() {

    let CODE = document.getElementById("enterCODE").value
    let code = CODE.toLocaleLowerCase()

    if (code == "yes") {
        document.getElementById("checkCODE").innerHTML = 'Coming soon..';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else if (code == "no") {
        document.getElementById("checkCODE").innerHTML = 'Coming soon..';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else {
        document.getElementById("checkCODE").innerHTML = '"' + CODE + '" is NOT correct.';
        //alert('"' + CODE + '" is NOT correct.');
        return false;
    }
}