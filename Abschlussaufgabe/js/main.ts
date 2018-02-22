//Flaschendrehen
//Name: Peter Bandle
//Matrikel: 256324
//Datum: 23.02.18
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Flaschendrehen { //Block Gültigkeit  

//--------------------------------------------Aufrufe-------------------------------------------- 
    window.addEventListener("load", init);
//--------------------------------------------Prompt-Variablen--------------------------------------------     
    export  let input1: string;
                input1 = prompt("Geben Sie hier die Punkte auf die der Pfeil zeigen kann an: Punkt 1");
                if (input1 == ""){input1 = "Wahrheit"};
    export  let input2: string;
                input2 = prompt("Punkt 2");
                if (input2 == ""){input2 = "Pflicht"};
    export  let input3: string;
                input3 = prompt("Punkt 3");
                if (input3 == ""){input3 = "Wahrheit"};
    export  let input4: string;
                input4 = prompt("Punkt 4");
                if (input4 == ""){input4 = "Pflicht"};
    export  let input5: string;
                input5 = prompt("Punkt 5");
                if (input5 == ""){input5 = "Wahrheit"};
    export  let input6: string;
                input6 = prompt("Punkt 6");
                if (input6 == ""){input6 = "Pflicht"};
    export  let input7: string;
                input7 = prompt("Punkt 7");
                if (input7 == ""){input7 = "Wahrheit"};
    export  let input8: string;
                input8 = prompt("Punkt 8");
                if (input8 == ""){input8 = "Pflicht"};
    
//--------------------------------------------CRC2--------------------------------------------       
    export let crc2: CanvasRenderingContext2D;
    
    
//--------------------------------------------Variablen--------------------------------------------   
    let objectarray: objectclass[] = [];
    let randomtime: number;
    export let state: boolean;
        state = false;
    let angle : number;
        angle = 0;//Startwertwinkel
    var image : any;
    
    
//--------------------------------------------Init-------------------------------------------- 
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");
        
        //Button Event
        document.getElementById("buttonid").addEventListener("click", startbutton);
        //Hintergrund
        //crc2.fillStyle = "#99ffff";
        //crc2.fillRect(0, 0, 640, 640);
        
        /*let schrift: HTMLDivElement = <HTMLDivElement>document.getElementById("mainid");
                    let h: HTMLElement = document.createElement("h2");
            
//                    document.body.appendChild(h);
                    //h.innerText = input1;
                    h.innerText = input1;
                    h.style.position = "fixed";
                    h.style.top = "80px";
                    h.style.left = "300px";
                    schrift.appendChild(h);//an kind anhängen*/
        
        crc2.font = "20px Helvetica";
        crc2.fillText(input1,300,50);
        crc2.fillText(input2,470,150);
        crc2.fillText(input3,550,320);
        crc2.fillText(input4,470,500);
        crc2.fillText(input5,300,610);
        crc2.fillText(input6,120,500);
        crc2.fillText(input7,30,320);
        crc2.fillText(input8,120,150);
    
//--------------------------------------------INIT-SCHLEIFEN--------------------------------------------
    /*//Kreis
        for (let i: number = 0; i < 1; i++) {
            let s: circleclass = new circleclass(320, 320, 0);
            objectarray.push(s);
            }*/
    //Schriften    
    /*for (let i: number = 0; i < 8; i++) {
            let s: inputclass = new inputclass(320, 320, angle);
            objectarray.push(s);
            }   */ 
    //Pfeil
        for (let i: number = 0; i < 1; i++) {
            let s: arrowclass = new arrowclass(320, 320, angle);
            objectarray.push(s);
            }
    
    
//console.log(objectarray);
//--------------------------------------------save-image--------------------------------------------      
        //Bild wird gespeichert
        image = crc2.getImageData(0, 0, 640, 640);
        animate();
        console.log("Save Image")
    }
//-----------------------------------------------------------------------------------------------

    
    
    

//--------------------------------------------ANIMATE--------------------------------------------
    function animate(): void {
        //console.log("Timeout");     
        crc2.clearRect(0, 0, 640, 640); // hier Hintergrund restaurieren (einfügen)
        crc2.putImageData(image, 0, 0);
           
        
        //Objekt - animate schleife
        for (let i: number = 0; i < objectarray.length; i++) {
            let s: objectclass = objectarray[i];
            s.update(); 
            console.log("animate schleife");
        }


        window.setTimeout(animate, 20);
        
    }
//--------------------------------------------Start-Rotation--------------------------------------------    
    function startbutton(): void{
        randomtime = 4000 + Math.random() * 500;
        window.setTimeout(spintime, randomtime)
        //console.log("Button Test")
        state = true; 
    }
    function spintime(): void{
        //console.log("Button spin")
        state = false;
    }
    
    
}//Ende Block Gültigkeit