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
        constructor(_x, _y) {
            super(_x, _y);
            //console.log("Create Schrift");
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
            //Koordinaten wirken einwenig wirr, jedoch geben die Koordinaten den Wortanfang an
            Flaschendrehen.crc2.font = "20px Helvetica";
            Flaschendrehen.crc2.fillText(Flaschendrehen.input1, 290, 50);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input2, 470, 150);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input3, 550, 320);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input4, 470, 500);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input5, 290, 610);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input6, 120, 500);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input7, 30, 320);
            Flaschendrehen.crc2.fillText(Flaschendrehen.input8, 120, 150);
        }
    }
    Flaschendrehen.inputclass = inputclass; //class close
})(Flaschendrehen || (Flaschendrehen = {})); //Ende Block Gültigkeit
//# sourceMappingURL=inputclass.js.map