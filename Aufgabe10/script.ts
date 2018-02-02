namespace L10 {
    
//------------EventListener-Aufruf

    window.addEventListener("load", createBaumElements);
    window.addEventListener("load", createLichtElements);//mehrere funktionen wegen Gültigkeitsbereich der var
    window.addEventListener("load", createKugelElements);
    window.addEventListener("load", createLamettaElements);
    window.addEventListener("load", createStaenderElements);
    window.addEventListener("load", createAdressElements);
    window.addEventListener("load", createBestellElements);
    window.addEventListener("load", init);
    
   // window.addEventListener("keydown", keydown1);
    
//------------Variablen  
    
    let name: HTMLInputElement;
    let vorname: HTMLInputElement;
    let ort: HTMLInputElement;
    let strasse: HTMLInputElement;
    
    let stepper: any;
    
    let baumrechnung: number;
    let lichtrechnung: number;
    let kugelrechnung: number;
    let lamettarechnung: number;
    let staenderrechnung: number;
    
    
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
    function createBaumElements(): void {
        let baumsorte: HTMLDivElement = <HTMLDivElement>document.getElementById("baumsorte");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        let group: HTMLOptGroupElement = document.createElement("optgroup");
        group.label = "Baumsorten";
        baumsorte.appendChild(selectBox);
        selectBox.appendChild(group);
        //Schleife um den Inhalt der Selectbox zu erstellen
        for (let i: number = 0; i < baumsorten.length; i++) {
                let opt: HTMLElement = document.createElement("option");
                opt.innerText = baumsorten[i];
                opt.id = "baumoption" + i;
                selectBox.appendChild(opt);      
                }
        }
//------------Lichtelement erstellen     
    function createLichtElements(): void {
        let lichtsorte: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectLicht";
        selectBox.id = "selectLicht";
        let group: HTMLOptGroupElement = document.createElement("optgroup");
        group.label = "Lichtsorten";
        lichtsorte.appendChild(selectBox);
        selectBox.appendChild(group);
        //Schleife um den Inhalt der Selectbox zu erstellen
        for (let i: number = 0; i < lichtsorten.length; i++) {
                let opt: HTMLElement = document.createElement("option");
                opt.innerText = lichtsorten[i];
                opt.id = "lichtoption" + i;
                selectBox.appendChild(opt);      
                }
        }
//------------Kugelelement erstellen     
    function createKugelElements(): void {
        let kugelanzahl: HTMLDivElement = <HTMLDivElement>document.getElementById("kugeln");
        //let label: HTMLSelectElement = document.createElement("label");
        let stepper: HTMLInputElement = document.createElement("input");
        stepper.name = "Stepper";
        stepper.step = "1";
        stepper.min = "0";
        stepper.max = "15";
        stepper.value = "0";
        stepper.type = "number";
        kugelanzahl.appendChild(stepper);
        }  
//------------Lamettaelement erstellen         
    function createLamettaElements(): void {
        let lamettaYN: HTMLDivElement = <HTMLDivElement>document.getElementById("lametta");
        let cbox: HTMLInputElement = document.createElement("input");
        cbox.name = "Checkbox1";
        cbox.id = "check1";
        cbox.value = "check1";
        cbox.type = "checkbox";
        lamettaYN.appendChild(cbox);
        }
//------------Ständerelement erstellen      
    function createStaenderElements(): void {
        let staendersorte: HTMLDivElement = <HTMLDivElement>document.getElementById("staender");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectStaender";
        selectBox.id = "selectStaender";
        let group: HTMLOptGroupElement = document.createElement("optgroup");
        group.label = "Staendersorten";
        staendersorte.appendChild(selectBox);
        selectBox.appendChild(group);
        //Schleife um den Inhalt der Selectbox zu erstellen
        for (let i: number = 0; i < staendersorten.length; i++) {
                let opt: HTMLElement = document.createElement("staenderoption");
                opt.innerText = staendersorten[i];
                opt.id = "option" + i;
                selectBox.appendChild(opt);      
                }
        }
   
//------------Adresselement erstellen      
    function createAdressElements(): void {
        
        let adresse: HTMLDivElement = <HTMLDivElement>document.getElementById("adresse");
        let NameFeld: HTMLInputElement = document.createElement("input");
        NameFeld.name = "Text";
        NameFeld.placeholder = "Name";
        //adresse.appendChild(NameFeld);//als bsp gelassen weil aufruf unten
        
        let br1: HTMLElement = document.createElement("br");
        
        let VornameFeld: HTMLInputElement = document.createElement("input");
        VornameFeld.name = "Text";
        VornameFeld.placeholder = "Vorname";
         
        let br2: HTMLElement = document.createElement("br");
        
        let StrasseFeld: HTMLInputElement = document.createElement("input");
        StrasseFeld.name = "Text";
        StrasseFeld.placeholder = "Straße";
        
        let br3: HTMLElement = document.createElement("br");
        
        let OrtFeld: HTMLInputElement = document.createElement("input");
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
    function createBestellElements(): void {
        
        let bestell: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellen");
        let bestellbutton: HTMLButtonElement = document.createElement("button");
        bestellbutton.name = "Button";
        bestellbutton.type = "Button";
        bestellbutton.innerText = "Bestellen";
        bestellbutton.addEventListener("mousedown", handleMouseDown);
        //Aufruf der Variablen der Bestellfunktion
        bestell.appendChild(bestellbutton);
        
        }
//------------Init
    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFormElement> = document.getElementsByTagName("form");
        
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFormElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        }
    //Code angepasst Vorlesung Anfang
    function handleChange(_event: Event): void {
        
        //Selecter
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target.id);
        if(target.id == "")
        
        console.log("Changed " + target.name + " to " + target.value);
        //console.log("selectBaumart")
        //if ("Baumsorten" && "option0" && "selectBaumart"){// baumsorten[1] &&
        if (baumsorten[2] == "option2"){
                console.log("ksk")
        }
            
        console.log(target.id == "baumoption0")
            
            //baumrechnung = parseInt(target.value);
            //console.log(parseInt(target.value))//baumpreis[0]
        //Checkbox            //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
            lamettarechnung = lamettapreis;

        //Stepper
        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
                kugelrechnung = parseInt(target.value); //String/htmlprogresselement in Number umwandeln  
                }
        
    }
    //Code angepasst Vorlesung Ende
    function handleMouseDown(): void{ 
        //if (kugelpreis[i] == "Schmuck") {
                //stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                
        
        //Test console.log("Einfache Preisrechnung" + " " + (baumpreis[1] + lichtpreis[1] + (kugelpreis * 2) + lamettapreis + staenderpreis[1]) + "€")
        console.log("Preisrechnung" + " " + (baumrechnung + lichtrechnung + (kugelpreis * kugelrechnung) + lamettarechnung + staenderrechnung) + "€")
        console.log(kugelpreis * kugelrechnung)
    }
    
}//Ende Namespace