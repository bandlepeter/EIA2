namespace L08 {
//------------Variablen    
    var anzahl: number;
    var size: number;
    var posX: number[] = [];
    var posY: number[] = [];
    var color: string[] = [];

    
    
    window.addEventListener("load", init);
//------------Prompt-Fenster
        var anzahlinput: string = prompt("Anzahl der Quadrate eingeben!");
        var anzahl: number = parseInt(anzahlinput); //String in Number umwandeln    
        
        var sizeinput: string = prompt("Größe der Quadrate zwischen 10 & 100 Pixel eingeben!");
        var size: number = parseInt(sizeinput); //String in Number umwandeln    

    
    
//------------Generator Schleife der Positionen X + Y in Random % und der Random Farbe
    for (let i: number = 0; i < anzahl; i++) {
            posX[i] = 0 + Math.random() * 100;
            posY[i] = 0 + Math.random() * 100;
            color[i] = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            
        }
    
    function init(): void {
        for (let i: number = 0; i < anzahl; i++) {
        
            let h: HTMLDivElement = document.createElement("div");
            
            document.body.appendChild(h);
            h.style.backgroundColor = color[i];
            h.style.width = size + "px";
            h.style.height = size + "px";
            h.style.position = "fixed";
            h.style.top = posX[i] + "%";
            h.style.right = posY[i] + "%";
        }
    }   
    
    
    
}//Ende