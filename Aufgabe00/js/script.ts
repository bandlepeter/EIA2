window.addEventListener("load", popup);

var person: any = prompt("Hoi, wie lautet dein Name?");

function popup(): void {
if (person!= null) {
    document.getElementById("pid").innerHTML = "Hoi " + person + " alles klar?";
    }
}