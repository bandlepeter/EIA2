namespace Aufgabe05 { //Block Gültigkeit  
    
        export class snowclass{
            xsnow: number;//Position in x
            ysnow: number;//Position in y
            vx: number;//=Geschwindigkeit in x
            vy: number;//=Geschwindigkeit in y
            
            
            constructor(_x: number, _y: number) {
            this.xsnow = _x + Math.random() * 800;
            this.ysnow = _y + Math.random() * 600;
            this. vy = 2 + Math.random();
            }
            
            snowmoveanddrawupdate(): void {
            this.snowmove();
            this.snowdraw();
            }
            //Snow V
            snowmove(): void {
           
            this.ysnow += this.vy; //Fallgeschwindigkeit
            
            
                if (this.ysnow > 600) {
                this.ysnow = 0;
                }
                
                if (this.xsnow > 800) {
                this.xsnow = 0;
                }
                
            }
            //Snow Zeichnen
            snowdraw(): void {
                crc2.beginPath();
                crc2.arc(this.xsnow, this.ysnow, 2, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffffff";
                crc2.fill();
                }
            
    }



}