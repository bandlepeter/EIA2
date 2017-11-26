namespace Aufgabe06 { //Block Gültigkeit  
    
        export class gondelclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                console.log("Create Gondel");
                this.color = "#ff0000";//Rot
                this.x = _x;
                this.y = _y;
                this.vx = 0.8;//6 = v in x Richtung
                this.vy = 0.47;//3.6 = v in y Richtung
                }
//---------------------------------------------------------------------------------------------------
           
                move(): void {
                    this.x -= this.vx;
                    this.y -= this.vy;
                    //Schleife für die kontinuierlichen Gondeln
                    if (this.x < 0) {
                        this.x = 800;
                        this.y = 500;}
                    }
                //Zeichnung des Objekts
                draw(): void {
                    crc2.beginPath();
                    crc2.moveTo(this.x + 0, this.y + 0);
                    crc2.lineTo(this.x + 0, this.y + 30);
                    crc2.lineTo(this.x + 20, this.y + 30);
                    crc2.lineTo(this.x + 20, this.y + 55);
                    crc2.lineTo(this.x + -20, this.y + 55);
                    crc2.lineTo(this.x + -20, this.y + 30);
                    crc2.lineTo(this.x + 0, this.y + 30);
                    crc2.stroke();
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    }
                
        }//class close
}//Ende Block Gültigkeit