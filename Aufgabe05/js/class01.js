var Aufgabe05;
(function (Aufgabe05) {
    class skiclass {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        moveanddrawupdate() {
            this.move();
            this.draw();
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        move() {
            this.x += 6 + Math.random() * 2 - 1; // hier experimentieren um
            this.y += 3.6 + Math.random() * 2; // andere Bewegungsmuster zu finden
            //aus schleife für die kontinuierlichen skiefahrer
            if (this.x > 800) {
                this.x = 0;
                this.y = 135;
            }
        }
        //move(): void {
        //this.x += Math.random() * 4 - 2; // hier experimentieren um
        //this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        //}
        draw() {
            //?crc2.fillStyle = this.color;
            //crc2.fillRect(this.x, this.y, this.size, this.size);
            //Skier
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.moveTo(0 + this.x, 0 + this.y);
            Aufgabe05.crc2.lineTo(-8 + this.x, -6 + this.y);
            Aufgabe05.crc2.lineTo(-6 + this.x, -8 + this.y);
            Aufgabe05.crc2.lineTo(10 + this.x, 4 + this.y);
            Aufgabe05.crc2.lineTo(8 + this.x, 6 + this.y);
            Aufgabe05.crc2.lineTo(0 + this.x, 0 + this.y);
            Aufgabe05.crc2.closePath();
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = "#3333cc";
            Aufgabe05.crc2.fill();
            //füße
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.moveTo(0 + this.x, -2 + this.y);
            Aufgabe05.crc2.lineTo(-3 + this.x, -2 + this.y);
            Aufgabe05.crc2.lineTo(-3 + this.x, -20 + this.y);
            Aufgabe05.crc2.lineTo(3 + this.x, -20 + this.y);
            Aufgabe05.crc2.lineTo(2 + this.x, -2 + this.y);
            Aufgabe05.crc2.lineTo(0 + this.x, -2 + this.y);
            Aufgabe05.crc2.closePath();
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = "#444444";
            Aufgabe05.crc2.fill();
            //ranzen
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.moveTo(0 + this.x, -20 + this.y);
            Aufgabe05.crc2.lineTo(-8 + this.x, -20 + this.y);
            Aufgabe05.crc2.lineTo(-5 + this.x, -40 + this.y);
            Aufgabe05.crc2.lineTo(5 + this.x, -40 + this.y);
            Aufgabe05.crc2.lineTo(8 + this.x, -20 + this.y);
            Aufgabe05.crc2.lineTo(0 + this.x, -20 + this.y);
            Aufgabe05.crc2.closePath();
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = this.color; //"#ff7700";
            Aufgabe05.crc2.fill();
            //arme
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.moveTo(0 + this.x, -38 + this.y);
            Aufgabe05.crc2.lineTo(-2 + this.x, -38 + this.y);
            Aufgabe05.crc2.lineTo(-2 + this.x, -22 + this.y);
            Aufgabe05.crc2.lineTo(2 + this.x, -22 + this.y);
            Aufgabe05.crc2.lineTo(2 + this.x, -38 + this.y);
            Aufgabe05.crc2.lineTo(0 + this.x, -38 + this.y);
            Aufgabe05.crc2.closePath();
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = this.color; //"#ff7700";
            Aufgabe05.crc2.fill();
            //schädel
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.arc(this.x + 0, this.y + -48, 8, 0, 2 * Math.PI);
            Aufgabe05.crc2.stroke();
            Aufgabe05.crc2.fillStyle = "#ffcccc";
            Aufgabe05.crc2.fill();
        }
    }
    Aufgabe05.skiclass = skiclass; //class close
})(Aufgabe05 || (Aufgabe05 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=class01.js.map