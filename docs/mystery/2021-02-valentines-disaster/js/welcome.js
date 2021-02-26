function clickNEXT() {
    location.href = "pizza-menu.html";
}


function checkCODE() {

    let CODE = document.getElementById("enterCODE").value
    let code = CODE.toLocaleLowerCase()

    if (code == "yes") {
        document.getElementById("checkCODE").innerHTML = 'Amazing news! Your help will be required to solve a mystery of utmost importance to the world!';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else if (code == "no") {
        document.getElementById("checkCODE").innerHTML = 'Fine, let your brain wither and die...';
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