function ponVal(elemento: string, texto: string) {
    (<HTMLInputElement>document.getElementById(elemento)).value = texto;
}
function tomaVal(elemento: string) {
    return (<HTMLInputElement>document.getElementById(elemento)).value;
}
function selecCiudad() {
    let ciudad = this.textContent;
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
