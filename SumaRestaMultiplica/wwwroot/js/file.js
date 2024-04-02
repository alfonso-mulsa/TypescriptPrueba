function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function tomaVal(nombreOperando) {
    return Number(document.getElementById(nombreOperando).value);
}
function mostrarResultado() {
    var resultado = "";
    var numero1 = tomaVal("idNumero1");
    var numero2 = tomaVal("idNumero2");
    switch (this.id) {
        case "idBotonSumar":
            resultado = String(numero1) + " + " + String(numero2) + " = " + String(sumar(numero1, numero2));
            break;
        case "idBotonRestar":
            resultado = String(numero1) + " - " + String(numero2) + " = " + String(restar(numero1, numero2));
            break;
        case "idBotonMultiplicar":
            resultado = String(numero1) + " * " + String(numero2) + " = " + String(multiplicar(numero1, numero2));
            break;
    }
    var parrafo = document.createElement("p");
    parrafo.textContent = resultado;
    var cuadroSalida = document.getElementById("idSalida");
    cuadroSalida.appendChild(parrafo);
}
function crearEvento(idElemento, nombreEvento, nombreFuncion) {
    document.getElementById(idElemento).addEventListener(nombreEvento, nombreFuncion);
}
crearEvento("idBotonSumar", "click", mostrarResultado);
crearEvento("idBotonRestar", "click", mostrarResultado);
crearEvento("idBotonMultiplicar", "click", mostrarResultado);
//document.getElementById("idBotonSumar").addEventListener("click", mostrarResultado);
//document.getElementById("idBotonRestar").addEventListener("click", mostrarResultado);
//document.getElementById("idBotonMultiplicar").addEventListener("click", mostrarResultado);
//# sourceMappingURL=file.js.map