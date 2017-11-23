var Aufgabe05;
(function (Aufgabe05) {
    window.addEventListener("load", init);
    //export let squares: SquareInfo[] = [];
    //let skisquare: skiclass;
    let skisquares = [];
    //let snowsquare: snowclass;
    let snowsquares = [];
    let wolkeX = [];
    let wolkeY = [];
    let gondelX = [];
    let gondelY = [];
    var image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe05.crc2 = canvas.getContext("2d");
        console.log(Aufgabe05.crc2);
        console.log("setTimeout");
        //Atmosphäre
        Aufgabe05.crc2.fillStyle = "#99ffff";
        Aufgabe05.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(300, 100);
        Aufgabe05.crc2.lineTo(420, 400);
        Aufgabe05.crc2.lineTo(80, 400);
        Aufgabe05.crc2.closePath();
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#999999";
        Aufgabe05.crc2.fill();
        //Berg2
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(400, 110);
        Aufgabe05.crc2.lineTo(450, 400);
        Aufgabe05.crc2.lineTo(100, 400);
        Aufgabe05.crc2.closePath();
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#AAAAAA";
        Aufgabe05.crc2.fill();
        //Berg3
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(150, 100);
        Aufgabe05.crc2.lineTo(350, 400);
        Aufgabe05.crc2.lineTo(100, 400);
        Aufgabe05.crc2.closePath();
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#AAAAAA";
        Aufgabe05.crc2.fill();
        //Piste
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(0, 120);
        Aufgabe05.crc2.lineTo(800, 600);
        Aufgabe05.crc2.lineTo(0, 600);
        Aufgabe05.crc2.closePath();
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#ffffff";
        Aufgabe05.crc2.fill();
        //Drahtseil
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(0, 30);
        Aufgabe05.crc2.lineTo(800, 500);
        Aufgabe05.crc2.stroke();
        for (let i = 0; i < 5; i++) {
            let x = 50 + Math.random() * 270;
            let y = 500 + Math.random() * 70;
            drawTree(x, y);
        }
        for (let i = 0; i < 1; i++) {
            gondelX[i] = 600;
            gondelY[i] = 380;
        }
        for (let i = 0; i < 1; i++) {
            wolkeX[i] = 500;
            wolkeY[i] = 0;
        }
        //schnee - init schleife - constructor aufruf
        for (let i = 0; i < 200; i++) {
            snowsquares[i] = new Aufgabe05.snowclass(0, 0);
        }
        //skiefahrer - init schleife - constructor aufruf
        for (let i = 0; i < 3; i++) {
            skisquares[i] = new Aufgabe05.skiclass(0, 135);
        }
        //-----------------------------------------------------------------        
        //Bild wird gespeichert
        image = Aufgabe05.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //-----------------------------------------------------------------  
    //Gondel
    function gondel(_x, _y) {
        //Gondel
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(_x + 0, _y + 0);
        Aufgabe05.crc2.lineTo(_x + 0, _y + 30);
        Aufgabe05.crc2.lineTo(_x + 20, _y + 30);
        Aufgabe05.crc2.lineTo(_x + 20, _y + 55);
        Aufgabe05.crc2.lineTo(_x + -20, _y + 55);
        Aufgabe05.crc2.lineTo(_x + -20, _y + 30);
        Aufgabe05.crc2.lineTo(_x + 0, _y + 30);
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#ff0000";
        Aufgabe05.crc2.fill();
    }
    //Wolke1 
    function wolke(_x, _y) {
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.arc(_x + 50, _y + 70, 40, 0, 2 * Math.PI);
        Aufgabe05.crc2.fillStyle = "#ffffff";
        Aufgabe05.crc2.fill();
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.arc(_x, _y + 70, 40, 0, 2 * Math.PI);
        Aufgabe05.crc2.fillStyle = "#ffffff";
        Aufgabe05.crc2.fill();
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.arc(_x + 25, _y + 50, 40, 0, 2 * Math.PI);
        Aufgabe05.crc2.fillStyle = "#ffffff";
        Aufgabe05.crc2.fill();
    }
    function drawTree(_x, _y) {
        //Baumstamm  
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(0 + _x, 0 + _y);
        Aufgabe05.crc2.lineTo(-10 + _x, 0 + _y);
        Aufgabe05.crc2.lineTo(-10 + _x, -40 + _y);
        Aufgabe05.crc2.lineTo(10 + _x, -40 + _y);
        Aufgabe05.crc2.lineTo(10 + _x, 0 + _y);
        Aufgabe05.crc2.lineTo(0 + _x, 0 + _y);
        Aufgabe05.crc2.closePath();
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#660000";
        Aufgabe05.crc2.fill();
        //Baumnadeln
        Aufgabe05.crc2.beginPath();
        Aufgabe05.crc2.moveTo(0 + _x, -40 + _y);
        Aufgabe05.crc2.lineTo(-50 + _x, -40 + _y);
        Aufgabe05.crc2.lineTo(0 + _x, -190 + _y);
        Aufgabe05.crc2.lineTo(50 + _x, -40 + _y);
        Aufgabe05.crc2.lineTo(0 + _x, -40 + _y);
        Aufgabe05.crc2.closePath();
        Aufgabe05.crc2.stroke();
        Aufgabe05.crc2.fillStyle = "#007700";
        Aufgabe05.crc2.fill();
    }
    //----ANIMATE---------------------------------------
    function animate() {
        console.log("Timeout");
        Aufgabe05.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren (einfügen)
        Aufgabe05.crc2.putImageData(image, 0, 0);
        //skiefahrer - animate schleife
        for (let i = 0; i < skisquares.length; i++) {
            let s = skisquares[i];
            s.moveanddrawupdate();
        }
        //schnee - animate schleife
        for (let i = 0; i < snowsquares.length; i++) {
            let snows = snowsquares[i];
            snows.snowmoveanddrawupdate();
        }
        //Gondel
        for (let i = 0; i < gondelX.length; i++) {
            if (gondelX[i] < 0) {
                gondelX[i] = 800;
                gondelY[i] = 500;
            }
            gondelX[i] -= 0.8; //8; // -800 / 10;
            gondelY[i] -= 0.47; //4.7; // -470 / 10;
            gondel(gondelX[i], gondelY[i]);
        }
        //Wolke 
        for (let i = 0; i < wolkeX.length; i++) {
            if (wolkeX[i] > 800) {
                wolkeX[i] = 0;
            }
            wolkeX[i] += +0.1; // geschwindigkeit Wolke X
            wolkeY[i] += +0; // keine höhenänderung
            wolke(wolkeX[i], wolkeY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe05 || (Aufgabe05 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=script.js.map