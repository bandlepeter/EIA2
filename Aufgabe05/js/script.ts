namespace Aufgabe05 { //Block Gültigkeit

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    //export let squares: SquareInfo[] = [];
    
    //let skisquare: skiclass;
    let skisquares: skiclass[] = [];
    
    //let snowsquare: snowclass;
    let snowsquares: snowclass[] = [];

    let wolkeX: number[] = [];
    let wolkeY: number[] = [];
    let gondelX: number[] = [];
    let gondelY: number[] = [];
    
 
    
    var image : any;
    
    
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");
       
        
        //Atmosphäre
        crc2.fillStyle = "#99ffff";
        crc2.fillRect(0, 0, 800, 600);

        //Berg1
        crc2.beginPath();
        crc2.moveTo(300, 100);
        crc2.lineTo(420, 400);
        crc2.lineTo(80, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#999999";
        crc2.fill();

        //Berg2
        crc2.beginPath();
        crc2.moveTo(400, 110);
        crc2.lineTo(450, 400);
        crc2.lineTo(100, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#AAAAAA";
        crc2.fill();

        //Berg3
        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.lineTo(350, 400);
        crc2.lineTo(100, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#AAAAAA";
        crc2.fill();

        //Piste
        crc2.beginPath();
        crc2.moveTo(0, 120);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Drahtseil
        crc2.beginPath();
        crc2.moveTo(0, 30);
        crc2.lineTo(800, 500);
        crc2.stroke();
          

        for (let i: number = 0; i < 5; i++) {
            let x: number = 50 + Math.random() * 270;
            let y: number = 500 + Math.random() * 70;
            drawTree(x, y);
        }
        
        for (let i: number = 0; i < 1; i++) {
            gondelX[i] = 600;
            gondelY[i] = 380;
        }
        
        for (let i: number = 0; i < 1; i++) {
            wolkeX[i] = 500;
            wolkeY[i] = 0;
        }
        
        //schnee - init schleife - constructor aufruf
        for (let i: number = 0; i < 200; i++) {
            snowsquares[i] = new snowclass(0, 0);
            
        }
        //skiefahrer - init schleife - constructor aufruf
        for (let i: number = 0; i < 3; i++) {
            skisquares[i] = new skiclass(0, 135);
        }
        
//-----------------------------------------------------------------        
        //Bild wird gespeichert
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
//-----------------------------------------------------------------  
    //Gondel
    function gondel(_x: number, _y: number): void{
        //Gondel
        crc2.beginPath();
        crc2.moveTo(_x + 0, _y + 0);
        crc2.lineTo(_x + 0, _y + 30);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x + 20, _y + 55);
        crc2.lineTo(_x + -20, _y + 55);
        crc2.lineTo(_x + -20, _y + 30);
        crc2.lineTo(_x + 0, _y + 30);
        crc2.stroke();
        crc2.fillStyle = "#ff0000";
        crc2.fill();
        
    }
    //Wolke1 
    function wolke(_x: number, _y: number): void{
        crc2.beginPath();
        crc2.arc(_x + 50, _y + 70, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x, _y + 70, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 25, _y + 50, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    
    
    function drawTree(_x: number, _y: number): void {


        //Baumstamm  
        crc2.beginPath();
        crc2.moveTo(0 + _x, 0 + _y);
        crc2.lineTo(-10 + _x, 0 + _y);
        crc2.lineTo(-10 + _x, -40 + _y);
        crc2.lineTo(10 + _x, -40 + _y);
        crc2.lineTo(10 + _x, 0 + _y);
        crc2.lineTo(0 + _x, 0 + _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#660000";
        crc2.fill();
        //Baumnadeln
        crc2.beginPath();
        crc2.moveTo(0 + _x, -40 + _y);
        crc2.lineTo(-50 + _x, -40 + _y);
        crc2.lineTo(0 + _x, -190 + _y);
        crc2.lineTo(50 + _x, -40 + _y);
        crc2.lineTo(0 + _x, -40 + _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#007700";
        crc2.fill();
    }

    //----ANIMATE---------------------------------------
    function animate(): void {
        console.log("Timeout");     
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren (einfügen)
        crc2.putImageData(image, 0, 0);
           
        //skiefahrer - animate schleife
        for (let i: number = 0; i < skisquares.length; i++) {
            let s: skiclass = skisquares[i];
            s.moveanddrawupdate(); 
        }
        
        
        //schnee - animate schleife
        for (let i: number = 0; i < snowsquares.length; i++) {
            let snows: snowclass = snowsquares[i];
            snows.snowmoveanddrawupdate();   
        }
        
            //Gondel
            for (let i: number = 0; i < gondelX.length; i++) {
            if (gondelX[i] < 0) {
                gondelX[i] = 800;
                gondelY[i] = 500;
            }
            
            gondelX[i] -= 0.8;//8; // -800 / 10;
            gondelY[i] -= 0.47;//4.7; // -470 / 10;
            gondel(gondelX[i], gondelY[i]);
            }
            
             //Wolke 
            for (let i: number = 0; i < wolkeX.length; i++) {
            if (wolkeX[i] > 800) {
                wolkeX[i] = 0;
            }
            wolkeX[i] += + 0.1; // geschwindigkeit Wolke X
            wolkeY[i] += + 0; // keine höhenänderung
            wolke(wolkeX[i], wolkeY[i]);
            }


        window.setTimeout(animate, 20);
    }


}//Ende Block Gültigkeit