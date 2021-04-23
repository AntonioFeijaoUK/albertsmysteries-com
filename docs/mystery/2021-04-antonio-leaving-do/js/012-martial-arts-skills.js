function clickNEXT() {
    // encode URL
    // encodedURL = btoa("index.html");
    encodedURL = "MDEzLWFjdGl2YXRlLXByb3RvY29sLmh0bWw=";
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



    if (digestHex == "be3ef6caf939604947e078ace5bede80a2a86ba92e3142f670991544752d01ff" || digestHex == "6cf8c954239eaf137f5188ad533b73ef9cf96fed3c8fa66bdd5be6b601e9f813") {
        document.getElementById("checkCODE").innerHTML = 'You got at least one right! Try with format "NAME and NAME"';
        //alert(' " ' + CODE + ' " is CORRECT. Well Done!');
        //location.href = "./02kjdht.html";
        document.getElementById("NEXT").style.visibility = "hidden";
    } else if (digestHex == "d623d59838b087ad5f796d2dcdf9a7d9379abfb1ca9bbcfb0cd4be16412dec02" || digestHex == "6ea4d00dfe998e256c8f77834fcad81bb879c7cc6c5d3431f4e312c05f9b7261") {
        document.getElementById("checkCODE").innerHTML = 'Hurray!';
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