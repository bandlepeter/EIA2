/**
 * @author Jirka
 */
var DOM_Pointer;
(function (DOM_Pointer) {
    window.addEventListener("load", initDomPointer);
    var domPointerDiv;
    function initDomPointer() {
        // install function reference to node "ref"
        domPointerDiv = document.createElement("div");
        domPointerDiv.className = "DOM-Pointer";
        document.addEventListener("mousemove", moveDomPointer);
        document.body.appendChild(domPointerDiv);
        document.head.innerHTML += "<link rel='stylesheet' href='DOM-Pointer.css'>";
    }
    //*/ move: Ausgabe von Eigenschaften des Event-Objektes beim mousemove-Event
    function moveDomPointer(_event) {
        var target = _event.target;
        var outString = "";
        outString += "PagePos: " + _event.pageX + "|" + _event.pageY + "<br>"; //position auf dem html
        outString += "ScreenPos: " + _event.screenX + "|" + _event.screenY + "<br>"; //position auf dem gesamtbildschirm
        outString += "LayerPos: " + _event.layerX + "|" + _event.layerY + "<br>";
        outString += _event.target + "<br>";
        outString += "id = " + target.id + "<br>";
        outString += "class = " + target.className;
        domPointerDiv.innerHTML = outString;
        domPointerDiv.style.left = 20 + _event.pageX + "px";
        domPointerDiv.style.top = 20 + _event.pageY + "px";
    }
})(DOM_Pointer || (DOM_Pointer = {}));
//# sourceMappingURL=DOM-Pointer.js.map