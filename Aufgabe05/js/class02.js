var Aufgabe05;
(function (Aufgabe05) {
    class snowclass {
        constructor(_x, _y) {
            this.xsnow = _x;
            this.ysnow = _y;
        }
        snowmoveanddrawupdate() {
            this.snowmove();
            this.snowdraw();
        }
        snowmove() {
            // this.xsnow += 6 + Math.random() * 2 - 1; // hier experimentieren um
            this.ysnow += 2; // andere Bewegungsmuster zu finden
            this.xsnow += 0 + Math.random();
            if (this.ysnow > 600) {
                this.ysnow = 0;
            }
            if (this.xsnow > 800) {
                this.xsnow = 0;
            }
        }
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