namespace Flaschendrehen { //Block Gültigkeit  
    
        export class inputclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //vr: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number, _vr: number) {
                super(_x, _y, _vr);
                console.log("Create h2");
                this.color = "#ffffff";
                this.x = _x;
                this.y = _y;
                //this.vx = 0.2;
                //this.vy = 0;
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts
                move(): void {
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    crc2.font = "30px Arial";
crc2.fillText("Hello World",10,50);
                    
                    /*let schrift: HTMLDivElement = <HTMLDivElement>document.getElementById("mainid");
                    let h: HTMLElement = document.createElement("h2");
            
//                    document.body.appendChild(h);
                    //h.innerText = input1;
                    h.innerText = "test";
                    h.style.position = "fixed";
                    h.style.top = "10px";
                    h.style.left = "320px";
                    schrift.appendChild(h);//an kind anhängen*/
                    
                    
                }
        }//class close
}//Ende Block Gültigkeit