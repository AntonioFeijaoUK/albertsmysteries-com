// source https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

var timeleft = 120;

var downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("TIMER").innerHTML = "Time's up!";
    } else {
        document.getElementById("TIMER").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
}, 1000);