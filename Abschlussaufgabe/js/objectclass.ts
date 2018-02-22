namespace Flaschendrehen { //Block Gültigkeit  
//--------------------------------------------OBJECT--------------------------------------------
        export class objectclass{
            x: number;//Position in x
            y: number;//Position in y
            //vx: number;//v in x //Für Später Falls der Pfeil sich dreht oder sich was bewegt
            //vy: number;//v in y
            vr: number;//v Rotation
            color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number, _vr: number) {
            //console.log("Create Oject");//Später auskommentieren
            this.x = _x;
            this.y = _y;
            this.vr = _vr;
            }
//---------------------------------------------------------------------------------------------------         
                //Update Objekts
                update(): void {
                    this.move();
                    this.draw();
                    
                    }
                
                //Bewegung des Objekts
                move(): void {
                    //this.x += this.vx;
                    //this.y += this.vy;
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    
                    }
                
                
        }//class close
}//Ende Block Gültigkeit