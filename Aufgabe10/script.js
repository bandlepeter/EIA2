var L10;
(function (L10) {
    //------------EventListener-Aufruf
    window.addEventListener("load", createBaumElements);
    window.addEventListener("load", createLichtElements); //mehrere funktionen wegen Gültigkeitsbereich der var
    window.addEventListener("load", createKugelElements);
    window.addEventListener("load", createLamettaElements);
    window.addEventListener("load", createStaenderElements);
    window.addEventListener("load", createAdressElements);
    window.addEventListener("load", createBestellElements);
    window.addEventListener("load", init);
    // window.addEventListener("keydown", keydown1);
    //------------Variablen  
    let name;
    let vorname;
    let ort;
    let strasse;
    let stepper;
    let baumrechnung;
    let lichtrechnung;
    let kugelrechnung;
    let lamettarechnung;
    let staenderrechnung;
    //let baum: string[] = [posten[0].name, "" + posten[0].preis];
    //let licht: string[] = [posten[0].name, "" + posten[0].preis];
    //------------Variablen Nullen
    baumrechnung = 0;
    lichtrechnung = 0;
    kugelrechnung = 0;
    lamettarechnung = 0;
    staenderrechnung = 0;
    //------------Elemente erstellen
    //------------Baumelement erstellen      
    function createBaumElements() {
        let baumsorte = document.getElementById("baumsorte");
        let selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        let group = document.createElement("optgroup");
        group.label = "Baumsorten";
        baumsorte.appendChild(selectBox);
        selectBox.appendChild(group);
        //Schleife um den Inhalt der Selectbox zu erstellen
        for (let i = 0; i < L10.baumsorten.length; i++) {
            let opt = document.createElement("option");
            opt.innerText = L10.baumsorten[i];
            opt.id = "baumoption" + i;
            selectBox.appendChild(opt);
        }
    }
    //------------Lichtelement erstellen     
    function createLichtElements() {
        let lichtsorte = document.getElementById("beleuchtung");
        let selectBox = document.createElement("select");
        selectBox.name = "SelectLicht";
        selectBox.id = "selectLicht";
        let group = document.createElement("optgroup");
        group.label = "Lichtsorten";
        lichtsorte.appendChild(selectBox);
        selectBox.appendChild(group);
        //Schleife um den Inhalt der Selectbox zu erstellen
        for (let i = 0; i < L10.lichtsorten.length; i++) {
            let opt = document.createElement("option");
            opt.innerText = L10.lichtsorten[i];
            opt.id = "lichtoption" + i;
            selectBox.appendChild(opt);
        }
    }
    //------------Kugelelement erstellen     
    function createKugelElements() {
        let kugelanzahl = document.getElementById("kugeln");
        //let label: HTMLSelectElement = document.createElement("label");
        let stepper = document.createElement("input");
        stepper.name = "Stepper";
        stepper.step = "1";
        stepper.min = "0";
        stepper.max = "15";
        stepper.value = "0";
        stepper.type = "number";
        kugelanzahl.appendChild(stepper);
    }
    //------------Lamettaelement erstellen         
    function createLamettaElements() {
        let lamettaYN = document.getElementById("lametta");
        let cbox = document.createElement("input");
        cbox.name = "Checkbox1";
        cbox.id = "check1";
        cbox.value = "check1";
        cbox.type = "checkbox";
        lamettaYN.appendChild(cbox);
    }
    //------------Ständerelement erstellen      
    function createStaenderElements() {
        let staendersorte = document.getElementById("staender");
        let selectBox = document.createElement("select");
        selectBox.name = "SelectStaender";
        selectBox.id = "selectStaender";
        let group = document.createElement("optgroup");
        group.label = "Staendersorten";
        staendersorte.appendChild(selectBox);
        selectBox.appendChild(group);
        //Schleife um den Inhalt der Selectbox zu erstellen
        for (let i = 0; i < L10.staendersorten.length; i++) {
            let opt = document.createElement("staenderoption");
            opt.innerText = L10.staendersorten[i];
            opt.id = "option" + i;
            selectBox.appendChild(opt);
        }
    }
    //------------Adresselement erstellen      
    function createAdressElements() {
        let adresse = document.getElementById("adresse");
        let NameFeld = document.createElement("input");
        NameFeld.name = "Text";
        NameFeld.placeholder = "Name";
        //adresse.appendChild(NameFeld);//als bsp gelassen weil aufruf unten
        let br1 = document.createElement("br");
        let VornameFeld = document.createElement("input");
        VornameFeld.name = "Text";
        VornameFeld.placeholder = "Vorname";
        let br2 = document.createElement("br");
        let StrasseFeld = document.createElement("input");
        StrasseFeld.name = "Text";
        StrasseFeld.placeholder = "Straße";
        let br3 = document.createElement("br");
        let OrtFeld = document.createElement("input");
        OrtFeld.name = "Text";
        OrtFeld.placeholder = "Ort";
        //Aufruf der Variablen der Adressfunktion
        adresse.appendChild(NameFeld);
        adresse.appendChild(br1);
        adresse.appendChild(VornameFeld);
        adresse.appendChild(br2);
        adresse.appendChild(StrasseFeld);
        adresse.appendChild(br3);
        adresse.appendChild(OrtFeld);
    }
    //------------Bestellelement erstellen
    function createBestellElements() {
        let bestell = document.getElementById("bestellen");
        let bestellbutton = document.createElement("button");
        bestellbutton.name = "Button";
        bestellbutton.type = "Button";
        bestellbutton.innerText = "Bestellen";
        bestellbutton.addEventListener("mousedown", handleMouseDown);
        //Aufruf der Variablen der Bestellfunktion
        bestell.appendChild(bestellbutton);
    }
    //------------Init
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("form");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    //Code angepasst Vorlesung Anfang
    function handleChange(_event) {
        //Selecter
        let target = _event.target;
        console.log(target.id);
        if (target.id == "")
            console.log("Changed " + target.name + " to " + target.value);
        //console.log("selectBaumart")
        //if ("Baumsorten" && "option0" && "selectBaumart"){// baumsorten[1] &&
        if (L10.baumsorten[2] == "option2") {
            console.log("ksk");
        }
        console.log(target.id == "baumoption0");
        //baumrechnung = parseInt(target.value);
        //console.log(parseInt(target.value))//baumpreis[0]
        //Checkbox            //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        lamettarechnung = L10.lamettapreis;
        //Stepper
        if (target.name == "Stepper") {
            let progress = document.getElementsByTagName("meter")[0];
            kugelrechnung = parseInt(target.value); //String/htmlprogresselement in Number umwandeln  
        }
    }
    //Code angepasst Vorlesung Ende
    function handleMouseDown() {
        //if (kugelpreis[i] == "Schmuck") {
        //stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
        //Test console.log("Einfache Preisrechnung" + " " + (baumpreis[1] + lichtpreis[1] + (kugelpreis * 2) + lamettapreis + staenderpreis[1]) + "€")
        console.log("Preisrechnung" + " " + (baumrechnung + lichtrechnung + (L10.kugelpreis * kugelrechnung) + lamettarechnung + staenderrechnung) + "€");
        console.log(L10.kugelpreis * kugelrechnung);
    }
})(L10 || (L10 = {})); //Ende Namespace
//# sourceMappingURL=script.js.map