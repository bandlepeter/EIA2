var Aufgabe05;
(function (Aufgabe05) {
    class snowclass {
        constructor(_x, _y) {
            this.xsnow = _x + Math.random() * 800;
            this.ysnow = _y + Math.random() * 600;
            this.vy = 2 + Math.random();
        }
        snowmoveanddrawupdate() {
            this.snowmove();
            this.snowdraw();
        }
        //Snow V
        snowmove() {
            this.ysnow += this.vy; //Fallgeschwindigkeit
            if (this.ysnow > 600) {
                this.ysnow = 0;
            }
            if (this.xsnow > 800) {
                this.xsnow = 0;
            }
        }
        //Snow Zeichnen
        snowdraw() {
            Aufgabe05.crc2.beginPath();
            Aufgabe05.crc2.arc(this.xsnow, this.ysnow, 2, 0, 2 * Math.PI);
            Aufgabe05.crc2.fillStyle = "#ffffff";
            Aufgabe05.crc2.fill();
        }
    }
    Aufgabe05.snowclass = snowclass;
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=class02.js.map