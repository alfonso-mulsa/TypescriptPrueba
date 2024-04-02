function crearLista() {
    borrarLista();
    let numero = tomaVal("idNumero");
    for (let contador = 1; contador < numero; contador++) {
        document.getElementById("idLista").appendChild(crearLi(String(contador)));
    }
}
function tomaVal(nombreOperando: string) {
    return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
}
function crearLi(texto: string) {
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;
    return nuevoLi;
}
function borrarUltimoLi() {
    let numLineas = document.getElementById("idLista").childElementCount;
    if (numLineas > 0) {
        let ultimoLi = document.getElementById("idLista").lastChild;
        document.getElementById("idLista").removeChild(ultimoLi);
    }
}
function borrarLista() {
    let numLineas = document.getElementById("idLista").childElementCount;
    for (let contador = 1; contador <= numLineas; contador++) {
        borrarLi("idLista");
    }
}
function borrarLi(idElemento: string) {
    let linea = document.querySelector("#" + idElemento + ">li");
    document.getElementById(idElemento).removeChild(linea);
}
function crearEvento(idElemento: string, nombreEvento: string, nombreFuncion) {
    document.getElementById(idElemento).addEventListener(nombreEvento, nombreFuncion);
}

crearEvento("idCrearLista", "click", crearLista);
crearEvento("idBorrarUltimoLi", "click", borrarUltimoLi);
crearEvento("idBorrarLista", "click", borrarLista);

//document.getElementById("idCrearLista").addEventListener("click", crearLista);
//document.getElementById("idBorrarLista").addEventListener("click", borrarLista);
