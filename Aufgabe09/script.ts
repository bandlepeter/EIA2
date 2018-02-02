namespace L09 {
    
//------------EventListener-Aufruf

    window.addEventListener("load", init);
    window.addEventListener("keydown", keydown1);
    
//------------Variablen  
    
    let letter: HTMLElement;
    let abc: string[] = [];
    let temp: string;//Speichert temporär den Inhalt der ausgewählten Buchstaben
    
    
    function init(): void {
        abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//------------Erstellung ABC Kasten      
        for (let i: number = 0; i < abc.length; i++){
            let j: HTMLDivElement = document.createElement("div");
            
            j.style.backgroundColor = "#d3d3d3";//Hintergrundfarbe
            j.style.color = "#ffffff";//Schriftfarbe
            j.style.fontFamily = "Helvetica";
            j.style.fontSize = "16px";
            j.style.textAlign = "center";
            j.style.display = "inline-block";//hat die Eigenschaften eines Inlineelements und teils eines Blockelements
            j.style.width = "20px";
            j.style.height = "20px";
            j.style.margin = "2px";
            j.style.borderStyle = "outset";//Aufgesetzter Rand
            j.innerText = abc[i];
            j.id = abc[i].toLowerCase();//zu kleinbuchstaben
            j.addEventListener("mousedown", pressMouseBox);//bei Mausklick
            document.body.appendChild(j);//an kind anhängen
            }
        
        
//------------Erstellung Textfeld
            let h: HTMLDivElement = document.createElement("div");
            
            h.style.backgroundColor = "#d3d3d3";//Hintergrundfarbe
            //h.style.width = "90%";//Breite in % weil responsive (;
            h.style.width = "800px";
            h.style.height = "500px";
            h.style.margin = "0 auto";//damit es zentriert ist
            h.style.marginTop = "10px";//damit es nicht zu nah an abc ist
            h.style.borderStyle = "outset";//Aufgesetzter Rand (macht es jedoch 6px höher)
            h.addEventListener("mousedown", pressMouseField);
            document.body.appendChild(h);//Kindelement anhängen
        
        }//close init
    
//------------Mausklick ABC
            function pressMouseBox(_event: MouseEvent): void{
                if (temp == "") {
                    let h: HTMLDivElement = <HTMLDivElement>_event.target;
                        h.style.color = "#d3d3d3";//Schrift grau (Farben umkehren)
                        h.style.backgroundColor = "#ffffff";//Hintergrund weiß (Farben umkehren)
                        temp = h.id.toUpperCase();//zu Großbuchstaben machen
                    }
                
                console.log(temp)
            }
    
//------------Erstellung Buchstabe div
    function pressMouseField(_event: MouseEvent): void{
        if (temp == "")
            return;

        letter = document.createElement("div");
        letter.innerText = temp;//lade Buchstabe aus Temp
        letter.style.position = "absolute";//Bezugspunkt obere Ecke des übergeordneten Elternelements
        letter.style.color = "#ffffff";
        letter.style.fontSize = "20px";
        letter.style.fontFamily = "Helvetica";
        letter.style.left = _event.pageX + "px";//Buchstabe Position X
        letter.style.top = _event.pageY + "px";//Buchstabe Position Y
        document.body.appendChild(letter);//Kindelement anhängen
        letter.addEventListener("mousedown", MouseDelete);
        //lösche temp wieder
        let clickedDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(temp.toLowerCase());
        clickedDiv.style.color = "#ffffff";
        clickedDiv.style.backgroundColor = "#d3d3d3";
        temp = "";
        }
    
    function keydown1(_event: KeyboardEvent): void {
        if (abc.indexOf(_event.key.toUpperCase()) != -1) {//zu Großbuchstaben machen
            let h: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            h.style.color = "#d3d3d3";
            h.style.backgroundColor = "#ffffff";
            temp = _event.key.toUpperCase();//zu Großbuchstaben machen
        }
    }
    
    
    function MouseDelete(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        if (_event.altKey == true) {
            let h: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(h);
        }
    }
    
    
    
}//ende gültigkeit