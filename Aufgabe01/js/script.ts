window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
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
//Gondel   200 160
    crc2.beginPath();
    crc2.moveTo(600, 380);
    crc2.lineTo(600, 410);
    crc2.lineTo(620, 410);
    crc2.lineTo(620, 435);
    crc2.lineTo(580, 435);
    crc2.lineTo(580, 410);
    crc2.lineTo(600, 410);
    crc2.stroke();
    crc2.fillStyle = "#ff0000";
    crc2.fill();

    
//Wolke1 
    crc2.beginPath();
    crc2.arc(600, 70, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(550, 70, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(575, 50, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
//Baum1  
    //Baumstamm  
    crc2.beginPath();
    crc2.moveTo(90, 250);
    crc2.lineTo(110, 250);
    crc2.lineTo(110, 290);
    crc2.lineTo(90, 290);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#660000";
    crc2.fill();
    //Baumnadeln
    crc2.beginPath();
    crc2.moveTo(100, 100);
    crc2.lineTo(150, 250);
    crc2.lineTo(50, 250);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#007700";
    crc2.fill();


//Baum2  
    //Baumstamm
    crc2.beginPath();
    crc2.moveTo(90, 300+250); //300+ verschiebung in y war mir zu doof neue zu erstellen
    crc2.lineTo(110, 300+250);//die verschiebung ermöglicht gleiche objekte ohne umrechnen zu verschieben
    crc2.lineTo(110, 300+290);
    crc2.lineTo(90, 300+290);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#660000";
    crc2.fill();
    //Baumnadeln
    crc2.beginPath();
    crc2.moveTo(100, 300+100);
    crc2.lineTo(150, 300+250);
    crc2.lineTo(50, 300+250);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#007700";
    crc2.fill();
    
//Baum3  
    //Baumstamm
    crc2.beginPath();
    crc2.moveTo(200+90, 280+250);
    crc2.lineTo(200+110, 280+250);
    crc2.lineTo(200+110, 280+290);
    crc2.lineTo(200+90, 280+290);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#660000";
    crc2.fill();
    //Baumnadeln
    crc2.beginPath();
    crc2.moveTo(200+100, 280+100);
    crc2.lineTo(200+150, 280+250);
    crc2.lineTo(200+50, 280+250);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#007700";
    crc2.fill();
    
//Baum4  
    //Baumstamm
    crc2.beginPath();
    crc2.moveTo(250+90, 290+250);
    crc2.lineTo(250+110, 290+250);
    crc2.lineTo(250+110, 290+290);
    crc2.lineTo(250+90, 290+290);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#660000";
    crc2.fill();
    //Baumnadeln
    crc2.beginPath();
    crc2.moveTo(250+100, 290+100);
    crc2.lineTo(250+150, 290+250);
    crc2.lineTo(250+50, 290+250);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#007700";
    crc2.fill();
    
//Baum5 
    //Baumstamm
    crc2.beginPath();
    crc2.moveTo(100+90, 250+250);
    crc2.lineTo(100+110, 250+250);
    crc2.lineTo(100+110, 250+290);
    crc2.lineTo(100+90, 250+290);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#660000";
    crc2.fill();
    //Baumnadeln
    crc2.beginPath();
    crc2.moveTo(100+100, 250+100);
    crc2.lineTo(100+150, 250+250);
    crc2.lineTo(100+50, 250+250);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#007700";
    crc2.fill();
    
    
}
