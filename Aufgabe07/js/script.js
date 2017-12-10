var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var i = _input;
        //return "Hier fehlt noch der richtige Code...";
        return i; //students.push(i);
    }
    function queryData(_matrikel) {
        var q = _matrikel;
        //return "Hier fehlt noch der richtige Code...";
        return q; //students[];
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=script.js.map