namespace Aufgabe06 { //Block Gültigkeit

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

//--------------------------------------------Variablen--------------------------------------------    
    let objectarray: objectclass[] = [];
    //Nicht mehr nötig weil die Werte in den objectarray geschrieben werden
    //manchmal lasse ich auskommentiertes im Code, damit ich mir merke für was es war 
    //oder bsp in den Klassen um zu sehen welche Optionen ich habe
    //let skiarray: skiclass[] = [];
    //let snowarray: snowclass[] = [];
    //let gondelarray: gondelclass[] = [];
    //let cloudarray: cloudclass[] = [];
    //let treearray: treeclass[] = [];

    let nski: number = 3;//n = Anzahl der Skiefahrer
    let nsnow: number = 50;//n = Anzahl der Schneeflocken
    let ncloud: number = 1;//n = Anzahl der Wolken
    let ngondel: number = 1;//n = Anzahl der Gondeln
    let ntree: number = 5;//n = Anzahl der Bäume
    //der Umweg über die n Variable ermöglicht eine flexieblere Anpassung
 
    var image : any;
    
 //--------------------------------------------INIT--------------------------------------------   
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
          
//--------------------------------------------INIT-SCHLEIFEN--------------------------------------------
        
        
        //Gondeln
        for (let i: number = 0; i < ngondel; i++) {
            let s: gondelclass = new gondelclass(800, 500);
            objectarray.push(s);
            }
        //Wolken
        for (let i: number = 0; i < ncloud; i++) {
            let s: cloudclass = new cloudclass(500, 0);
            objectarray.push(s);
            }
        //Skiefahrer    
        for (let i: number = 0; i < nski; i++) {
            let s: skiclass = new skiclass(0, 135);
            objectarray.push(s);
            }
        //Bäume
        for (let i: number = 0; i < ntree; i++) {
            let s: treeclass = new treeclass(50, 500);
            objectarray.push(s);
            }
        //Schnee
        for (let i: number = 0; i < nsnow; i++) {   
            let s: snowclass = new snowclass(0, 0);
            objectarray.push(s);
            }
        
        
        
        console.log(objectarray);
//--------------------------------------------save-image--------------------------------------------      
        //Bild wird gespeichert
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
//-----------------------------------------------------------------------------------------------
    
   
    

//--------------------------------------------ANIMATE--------------------------------------------
    function animate(): void {
        console.log("Timeout");     
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren (einfügen)
        crc2.putImageData(image, 0, 0);
           
        
        //Objekt - animate schleife
        for (let i: number = 0; i < objectarray.length; i++) {
            let s: objectclass = objectarray[i];
            s.update(); 
            console.log("animate schleife");
        }


        window.setTimeout(animate, 20);
    }


}//Ende Block Gültigkeit