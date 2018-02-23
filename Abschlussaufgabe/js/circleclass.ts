namespace Flaschendrehen { //Block Gültigkeit  
    
        export class circleclass extends objectclass{
            //x: number;
            //y: number;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                console.log("Create Circle");
                this.x = _x;
                this.y = _y; 
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts
                move(): void {
                    
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    crc2.beginPath();
                    crc2.arc(this.x + 0, this.y + 0, 300, 0, 2 * Math.PI);
                    //crc2.fillStyle = this.color;
                    crc2.fill();
                    crc2.stroke();
                    }
                
        }//class close
}//Ende Block Gültigkeit