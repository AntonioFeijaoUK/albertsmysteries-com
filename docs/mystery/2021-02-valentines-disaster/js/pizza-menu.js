function clickNEXT() {
    location.href = "pizza-menu.html";
}


function checkCODE() {

    let CODE = document.getElementById("enterCODE").value
    let code = CODE.toLocaleLowerCase()

    if (code == "yes") {
        document.getElementById("checkCODE").innerHTML = 'Yes - Comming soon...';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else if (code == "no") {
        document.getElementById("checkCODE").innerHTML = 'No - Comming soon...';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "hidden";
    } else {
        document.getElementById("checkCODE").innerHTML = '"' + CODE + '" is NOT correct.';
        document.getElementById("NEXT").style.visibility = "hidden";
        //alert('"' + CODE + '" is NOT correct.');
        return false;
    }
}