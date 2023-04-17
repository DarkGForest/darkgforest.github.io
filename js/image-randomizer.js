var games = document.getElementById("games");
var nog = 2;

var utilities = document.getElementById("utilities");
var nou = 1;

var animations = document.getElementById("animations");
var noa = 2;

var music = document.getElementById("music");
var nom = 8;

changeImage()

function changeImage() {
    var m = "m" + Math.floor((Math.random()*nom) + 1);
    music.id = m;

    var g = "g" + Math.floor((Math.random()*nog) + 1);
    games.id = g;

    var u = "u" + Math.floor((Math.random()*nou) + 1);
    utilities.id = u;

    var a = "a" + Math.floor((Math.random()*noa) + 1);
    animations.id = a;


}
setInterval(changeImage, 5000)