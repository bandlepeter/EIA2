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
    export  let input1: string;//Variable der einzelnen Punkte
                input1 = prompt("Geben Sie hier die Punkte auf die der Pfeil zeigen kann an: Punkt 1");
                if (input1 == ""){input1 = "Wahrheit"};//Falls nichts eingegeben automatisch Generierter Inhalt
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
        
        
        //Beschriftungen im Canvas (Punkte)
        //Koordinaten wirken einwenig wirr, jedoch geben die Koordinaten den Wortanfang an
        crc2.font = "20px Helvetica";
        crc2.fillText(input1,290,50);
        crc2.fillText(input2,470,150);
        crc2.fillText(input3,550,320);
        crc2.fillText(input4,470,500);
        crc2.fillText(input5,290,610);
        crc2.fillText(input6,120,500);
        crc2.fillText(input7,30,320);
        crc2.fillText(input8,120,150);
    
//--------------------------------------------INIT-SCHLEIFEN--------------------------------------------
    //Kreis
        /*for (let i: number = 0; i < 1; i++) {
            let s: circleclass = new circleclass(320, 320, 0);
            objectarray.push(s);
            }*/
    //Schriften    
    /*for (let i: number = 0; i < 1; i++) {
            let s: inputclass = new inputclass(0, 0);
            objectarray.push(s);
            }*/
    //Pfeil
        
        for (let i: number = 0; i < 1; i++) {
            let s: arrowclass = new arrowclass(320, 320);
            objectarray.push(s);
            }
    
    
//console.log(objectarray);
//--------------------------------------------save-image--------------------------------------------      
        //Bild wird gespeichert
        image = crc2.getImageData(0, 0, 640, 640);
        animate();
        //console.log("Save Image")
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
            //console.log("animate schleife");
        }


        window.setTimeout(animate, 20);
        
    }
//--------------------------------------------Start-Rotation--------------------------------------------    
    function startbutton(): void{
        crc2.restore();//muss vor save und translate
        crc2.save();//Speicherung des Canvaszustand vor Rotation
        crc2.translate(320, 320);//verschiebung des Canvas in den Canvasmittelpunkt für die Animierte Roration
        
        randomtime = 4000 + Math.random() * 500;//4000ms Mindestdrehzeit + zufällig zwischen 0 und 500ms
        window.setTimeout(spintime, randomtime)//Aufruf zu rotationsende
        
        //console.log("Button Test")
        state = true;//Aktiviert die animierte Rotation bei Buttonklick
        
    }
    function spintime(): void{ 
        //console.log("Button spin")
        state = false;//beendet rotation nach timeout
        
    }
    
    
}//Ende Block Gültigkeit