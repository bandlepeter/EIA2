var Flaschendrehen;
(function (Flaschendrehen) {
    class arrowclass extends Flaschendrehen.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //vr: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y, _vr) {
            super(_x, _y, _vr);
            console.log("Create Arrow");
            this.color = "#ffffff";
            this.x = _x;
            this.y = _y;
            //this.vx = 0.2;
            //this.vy = 0;
        }
        //---------------------------------------------------------------------------------------------------           
        //Bewegung des Objekts (Drehung Pfeil)
        move() {
            if (Flaschendrehen.state == true) {
                //crc2.translate(this.x, this.y);
                //crc2.save();//bringt nur was wenn Restore geht
                //Auskommentiert dreht es sich richtig jedoch oben im Eck 
                //crc2.translate(this.x, this.y);//verschiebt Objekt und nicht den Koordinatenmittelpunkt
                Flaschendrehen.crc2.rotate(1); //in Rad //Wert 1 sah am elegantesten aus
            }
            //crc2.scale(this.x, this.y)//Verzerrt
            //crc2.translate(this.x, this.y);
            //crc2.translate(this.x, this.y);
            //                    crc2.translate(this.x, this.y);
            //crc2.rotate(Math.PI/4);
            //crc2.rotate(1);
            //crc2.drawImage()
            //this.vr
            //this.x += this.vx;
            //this.y += this.vy;
            //Schleife für die kontinuierliche Wolken
            //if (this.x > 800) {
            //this.x = 0;
            //this.y = 0;}
        }
        //Zeichnung des Objekts
        draw() {
            //console.log("draw Arrow")
            /* normaler pfeil
            crc2.beginPath();
            crc2.moveTo(0 + this.x, 50 + this.y);
            crc2.lineTo(-50 + this.x, 50 + this.y);
            crc2.lineTo(0 + this.x, -100 + this.y);
            crc2.lineTo(50 + this.x, 50 + this.y);
            crc2.lineTo(0 + this.x, 50 + this.y);*/
            Flaschendrehen.crc2.beginPath();
            Flaschendrehen.crc2.moveTo(0, 50);
            Flaschendrehen.crc2.lineTo(-50, 50);
            Flaschendrehen.crc2.lineTo(0, -100);
            Flaschendrehen.crc2.lineTo(50, 50);
            Flaschendrehen.crc2.lineTo(0, 50);
            Flaschendrehen.crc2.closePath();
            Flaschendrehen.crc2.stroke();
            Flaschendrehen.crc2.fillStyle = "#3333cc"; //Blau
            Flaschendrehen.crc2.fill();
        }
    }
    Flaschendrehen.arrowclass = arrowclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=arrowclass.js.map