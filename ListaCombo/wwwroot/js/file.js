function ponVal(elemento, texto) {
    document.getElementById(elemento).value = texto;
}
function tomaVal(elemento) {
    return document.getElementById(elemento).value;
}
function selecCiudad() {
    var ciudad = this.textContent;
    ponVal("idCiudadSeleccionada", ciudad);
    numCiudades += 1;
    ponVal("idNumCiudades", String(numCiudades));
}
var numCiudades = 0;
ponVal("idNumCiudades", String(numCiudades));
var elementosLista = document.getElementsByClassName("dropdown-item");
console.log(elementosLista);
[].forEach.call(elementosLista, function (elemento) {
    elemento.addEventListener("click", selecCiudad);
});
//# sourceMappingURL=file.js.map