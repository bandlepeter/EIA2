var Aufgabe06;
(function (Aufgabe06) {
    class cloudclass extends Aufgabe06.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Cloud");
            this.color = "#ffffff";
            this.x = _x;
            this.y = _y;
            this.vx = 10;
            this.vy = 0;
        }
        //---------------------------------------------------------------------------------------------------           
        //Bewegung des Objekts
        move() {
            this.x += this.vx;
            this.y += this.vy;
            //Schleife für die kontinuierliche Wolke
            if (this.x < 800) {
                this.x = 0;
                this.y = 0;
            }
        }
        //Zeichnung des Objekts
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 50, this.y + 70, 40, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = this.color;
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y + 70, 40, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = this.color;
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 25, this.y + 50, 40, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = this.color;
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.cloudclass = cloudclass; //class close
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=cloudclass.js.map