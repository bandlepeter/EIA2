namespace Aufgabe05 { //Block Gültigkeit  
    
        export class skiclass{
            x: number;
            y: number;
            dx: number;
            dy: number;
            color: string;
            
            constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            }
            
            moveanddrawupdate(): void {
            this.move();
            this.draw();
            }
            setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            move(): void {
            this.x += 6 + Math.random() * 2 - 1; // hier experimentieren um
            this.y += 3.6 + Math.random() * 2; // andere Bewegungsmuster zu finden
                
            //aus schleife für die kontinuierlichen skiefahrer
            if (this.x > 800) {
                this.x = 0;
                this.y = 135;}
            }
            //move(): void {
            //this.x += Math.random() * 4 - 2; // hier experimentieren um
            //this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            //}

            draw(): void {
            //?crc2.fillStyle = this.color;
            //crc2.fillRect(this.x, this.y, this.size, this.size);
            //Skier
            crc2.beginPath();
            crc2.moveTo(0 + this.x, 0 + this.y);
            crc2.lineTo(-8 + this.x, -6 + this.y);
            crc2.lineTo(-6 + this.x, -8 + this.y);
            crc2.lineTo(10 + this.x, 4 + this.y);
            crc2.lineTo(8 + this.x, 6 + this.y);
            crc2.lineTo(0 + this.x, 0 + this.y);
        
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#3333cc";
            crc2.fill();
            //füße
            crc2.beginPath();
            crc2.moveTo(0 + this.x, -2 + this.y);
            crc2.lineTo(-3 + this.x, -2 + this.y);
            crc2.lineTo(-3 + this.x, -20 + this.y);
            crc2.lineTo(3 + this.x, -20 + this.y);
            crc2.lineTo(2 + this.x, -2 + this.y);
            crc2.lineTo(0 + this.x, -2 + this.y);
            
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#444444";
            crc2.fill();
            //ranzen
            crc2.beginPath();
            crc2.moveTo(0 + this.x, -20 + this.y);
            crc2.lineTo(-8 + this.x, -20 + this.y);
            crc2.lineTo(-5 + this.x, -40 + this.y);
            crc2.lineTo(5 + this.x, -40 + this.y);
            crc2.lineTo(8 + this.x, -20 + this.y);
            crc2.lineTo(0 + this.x, -20 + this.y);
        
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;//"#ff7700";
            crc2.fill();
            //arme
            crc2.beginPath();
            crc2.moveTo(0 + this.x, -38 + this.y);
            crc2.lineTo(-2 + this.x, -38 + this.y);
            crc2.lineTo(-2 + this.x, -22 + this.y);
            crc2.lineTo(2 + this.x, -22 + this.y);
            crc2.lineTo(2 + this.x, -38 + this.y);
            crc2.lineTo(0 + this.x, -38 + this.y);
        
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;//"#ff7700";
            crc2.fill();
        
            //schädel
            crc2.beginPath();
            crc2.arc(this.x + 0, this.y + -48, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#ffcccc";
            crc2.fill();
        
            }
            
            
            
            
        }//class close
    
}//Ende Block Gültigkeit