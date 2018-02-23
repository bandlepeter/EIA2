//Flaschendrehen
//Name: Peter Bandle
//Matrikel: 256324
//Datum: 23.02.18
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Flaschendrehen { //Block Gültigkeit  
//--------------------------------------------OBJECT--------------------------------------------
        export class objectclass{
            x: number;//Position in x
            y: number;//Position in y
            
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
            //console.log("Create Oject");//Später auskommentieren
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
                    
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    
                    }
                
                
        }//class close
}//Ende Block Gültigkeit