//Flaschendrehen
//Name: Peter Bandle
//Matrikel: 256324
//Datum: 23.02.18
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Flaschendrehen;
(function (Flaschendrehen) {
    class arrowclass extends Flaschendrehen.objectclass {
        //x: number;
        //y: number;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y) {
            super(_x, _y);
            //console.log("Create Arrow");
            this.x = _x;
            this.y = _y;
        }
        //---------------------------------------------------------------------------------------------------           
        //Bewegung des Objekts (Drehung Pfeil)
        move() {
            //Rotation solange state auf true gesetzt ist
            if (Flaschendrehen.state == true) {
                //crc2.save();//bringt nur was wenn restore geht
                //Auskommentiert dreht es sich richtig jedoch oben im Eck 
                //crc2.translate(this.x, this.y);//verschiebt Objekt und nicht den Koordinatenmittelpunkt
                Flaschendrehen.crc2.rotate(1); //in Rad //Wert 1 sah am elegantesten aus
            }
        }
        //Zeichnung des Objekts
        draw() {
            //console.log("draw Arrow")
            /*// normaler/ursprünglicher Pfeil, wurde wegen Rotation abgeändert
            crc2.beginPath();
            crc2.moveTo(0 + this.x, 50 + this.y);
            crc2.lineTo(-50 + this.x, 50 + this.y);
            crc2.lineTo(0 + this.x, -100 + this.y);
            crc2.lineTo(50 + this.x, 50 + this.y);
            crc2.lineTo(0 + this.x, 50 + this.y);*/
            //Pfeil (mit Mittelpunkt in sich selbst)
            Flaschendrehen.crc2.beginPath();
            Flaschendrehen.crc2.moveTo(0, 30);
            Flaschendrehen.crc2.lineTo(-50, 50);
            Flaschendrehen.crc2.lineTo(0, -100);
            Flaschendrehen.crc2.lineTo(50, 50);
            Flaschendrehen.crc2.lineTo(0, 30);
            Flaschendrehen.crc2.closePath();
            Flaschendrehen.crc2.stroke();
            Flaschendrehen.crc2.fillStyle = "#3333cc"; //Blau
            Flaschendrehen.crc2.fill();
        }
    }
    Flaschendrehen.arrowclass = arrowclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=arrowclass.js.map