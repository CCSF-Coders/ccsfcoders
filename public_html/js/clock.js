/*
 * javascript source for a client side clock bound to element #clock
 * Note: Thank you for having a C-semantic syntax!
 * Note #2: I hate you for not having a real debugger.
*/
var startClock = function()
{
    updateTime();
    setInterval("updateTime()", 1000);
};

var updateTime = function()
{
    var date = new Date();

    var hour = date.getHours();
    var AP = "";

    if(hour == 0) {
        hour = 12;
        AP = "AM";
    }
    else if(hour <= 11) {
        AP = "AM";
    }
    else if(hour == 12) {
        AP = "PM";
    }
    else if(hour >= 13) {
        hour -= 12;
        AP = "PM";
    }
    
    if(hour < 10) {
        hour = "0" + hour;
    }

    var sec = date.getSeconds();
    if(sec < 10) {
        sec = "0" + sec;
    }

    var min = date.getMinutes();
    if(min < 10) {
        min = "0" + min;
    }

    var current = (date.getMonth() + 1) + "/" + date.getDate() + "/"
        + (date.getYear() < 1000 ? date.getYear() + 1900 : date.getYear())
        + "<br>" + hour + ":" + min + ":" + sec + " " + AP;

    document.getElementById("clock").innerHTML = current;
};

window.onload = startClock;
