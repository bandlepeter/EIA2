var Aufgabe06;
(function (Aufgabe06) {
    class gondelclass extends Aufgabe06.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Gondel");
            this.color = "#ff0000"; //Rot
            this.x = _x;
            this.y = _y;
            this.vx = 0.8; //6 = v in x Richtung
            this.vy = 0.47; //3.6 = v in y Richtung
        }
        //---------------------------------------------------------------------------------------------------
        move() {
            this.x -= this.vx;
            this.y -= this.vy;
            //Schleife für die kontinuierlichen Gondeln
            if (this.x < 0) {
                this.x = 800;
                this.y = 500;
            }
        }
        //Zeichnung des Objekts
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(this.x + 0, this.y + 0);
            Aufgabe06.crc2.lineTo(this.x + 0, this.y + 30);
            Aufgabe06.crc2.lineTo(this.x + 20, this.y + 30);
            Aufgabe06.crc2.lineTo(this.x + 20, this.y + 55);
            Aufgabe06.crc2.lineTo(this.x + -20, this.y + 55);
            Aufgabe06.crc2.lineTo(this.x + -20, this.y + 30);
            Aufgabe06.crc2.lineTo(this.x + 0, this.y + 30);
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = this.color;
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.gondelclass = gondelclass; //class close
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=gondelclass.js.map