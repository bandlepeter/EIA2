var Aufgabe06;
(function (Aufgabe06) {
    //--------------------------------------------OBJECT--------------------------------------------
    class objectclass {
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            console.log("Create Oject");
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
            this.x += this.vx;
            this.y += this.vy;
        }
        //Zeichnung des Objekts
        draw() {
        }
    }
    Aufgabe06.objectclass = objectclass; //class close
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=objectclass.js.map