var L08;
(function (L08) {
    //------------Variablen    
    var anzahl;
    var size;
    var posX = [];
    var posY = [];
    var color = [];
    window.addEventListener("load", init);
    //------------Prompt-Fenster
    var anzahlinput = prompt("Anzahl der Quadrate eingeben!");
    var anzahl = parseInt(anzahlinput); //String in Number umwandeln    
    var sizeinput = prompt("Größe der Quadrate zwischen 10 & 100 Pixel eingeben!");
    var size = parseInt(sizeinput); //String in Number umwandeln    
    //------------Generator Schleife der Positionen X + Y in Random % und der Random Farbe
    for (let i = 0; i < anzahl; i++) {
        posX[i] = 0 + Math.random() * 100;
        posY[i] = 0 + Math.random() * 100;
        color[i] = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    }
    function init() {
        for (let i = 0; i < anzahl; i++) {
            let h = document.createElement("div");
            document.body.appendChild(h);
            h.style.backgroundColor = color[i];
            h.style.width = size + "px";
            h.style.height = size + "px";
            h.style.position = "fixed";
            h.style.top = posX[i] + "%";
            h.style.right = posY[i] + "%";
        }
    }
})(L08 || (L08 = {})); //Ende
//# sourceMappingURL=script.js.map