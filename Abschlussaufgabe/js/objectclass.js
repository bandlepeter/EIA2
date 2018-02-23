//Flaschendrehen
//Name: Peter Bandle
//Matrikel: 256324
//Datum: 23.02.18
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Flaschendrehen;
(function (Flaschendrehen) {
    //--------------------------------------------OBJECT--------------------------------------------
    class objectclass {
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            //console.log("Create Oject");//Später auskommentieren
            this.x = _x;
            this.y = _y;
        }
        //---------------------------------------------------------------------------------------------------         
        //Update Objekts
        update() {
            this.move();
            this.draw();
        }
        //Bewegung des Objekts
        move() {
        }
        //Zeichnung des Objekts
        draw() {
        }
    }
    Flaschendrehen.objectclass = objectclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=objectclass.js.map