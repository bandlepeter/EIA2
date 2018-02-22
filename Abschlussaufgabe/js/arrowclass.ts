namespace Flaschendrehen { //Block Gültigkeit  
    
        export class arrowclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //vr: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number, _vr: number) {
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
                move(): void {
                    if (state == true) {
                        //crc2.translate(this.x, this.y);
                        
                        //crc2.save();//bringt nur was wenn Restore geht
                        //Auskommentiert dreht es sich richtig jedoch oben im Eck 
                        //crc2.translate(this.x, this.y);//verschiebt Objekt und nicht den Koordinatenmittelpunkt
                        crc2.rotate(1);//in Rad //Wert 1 sah am elegantesten aus
                        //crc2.restore();//geht nicht da dann der Pfeil sich nicht mehr dreht
                        
                        
                        
                        //crc2.setTransform(1,0,0,1,0,0);
                        //console.log("animate rotat");
                    //else (state 
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
                draw(): void {
                    //console.log("draw Arrow")
                    
                    /* normaler pfeil
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, 50 + this.y);
                    crc2.lineTo(-50 + this.x, 50 + this.y);
                    crc2.lineTo(0 + this.x, -100 + this.y);
                    crc2.lineTo(50 + this.x, 50 + this.y);
                    crc2.lineTo(0 + this.x, 50 + this.y);*/
                    
                    crc2.beginPath();
                    crc2.moveTo(0, 50);
                    crc2.lineTo(-50, 50);
                    crc2.lineTo(0, -100);
                    crc2.lineTo(50, 50);
                    crc2.lineTo(0, 50);
                    
                    
                    crc2.closePath();
                    
                    crc2.stroke();
                    
                    crc2.fillStyle = "#3333cc";//Blau
                    
                    crc2.fill();
                    
                    
                }
        }//class close
}//Ende Block Gültigkeit