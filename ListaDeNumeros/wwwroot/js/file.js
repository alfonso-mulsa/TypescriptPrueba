function crearLista() {
    borrarLista();
    var numero = tomaVal("idNumero");
    for (var contador = 1; contador < numero; contador++) {
        document.getElementById("idLista").appendChild(crearLi(String(contador)));
    }
}
function tomaVal(nombreOperando) {
    return Number(document.getElementById(nombreOperando).value);
}
function crearLi(texto) {
    var nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;
    return nuevoLi;
}
function borrarUltimoLi() {
    var numLineas = document.getElementById("idLista").childElementCount;
    if (numLineas > 0) {
        var ultimoLi = document.getElementById("idLista").lastChild;
        document.getElementById("idLista").removeChild(ultimoLi);
    }
}
function borrarLista() {
    var numLineas = document.getElementById("idLista").childElementCount;
    for (var contador = 1; contador <= numLineas; contador++) {
        borrarLi("idLista");
    }
}
function borrarLi(idElemento) {
    var linea = document.querySelector("#" + idElemento + ">li");
    document.getElementById(idElemento).removeChild(linea);
}
function crearEvento(idElemento, nombreEvento, nombreFuncion) {
    document.getElementById(idElemento).addEventListener(nombreEvento, nombreFuncion);
}
crearEvento("idCrearLista", "click", crearLista);
crearEvento("idBorrarUltimoLi", "click", borrarUltimoLi);
crearEvento("idBorrarLista", "click", borrarLista);
//document.getElementById("idCrearLista").addEventListener("click", crearLista);
//document.getElementById("idBorrarLista").addEventListener("click", borrarLista);
//# sourceMappingURL=file.js.map