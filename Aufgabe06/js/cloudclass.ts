namespace Aufgabe06 { //Block Gültigkeit  
    
        export class cloudclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                console.log("Create Cloud");
                this.color = "#ffffff";
                this.x = _x;
                this.y = _y;
                this.vx = 0.2;
                this.vy = 0;
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts
                move(): void {
                    this.x += this.vx;
                    this.y += this.vy;
                    //Schleife für die kontinuierliche Wolken
                    if (this.x > 800) {
                        this.x = 0;
                        this.y = 0;}
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    crc2.beginPath();
                    crc2.arc(this.x + 50, this.y + 70, 40, 0, 2 * Math.PI);
                    crc2.fillStyle = this.color;
                    crc2.fill();

                    crc2.beginPath();
                    crc2.arc(this.x, this.y + 70, 40, 0, 2 * Math.PI);
                    crc2.fillStyle = this.color;
                    crc2.fill();

                    crc2.beginPath();
                    crc2.arc(this.x + 25, this.y + 50, 40, 0, 2 * Math.PI);
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    }
                
        }//class close
}//Ende Block Gültigkeit