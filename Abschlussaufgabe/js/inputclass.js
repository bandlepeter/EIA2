var Flaschendrehen;
(function (Flaschendrehen) {
    class inputclass extends Flaschendrehen.objectclass {
        //x: number;
        //y: number;
        //vx: number;
        //vy: number;
        //vr: number;
        //color: string;
        //--------------------------------------------CONSTRUCTOR--------------------------------------------
        constructor(_x, _y, _vr) {
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
        move() {
        }
        //Zeichnung des Objekts
        draw() {
            Flaschendrehen.crc2.font = "30px Arial";
            Flaschendrehen.crc2.fillText("Hello World", 10, 50);
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
    }
    Flaschendrehen.inputclass = inputclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=inputclass.js.map