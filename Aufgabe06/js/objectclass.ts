namespace Aufgabe06 { //Block Gültigkeit  
//--------------------------------------------OBJECT--------------------------------------------
        export class objectclass{
            x: number;//Position in x
            y: number;//Position in y
            vx: number;//v in x
            vy: number;//v in y
            color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
            console.log("Create Oject");
            this.x = _x;
            this.y = _y;
            }
//---------------------------------------------------------------------------------------------------         
                //Update Objekts
                update(): void {
                    this.move();
                    this.draw();
                    
                    }
                
                //Bewegung des Objekts
                move(): void {
                    this.x += this.vx;
                    this.y += this.vy;
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    
                    }
                
                
        }//class close
}//Ende Block Gültigkeit