var Flaschendrehen;
(function (Flaschendrehen) {
    class circleclass extends Flaschendrehen.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //vr: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y, _vr) {
            super(_x, _y, _vr);
            console.log("Create Circle");
            this.color = "#ffffff";
            this.x = _x;
            this.y = _y;
            //this.vx = 0.2;
            //this.vy = 0;
        }
        //---------------------------------------------------------------------------------------------------           
        //Bewegung des Objekts
        move() {
            //this.x += this.vx;
            //this.y += this.vy;
            //Schleife für die kontinuierliche Wolken
            //if (this.x > 800) {
            //this.x = 0;
            //this.y = 0;}
        }
        //Zeichnung des Objekts
        draw() {
            Flaschendrehen.crc2.beginPath();
            Flaschendrehen.crc2.arc(this.x + 0, this.y + 0, 300, 0, 2 * Math.PI);
            Flaschendrehen.crc2.fillStyle = this.color;
            Flaschendrehen.crc2.fill();
            Flaschendrehen.crc2.stroke();
        }
    }
    Flaschendrehen.circleclass = circleclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=circleclass.js.map