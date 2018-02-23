//Flaschendrehen
//Name: Peter Bandle
//Matrikel: 256324
//Datum: 23.02.18
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Flaschendrehen { //Block Gültigkeit  
    
        export class arrowclass extends objectclass{
            //x: number;
            //y: number;
           
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                //console.log("Create Arrow");
                this.x = _x;
                this.y = _y;
                
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts (Drehung Pfeil)
                move(): void {
                    //Rotation solange state auf true gesetzt ist
                    if (state == true) {//gesteuert von der Zeitfunktion die durch den Button ausgelöst wurde
                        //crc2.save();//bringt nur was wenn restore geht
                        //Auskommentiert dreht es sich richtig jedoch oben im Eck 
                        //crc2.translate(this.x, this.y);//verschiebt Objekt und nicht den Koordinatenmittelpunkt
                        crc2.rotate(1);//in Rad //Wert 1 sah am elegantesten aus
                        ////crc2.restore();//Blockiert an dieser Stelle Animation
                        }
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    //console.log("draw Arrow")
                    
                    /*// normaler/ursprünglicher Pfeil, wurde wegen Rotation abgeändert
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, 50 + this.y);
                    crc2.lineTo(-50 + this.x, 50 + this.y);
                    crc2.lineTo(0 + this.x, -100 + this.y);
                    crc2.lineTo(50 + this.x, 50 + this.y);
                    crc2.lineTo(0 + this.x, 50 + this.y);*/
                    
                    //Pfeil (mit Mittelpunkt in sich selbst)
                    crc2.beginPath();
                    crc2.moveTo(0, 30);
                    crc2.lineTo(-50, 50);
                    crc2.lineTo(0, -100);
                    crc2.lineTo(50, 50);
                    crc2.lineTo(0, 30);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = "#3333cc";//Blau
                    crc2.fill();
                }
        }//class close
}//Ende Block Gültigkeit