namespace Flaschendrehen { //Block Gültigkeit  
    
        export class circleclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //vr: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number, _vr: number) {
                super(_x, _y, _vr);
                console.log("Create Circle");
                this.color = "#ffffff";
                this.x = _x;
                this.y = _y;
                //this.vx = 0.2;
                //this.vy = 0;
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts
                move(): void {
                    //this.x += this.vx;
                    //this.y += this.vy;
                    //Schleife für die kontinuierliche Wolken
                    //if (this.x > 800) {
                        //this.x = 0;
                        //this.y = 0;}
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    crc2.beginPath();
                    crc2.arc(this.x + 0, this.y + 0, 300, 0, 2 * Math.PI);
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    crc2.stroke();
                    }
                
        }//class close
}//Ende Block Gültigkeit