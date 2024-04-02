//function concatenar(nombre: string, apellido: string) {
//    return nombre + apellido;
//}
//let nombreEjemplo = "Alfonso";
//let apellidoEjemplo = "Mulsa";
//let nombreCompleto = `Nombre: ${nombreEjemplo} Apellido: ${apellidoEjemplo}`;
//console.log(concatenar(nombreEjemplo, apellidoEjemplo));
//document.writeln(nombreCompleto);
var numeroPrueba = 136;
if (esPar(numeroPrueba)) {
    document.writeln("El n\u00FAmero ".concat(numeroPrueba, " es PAR."));
}
else {
    document.writeln("El n\u00FAmero ".concat(numeroPrueba, " es IMPAR."));
}
function esPar(numero) {
    return (numero % 2 == 0);
}
//# sourceMappingURL=principal.js.map