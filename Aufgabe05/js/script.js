var Aufgabe05;
(function (Aufgabe05) {
    window.addEventListener("load", init);
    //export let squares: SquareInfo[] = [];
    let square;
    let squares = [];
    let snowsquare;
    let snowsquares = [];
    let arrayX = [];
    let arrayY = [];
    let SnowArrayX = [];
    let SnowArrayY = [];
    let wolkeX = [];
    let wolkeY = [];
    let kerleX = [];
    let kerleY = [];
    let gondelX = [];
    let gondelY = [];
    /*interface SquareInfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }*/
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
        /* //Gondel
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
         crc2.fill();*/
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
        /*for (let i: number = 0; i < 3; i++) {
            kerleX[i] = 50 * Math.random();
            kerleY[i] = 170 * Math.random();
        }*/
        //for (let i: number = 0; i < 3; i++) {
        //squares[i] = {
        //skiclass[i] = {
        //x: 0,
        //y: 135,
        //dx: 6 + Math.random() * 2 - 1,
        //dy: 3.6 + Math.random() * 2,
        //color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
        //};
        //}
        for (let i = 0; i < 3; i++) {
            let s = new Aufgabe05.skiclass(0, 135);
            s.setRandomStyle();
            squares[i] = s;
        }
        //for (let i: number = 0; i < 100; i++) {
        //arrayX[i] = 0 + Math.random() * 800;
        //arrayY[i] = 0 + Math.random() * 600;
        //}
        for (let i = 0; i < 100; i++) {
            let snows = new Aufgabe05.snowclass(0, 0);
            //snows.setRandomStyle();
            snowsquares[i] = snows;
        }
        /*for (let i: number = 0; i < 100; i++) {
            arrayX[i] = 200;
            arrayY[i] = 150;
        }*/
        image = Aufgabe05.crc2.getImageData(0, 0, 800, 600);
        animate();
    } //---------------------
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
    /*function drawSnow(_xs: number, _ys: number): void {
        //Schneeflocken
        crc2.beginPath();
        crc2.arc(_xs, _ys, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

    }*/
    //----
    function animate() {
        console.log("Timeout");
        Aufgabe05.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        Aufgabe05.crc2.putImageData(image, 0, 0);
        /* for (let i: number = 0; i < squares.length; i++) {
         kerle( squares[i] );
              if (squares[i].x > 800) {
             squares[i].x = 0;
             squares[i].y = 135;
                  }*/
        /* for (let i: number = 0; i < skiclass.length; i++) {
     kerle( skiclass[i] );
          if (squares[i].x > 800) {
         squares[i].x = 0;
         squares[i].y = 135;
              }*/
        for (let i = 0; i < Aufgabe05.skiclass.length; i++) {
            let s = squares[i];
            s.moveanddrawupdate();
        }
        for (let i = 0; i < Aufgabe05.snowclass.length; i++) {
            let snows = snowsquares[i];
            snows.snowmoveanddrawupdate();
        }
        //Gondel
        for (let i = 0; i < gondelX.length; i++) {
            if (gondelX[i] < 0) {
                gondelX[i] = 800;
                gondelY[i] = 500;
            }
            //if (gondelY[i] < 30) {//war für fehlersuche für gondel bug
            //gondelY[i] = 500;
            //gondelX[i] = 800;
            //}
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
        //kerle
        /*    for (let i: number = 0; i < kerleX.length; i++) {
            if (kerleX[i] > 800) {
                kerleX[i] = 0;
                kerleY[i] = 135;
            }
            kerleX[i] += + 6;//3; // v x
            kerleY[i] += + 3.6;//1.8; // v y
            kerle(kerleX[i], kerleY[i]);
            }*/
        for (let i = 0; i < Aufgabe05.snowclass.length; i++) {
            let snows = snowsquares[i];
            snows.snowmoveanddrawupdate();
        }
        //snow  
        /* for (let i: number = 0; i < arrayY.length; i++) {
         if (arrayY[i] > 600) {
             arrayY[i] = 0;
         }
         if (arrayX[i] > 800) {
             arrayX[i] = 0;
         }
         arrayX[i] += + 0; // v snow x
         arrayY[i] += + 1; // v snow y
             //arrayX[i] += Math.random()
             
        
         arrayX[i] += 0 + Math.random();
                           
         drawSnow(arrayX[i], arrayY[i]);
         }   */
        /*
         function animate(): void {
         console.log("Timeout");
         crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
         crc2.putImageData(image, 0, 0);
         for (let i: number = 0; i < arrayX.length; i++) {
             arrayX[i] += + 5; // hier experimentieren um
             arrayY[i] += + 3; // andere Bewegungsmuster zu finden
             crc2.fillStyle = "#ff0000";
             crc2.fillRect(arrayX[i], arrayY[i], 20, 20);
         }
         
         function animate(): void {
         console.log("Timeout");
         crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
         crc2.putImageData(image, 0, 0);
         for (let i: number = 0; i < arrayX.length; i++) {
             arrayX[i] += Math.random() * 4 - 2; // hier experimentieren um
             arrayY[i] += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
             crc2.fillStyle = "#ff0000";
             crc2.fillRect(arrayX[i], arrayY[i], 20, 20);
         }*/
        window.setTimeout(animate, 20);
    }
})(Aufgabe05 || (Aufgabe05 = {})); //Ende Block Gültigkeit
//# sourceMappingURL=script.js.map