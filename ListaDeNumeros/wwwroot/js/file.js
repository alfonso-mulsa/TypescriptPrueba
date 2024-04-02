function crearLista() {
    var numero = tomaVal("idNumero");
    for (var contador = 1; contador < numero; contador++) {
        document.getElementById("idLista").appendChild(crearLinea(String(contador)));
    }
}
function tomaVal(nombreOperando) {
    return Number(document.getElementById(nombreOperando).value);
}
function crearLinea(texto) {
    var nuevaLinea = document.createElement("li");
    nuevaLinea.textContent = texto;
    return nuevaLinea;
}
function borrarLista() {
    var numLineas = document.getElementById("idLista").childElementCount;
    for (var contador = 1; contador <= numLineas; contador++) {
        borrarLinea("idLista");
    }
}
function borrarLinea(idElemento) {
    var linea = document.querySelector("#" + idElemento + " li");
    document.getElementById(idElemento).removeChild(linea);
}
document.getElementById("idCrearLista").addEventListener("click", crearLista);
document.getElementById("idBorrarLista").addEventListener("click", borrarLista);
//# sourceMappingURL=file.js.map