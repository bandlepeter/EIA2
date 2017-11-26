namespace Aufgabe06 { //Block Gültigkeit  
    
        export class treeclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                console.log("Create Tree");
                this.x = _x + Math.random() * 270;//Position zufällig
                this.y = _y + Math.random() * 70;//Position zufällig
                this. vx = 0;//Bäume bewegen sich nicht
                this. vy = 0;//Bäume bewegen sich nicht
                }
//---------------------------------------------------------------------------------------------------       
            
                //Zeichnung des Objekts Baum
                draw(): void {
                    //Baumstamm  
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, 0 + this.y);
                    crc2.lineTo(-10 + this.x, 0 + this.y);
                    crc2.lineTo(-10 + this.x, -40 + this.y);
                    crc2.lineTo(10 + this.x, -40 + this.y);
                    crc2.lineTo(10 + this.x, 0 + this.y);
                    crc2.lineTo(0 + this.x, 0 + this.y);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = "#660000";
                    crc2.fill();
                    //Baumnadeln
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, -40 + this.y);
                    crc2.lineTo(-50 + this.x, -40 + this.y);
                    crc2.lineTo(0 + this.x, -190 + this.y);
                    crc2.lineTo(50 + this.x, -40 + this.y);
                    crc2.lineTo(0 + this.x, -40 + this.y);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = "#007700";
                    crc2.fill();
                    }
                
        }//class close
}//Ende Block Gültigkeit