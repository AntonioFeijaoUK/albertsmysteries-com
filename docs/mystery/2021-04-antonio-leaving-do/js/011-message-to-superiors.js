function clickNEXT() {
    // encode URL
    // encodedURL = btoa("index.html");
    encodedURL = "MDEyLXRoZS1zYWZlaG91c2UuaHRtbA==";
    console.log("encodedURL : " + encodedURL);

    // decode URL
    decodedURL = atob(encodedURL);
    console.log("decodedURL : " + encodedURL)

    // location.href = "index.html";
    location.href = decodedURL;

    //alert("You clicked NEXT and encodedURL : " + encodedURL + " and decodedURL " + decodedURL);
}



async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
}


// echo -n 'yes' | shasum -a 256


async function checkCODE() {

    let CODE = document.getElementById("enterCODE").value;
    let code = CODE.toLocaleLowerCase();

    const digestHex = await digestMessage(code);
    console.log(digestHex);



    if (digestHex == "e9daf3e4235e6aa3faa3364394c76ccc6d660912fc0f9d526d80289521d3cbba") {
        document.getElementById("checkCODE").innerHTML = 'You got it right!';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "visible";
    } else if (code == "no") {
        document.getElementById("checkCODE").innerHTML = 'Ohhh no...';
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