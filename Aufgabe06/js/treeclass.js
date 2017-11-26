var Aufgabe06;
(function (Aufgabe06) {
    class treeclass extends Aufgabe06.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tree");
            this.x = _x + Math.random() * 270; //Position zufällig
            this.y = _y + Math.random() * 70; //Position zufällig
            this.vx = 0; //Bäume bewegen sich nicht
            this.vy = 0; //Bäume bewegen sich nicht
        }
        //---------------------------------------------------------------------------------------------------       
        //Zeichnung des Objekts Baum
        draw() {
            //Baumstamm  
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(0 + this.x, 0 + this.y);
            Aufgabe06.crc2.lineTo(-10 + this.x, 0 + this.y);
            Aufgabe06.crc2.lineTo(-10 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(10 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(10 + this.x, 0 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, 0 + this.y);
            Aufgabe06.crc2.closePath();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = "#660000";
            Aufgabe06.crc2.fill();
            //Baumnadeln
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.moveTo(0 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(-50 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, -190 + this.y);
            Aufgabe06.crc2.lineTo(50 + this.x, -40 + this.y);
            Aufgabe06.crc2.lineTo(0 + this.x, -40 + this.y);
            Aufgabe06.crc2.closePath();
            Aufgabe06.crc2.stroke();
            Aufgabe06.crc2.fillStyle = "#007700";
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.treeclass = treeclass; //class close
})(Aufgabe06 || (Aufgabe06 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=treeclass.js.map