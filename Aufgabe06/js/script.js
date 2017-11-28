var Aufgabe06;
(function (Aufgabe06) {
    window.addEventListener("load", init);
    //--------------------------------------------Variablen--------------------------------------------    
    let objectarray = [];
    //Nicht mehr nötig weil die Werte in den objectarray geschrieben werden
    //manchmal lasse ich auskommentiertes im Code, damit ich mir merke für was es war 
    //oder bsp in den Klassen um zu sehen welche Optionen ich habe
    //let skiarray: skiclass[] = [];
    //let snowarray: snowclass[] = [];
    //let gondelarray: gondelclass[] = [];
    //let cloudarray: cloudclass[] = [];
    //let treearray: treeclass[] = [];
    let nski = 3; //n = Anzahl der Skiefahrer
    let nsnow = 50; //n = Anzahl der Schneeflocken
    let ncloud = 1; //n = Anzahl der Wolken
    let ngondel = 1; //n = Anzahl der Gondeln
    let ntree = 5; //n = Anzahl der Bäume
    //der Umweg über die n Variable ermöglicht eine flexieblere Anpassung
    var image;
    //--------------------------------------------INIT--------------------------------------------   
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe06.crc2 = canvas.getContext("2d");
        console.log(Aufgabe06.crc2);
        console.log("setTimeout");
        //Atmosphäre
        Aufgabe06.crc2.fillStyle = "#99ffff";
        Aufgabe06.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(300, 100);
        Aufgabe06.crc2.lineTo(420, 400);
        Aufgabe06.crc2.lineTo(80, 400);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#999999";
        Aufgabe06.crc2.fill();
        //Berg2
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(400, 110);
        Aufgabe06.crc2.lineTo(450, 400);
        Aufgabe06.crc2.lineTo(100, 400);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#AAAAAA";
        Aufgabe06.crc2.fill();
        //Berg3
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(150, 100);
        Aufgabe06.crc2.lineTo(350, 400);
        Aufgabe06.crc2.lineTo(100, 400);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#AAAAAA";
        Aufgabe06.crc2.fill();
        //Piste
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(0, 120);
        Aufgabe06.crc2.lineTo(800, 600);
        Aufgabe06.crc2.lineTo(0, 600);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#ffffff";
        Aufgabe06.crc2.fill();
        //Drahtseil
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(0, 30);
        Aufgabe06.crc2.lineTo(800, 500);
        Aufgabe06.crc2.stroke();
        //--------------------------------------------INIT-SCHLEIFEN--------------------------------------------
        //Gondeln
        for (let i = 0; i < ngondel; i++) {
            let s = new Aufgabe06.gondelclass(800, 500);
            objectarray.push(s);
        }
        //Wolken
        for (let i = 0; i < ncloud; i++) {
            let s = new Aufgabe06.cloudclass(500, 0);
            objectarray.push(s);
        }
        //Skiefahrer    
        for (let i = 0; i < nski; i++) {
            let s = new Aufgabe06.skiclass(0, 135);
            objectarray.push(s);
        }
        //Bäume
        for (let i = 0; i < ntree; i++) {
            let s = new Aufgabe06.treeclass(50, 500);
            objectarray.push(s);
        }
        //Schnee
        for (let i = 0; i < nsnow; i++) {
            let s = new Aufgabe06.snowclass(0, 0);
            objectarray.push(s);
        }
        console.log(objectarray);
        //--------------------------------------------save-image--------------------------------------------      
        //Bild wird gespeichert
        image = Aufgabe06.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //-----------------------------------------------------------------------------------------------
    //--------------------------------------------ANIMATE--------------------------------------------
    function animate() {
        console.log("Timeout");
        Aufgabe06.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren (einfügen)
        Aufgabe06.crc2.putImageData(image, 0, 0);
        //Objekt - animate schleife
        for (let i = 0; i < objectarray.length; i++) {
            let s = objectarray[i];
            s.update();
            console.log("animate schleife");
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=script.js.map