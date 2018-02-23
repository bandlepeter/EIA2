//Flaschendrehen
//Name: Peter Bandle
//Matrikel: 256324
//Datum: 23.02.18
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Flaschendrehen;
(function (Flaschendrehen) {
    //--------------------------------------------Aufrufe-------------------------------------------- 
    window.addEventListener("load", init);
    Flaschendrehen.input1 = prompt("Geben Sie hier die Punkte auf die der Pfeil zeigen kann an: Punkt 1");
    if (Flaschendrehen.input1 == "") {
        Flaschendrehen.input1 = "Wahrheit";
    }
    ; //Falls nichts eingegeben automatisch Generierter Inhalt
    Flaschendrehen.input2 = prompt("Punkt 2");
    if (Flaschendrehen.input2 == "") {
        Flaschendrehen.input2 = "Pflicht";
    }
    ;
    Flaschendrehen.input3 = prompt("Punkt 3");
    if (Flaschendrehen.input3 == "") {
        Flaschendrehen.input3 = "Wahrheit";
    }
    ;
    Flaschendrehen.input4 = prompt("Punkt 4");
    if (Flaschendrehen.input4 == "") {
        Flaschendrehen.input4 = "Pflicht";
    }
    ;
    Flaschendrehen.input5 = prompt("Punkt 5");
    if (Flaschendrehen.input5 == "") {
        Flaschendrehen.input5 = "Wahrheit";
    }
    ;
    Flaschendrehen.input6 = prompt("Punkt 6");
    if (Flaschendrehen.input6 == "") {
        Flaschendrehen.input6 = "Pflicht";
    }
    ;
    Flaschendrehen.input7 = prompt("Punkt 7");
    if (Flaschendrehen.input7 == "") {
        Flaschendrehen.input7 = "Wahrheit";
    }
    ;
    Flaschendrehen.input8 = prompt("Punkt 8");
    if (Flaschendrehen.input8 == "") {
        Flaschendrehen.input8 = "Pflicht";
    }
    ;
    //--------------------------------------------Variablen--------------------------------------------   
    let objectarray = [];
    let randomtime;
    Flaschendrehen.state = false;
    var image;
    //--------------------------------------------Init-------------------------------------------- 
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Flaschendrehen.crc2 = canvas.getContext("2d");
        console.log(Flaschendrehen.crc2);
        console.log("setTimeout");
        //Button Event
        document.getElementById("buttonid").addEventListener("click", startbutton);
        //Beschriftungen im Canvas (Punkte)
        //Koordinaten wirken einwenig wirr, jedoch geben die Koordinaten den Wortanfang an
        Flaschendrehen.crc2.font = "20px Helvetica";
        Flaschendrehen.crc2.fillText(Flaschendrehen.input1, 290, 50);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input2, 470, 150);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input3, 550, 320);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input4, 470, 500);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input5, 290, 610);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input6, 120, 500);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input7, 30, 320);
        Flaschendrehen.crc2.fillText(Flaschendrehen.input8, 120, 150);
        //--------------------------------------------INIT-SCHLEIFEN--------------------------------------------
        //Kreis
        /*for (let i: number = 0; i < 1; i++) {
            let s: circleclass = new circleclass(320, 320, 0);
            objectarray.push(s);
            }*/
        //Schriften    
        /*for (let i: number = 0; i < 1; i++) {
                let s: inputclass = new inputclass(0, 0);
                objectarray.push(s);
                }*/
        //Pfeil
        for (let i = 0; i < 1; i++) {
            let s = new Flaschendrehen.arrowclass(320, 320);
            objectarray.push(s);
        }
        //console.log(objectarray);
        //--------------------------------------------save-image--------------------------------------------      
        //Bild wird gespeichert
        image = Flaschendrehen.crc2.getImageData(0, 0, 640, 640);
        animate();
        //console.log("Save Image")
    }
    //-----------------------------------------------------------------------------------------------
    //--------------------------------------------ANIMATE--------------------------------------------
    function animate() {
        //console.log("Timeout");     
        Flaschendrehen.crc2.clearRect(0, 0, 640, 640); // hier Hintergrund restaurieren (einfügen)
        Flaschendrehen.crc2.putImageData(image, 0, 0);
        //Objekt - animate schleife
        for (let i = 0; i < objectarray.length; i++) {
            let s = objectarray[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    //--------------------------------------------Start-Rotation--------------------------------------------    
    function startbutton() {
        Flaschendrehen.crc2.restore(); //muss vor save und translate
        Flaschendrehen.crc2.save(); //Speicherung des Canvaszustand vor Rotation
        Flaschendrehen.crc2.translate(320, 320); //verschiebung des Canvas in den Canvasmittelpunkt für die Animierte Roration
        randomtime = 4000 + Math.random() * 500; //4000ms Mindestdrehzeit + zufällig zwischen 0 und 500ms
        window.setTimeout(spintime, randomtime); //Aufruf zu rotationsende
        //console.log("Button Test")
        Flaschendrehen.state = true; //Aktiviert die animierte Rotation bei Buttonklick
    }
    function spintime() {
        //console.log("Button spin")
        Flaschendrehen.state = false; //beendet rotation nach timeout
    }
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=main.js.map