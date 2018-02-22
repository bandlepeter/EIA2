var Flaschendrehen;
(function (Flaschendrehen) {
    //--------------------------------------------OBJECT--------------------------------------------
    class objectclass {
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y, _vr) {
            //console.log("Create Oject");//Später auskommentieren
            this.x = _x;
            this.y = _y;
            this.vr = _vr;
        }
        //---------------------------------------------------------------------------------------------------         
        //Update Objekts
        update() {
            this.move();
            this.draw();
        }
        //Bewegung des Objekts
        move() {
            //this.x += this.vx;
            //this.y += this.vy;
        }
        //Zeichnung des Objekts
        draw() {
        }
    }
    Flaschendrehen.objectclass = objectclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=objectclass.js.map