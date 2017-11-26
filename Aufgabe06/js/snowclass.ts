namespace Aufgabe06 { //Block Gültigkeit  
    
        export class snowclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                console.log("Create Snow");
                this.color = "#ffffff";//weiß
                this.x = _x + Math.random() * 800;
                this.y = _y + Math.random() * 600;
                this. vx = 0;
                this. vy = 2 + Math.random();
                }
//---------------------------------------------------------------------------------------------------       
                
                //Bewegung des Objekts Schnee
                move(): void {
                    this.x += this.vx;
                    this.y += this.vy;
                    //Schleifen für den kontinuierlichen Schnee
                    if (this.y > 600) {
                        this.y = 0;
                        }
                    if (this.x > 800) {
                        this.x = 0;
                        }
                    }
            
                //Zeichnung des Objekts Schnee
                draw(): void {
                    crc2.beginPath();
                    crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
                    crc2.fillStyle = this.color;
                    crc2.fill();
                    }
                
        }//class close
}//Ende Block Gültigkeit