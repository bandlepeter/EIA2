namespace Aufgabe05 { //Block Gültigkeit  
    
        export class snowclass{
            xsnow: number;
            ysnow: number;
            dxsnow: number;
            dysnow: number;
            
            
            constructor(_x: number, _y: number) {
            this.xsnow = _x;
            this.ysnow = _y;
            }
            
            snowmoveanddrawupdate(): void {
            this.snowmove();
            this.snowdraw();
            }
            snowmove(): void {
           // this.xsnow += 6 + Math.random() * 2 - 1; // hier experimentieren um
            this.ysnow += 2; // andere Bewegungsmuster zu finden
            this.xsnow+= 0 + Math.random();
            if (this.ysnow > 600) {
                this.ysnow = 0;}
                
            if (this.xsnow > 800) {
                this.xsnow = 0;}
                
            }
            snowdraw(): void {
                crc2.beginPath();
                crc2.arc(this.xsnow, this.ysnow, 2, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffffff";
                crc2.fill();
            
            }
            
}



}