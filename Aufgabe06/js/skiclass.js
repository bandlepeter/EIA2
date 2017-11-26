var Aufgabe06;
(function (Aufgabe06) {
    class skiclass extends Aufgabe06.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Skie");
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //zufällige Farbgebung
            this.x = _x; //Bekommt Werte aus der Init Schleife im script.ts
            this.y = _y; //Bekommt Werte aus der Init Schleife im script.ts
            this.vx = 6 + Math.random() * 2 - 1; //6 = v in x Richtung
            this.vy = 3.6 + Math.random() * 2; //3.6 = v in y Richtung
        }
        //---------------------------------------------------------------------------------------------------           
        //Bewegung des Objekts
        move() {
            this.x += this.vx;
            this.y += this.vy;
            //Schleife für die kontinuierlichen Skiefahrer
            if (this.x > 800) {
                this.x = 0;
                this.y = 135;
            }
        }
        //Zeichnung des Objekts
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(0 + this.x, 0 + this.y);
            Aufgabe06.crc2.lineTo(-8 + this.x, -6 + this.y);
            Aufgabe06.crc2.lineTo(-6 + this.x, -8 + this.y);
            Aufgabe06.crc2.lineTo(10 + this.x, 4 + this.y);
            Aufgabe06.crc2.lineTo(8 + this.x, 6 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, 0 + this.y);
            Aufgabe06.crc2.closePath();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = "#3333cc"; //Blau
            Aufgabe06.crc2.fill();
            //Beine
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(0 + this.x, -2 + this.y);
            Aufgabe06.crc2.lineTo(-3 + this.x, -2 + this.y);
            Aufgabe06.crc2.lineTo(-3 + this.x, -20 + this.y);
            Aufgabe06.crc2.lineTo(3 + this.x, -20 + this.y);
            Aufgabe06.crc2.lineTo(2 + this.x, -2 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, -2 + this.y);
            Aufgabe06.crc2.closePath();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = "#444444"; //Grau
            Aufgabe06.crc2.fill();
            //Torso
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(0 + this.x, -20 + this.y);
            Aufgabe06.crc2.lineTo(-8 + this.x, -20 + this.y);
            Aufgabe06.crc2.lineTo(-5 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(5 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(8 + this.x, -20 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, -20 + this.y);
            Aufgabe06.crc2.closePath();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = this.color; //Zufällige Farbe
            Aufgabe06.crc2.fill();
            //Arme
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(0 + this.x, -38 + this.y);
            Aufgabe06.crc2.lineTo(-2 + this.x, -38 + this.y);
            Aufgabe06.crc2.lineTo(-2 + this.x, -22 + this.y);
            Aufgabe06.crc2.lineTo(2 + this.x, -22 + this.y);
            Aufgabe06.crc2.lineTo(2 + this.x, -38 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, -38 + this.y);
            Aufgabe06.crc2.closePath();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = this.color; //Zufällige Farbe
            Aufgabe06.crc2.fill();
            //Kopf
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 0, this.y + -48, 8, 0, 2 * Math.PI);
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = "#ffcccc"; //Rosa-Hautfarben
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.skiclass = skiclass; //class close
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=skiclass.js.map