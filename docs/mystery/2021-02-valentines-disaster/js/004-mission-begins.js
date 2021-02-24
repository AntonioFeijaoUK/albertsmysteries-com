function clickNEXT() {
    // location.href = "index.html";
    alert("You clicked NEXT");
}



async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}


// echo -n 'yes' | shasum -a 256


async function checkCODE() {

    let CODE = document.getElementById("enterCODE").value;
    let code = CODE.toLocaleLowerCase();
    
    const digestHex = await digestMessage(code);
    console.log(digestHex);

  

    if (digestHex == "8a798890fe93817163b10b5f7bd2ca4d25d84c52739a645a889c173eee7d9d3d") {
        document.getElementById("checkCODE").innerHTML = 'You got it right!';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else if (code == "no") {
        document.getElementById("checkCODE").innerHTML = 'You got the NO message';
        //alert(' " ' + CODE + ' " is INCORRECT. Not so well done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "hidden";
    } else {
        document.getElementById("checkCODE").innerHTML = '"' + CODE + '" is NOT correct.';
        document.getElementById("NEXT").style.visibility = "hidden";
        //alert('"' + CODE + '" is NOT correct.');
        return false;
    }
}
