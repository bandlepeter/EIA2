namespace Flaschendrehen { //Block Gültigkeit  
    
        export class inputclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //vr: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                //console.log("Create Schrift");
                
                this.x = _x;
                this.y = _y;
                //this.vx = 0.2;
                //this.vy = 0;
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts
                move(): void {
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    //Koordinaten wirken einwenig wirr, jedoch geben die Koordinaten den Wortanfang an
        crc2.font = "20px Helvetica";
        crc2.fillText(input1,290,50);
        crc2.fillText(input2,470,150);
        crc2.fillText(input3,550,320);
        crc2.fillText(input4,470,500);
        crc2.fillText(input5,290,610);
        crc2.fillText(input6,120,500);
        crc2.fillText(input7,30,320);
        crc2.fillText(input8,120,150);
                    
                    
                    
                }
        }//class close
}//Ende Block Gültigkeit