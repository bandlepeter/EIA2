window.addEventListener("load", popup);
var person = prompt("Hoi, wie lautet dein Name?");
function popup() {
    if (person != null) {
        document.getElementById("pid").innerHTML = "Hoi " + person + " alles klar?";
    }
}
//# sourceMappingURL=script.js.map