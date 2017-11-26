var Aufgabe06;
(function (Aufgabe06) {
    class snowclass extends Aufgabe06.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Snow");
            this.color = "#ffffff"; //weiß
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
            this.vx = 0;
            this.vy = 2 + Math.random();
        }
        //---------------------------------------------------------------------------------------------------       
        //Bewegung des Objekts Schnee
        move() {
            this.x += this.vx;
            this.y += this.vy;
            //Schleifen für den kontinuierlichen Schnee
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 800) {
                this.x = 0;
            }
        }
        //Zeichnung des Objekts Schnee
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = this.color;
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.snowclass = snowclass; //class close
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=snowclass.js.map