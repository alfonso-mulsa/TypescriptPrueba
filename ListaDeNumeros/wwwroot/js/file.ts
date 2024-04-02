function crearLista() {
    let numero = tomaVal("idNumero");
    for (let contador = 1; contador < numero; contador++) {
        document.getElementById("idLista").appendChild(crearLinea(String(contador)));
    }
}
function tomaVal(nombreOperando: string) {
    return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
}
function crearLinea(texto: string) {
    let nuevaLinea = document.createElement("li");
    nuevaLinea.textContent = texto;
    return nuevaLinea;
}
function borrarLista() {
    let lista = document.getElementById("idLista");
    let numLineas = lista.childElementCount;
    for (let contador = 1; contador <= numLineas; contador++) {
        borrarLinea("idLista");
    }
}
function borrarLinea(idElemento: string) {
    let linea = document.querySelector("#" + idElemento + " li");
    document.getElementById(idElemento).removeChild(linea);
}

document.getElementById("idCrearLista").addEventListener("click", crearLista);
document.getElementById("idBorrarLista").addEventListener("click", borrarLista);
