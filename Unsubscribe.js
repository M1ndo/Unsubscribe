var i = 0;

var myVar = setInterval(myTimer, 200);

function myTimer () {

    var els = document.getElementById("contents").getElementsByClassName("ytd-subscribe-button-renderer");

    if (i < els.length) {

        els[i].querySelector('.ytd-subscribe-button-renderer').click();

        setTimeout(function () {

            var unSubBtn = document.getElementById("confirm-button").click();

        }, 500);

        setTimeout(function () {

            els[i].parentNode.removeChild(els[i]);

        }, 1000);
    }

    i++;

    console.log(i + " unsubscribed");
    console.log(els.length + " remaining");
}