namespace Aufgabe06 { //Block Gültigkeit  
    
        export class skiclass extends objectclass{
            //x: number;
            //y: number;
            //vx: number;
            //vy: number;
            //color: string;
//--------------------------------------------CONSTRUCTOR--------------------------------------------
            constructor(_x: number, _y: number) {
                super(_x, _y);
                console.log("Create Skie");
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";//zufällige Farbgebung
                this.x = _x;//Bekommt Werte aus der Init Schleife im script.ts
                this.y = _y;//Bekommt Werte aus der Init Schleife im script.ts
                this.vx = 6 + Math.random() * 2 - 1;//6 = v in x Richtung
                this.vy = 3.6 + Math.random() * 2;//3.6 = v in y Richtung
                }
//---------------------------------------------------------------------------------------------------           
                
                //Bewegung des Objekts
                move(): void {
                    this.x += this.vx;
                    this.y += this.vy;
                    //Schleife für die kontinuierlichen Skiefahrer
                    if (this.x > 800) {
                        this.x = 0;
                        this.y = 135;}
                    }
            
                //Zeichnung des Objekts
                draw(): void {
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, 0 + this.y);
                    crc2.lineTo(-8 + this.x, -6 + this.y);
                    crc2.lineTo(-6 + this.x, -8 + this.y);
                    crc2.lineTo(10 + this.x, 4 + this.y);
                    crc2.lineTo(8 + this.x, 6 + this.y);
                    crc2.lineTo(0 + this.x, 0 + this.y);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = "#3333cc";//Blau
                    crc2.fill();
                    //Beine
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, -2 + this.y);
                    crc2.lineTo(-3 + this.x, -2 + this.y);
                    crc2.lineTo(-3 + this.x, -20 + this.y);
                    crc2.lineTo(3 + this.x, -20 + this.y);
                    crc2.lineTo(2 + this.x, -2 + this.y);
                    crc2.lineTo(0 + this.x, -2 + this.y);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = "#444444";//Grau
                    crc2.fill();
                    //Torso
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, -20 + this.y);
                    crc2.lineTo(-8 + this.x, -20 + this.y);
                    crc2.lineTo(-5 + this.x, -40 + this.y);
                    crc2.lineTo(5 + this.x, -40 + this.y);
                    crc2.lineTo(8 + this.x, -20 + this.y);
                    crc2.lineTo(0 + this.x, -20 + this.y);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = this.color;//Zufällige Farbe
                    crc2.fill();
                    //Arme
                    crc2.beginPath();
                    crc2.moveTo(0 + this.x, -38 + this.y);
                    crc2.lineTo(-2 + this.x, -38 + this.y);
                    crc2.lineTo(-2 + this.x, -22 + this.y);
                    crc2.lineTo(2 + this.x, -22 + this.y);
                    crc2.lineTo(2 + this.x, -38 + this.y);
                    crc2.lineTo(0 + this.x, -38 + this.y);
                    crc2.closePath();
                    crc2.stroke();
                    crc2.fillStyle = this.color;//Zufällige Farbe
                    crc2.fill();
                    //Kopf
                    crc2.beginPath();
                    crc2.arc(this.x + 0, this.y + -48, 8, 0, 2 * Math.PI);
                    crc2.stroke();
                    crc2.fillStyle = "#ffcccc"; //Rosa-Hautfarben
                    crc2.fill();
                    }
                
                
        }//class close
}//Ende Block Gültigkeit