var overlay = document.getElementById("header-overlay");


function tick() {
    var x = overlay.style.backgroundPositionX.replace("px", "");
    var y = overlay.style.backgroundPositionY.replace("px", "");

    overlay.style.backgroundPositionX = (x - 2) + "px"
    overlay.style.backgroundPositionY = (y - .5) + "px"
}
setInterval(tick, 10);