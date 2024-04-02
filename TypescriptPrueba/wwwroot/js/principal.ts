//function concatenar(nombre: string, apellido: string) {
//    return nombre + apellido;
//}

//let nombreEjemplo = "Alfonso";
//let apellidoEjemplo = "Mulsa";
//let nombreCompleto = `Nombre: ${nombreEjemplo} Apellido: ${apellidoEjemplo}`;
//console.log(concatenar(nombreEjemplo, apellidoEjemplo));
//document.writeln(nombreCompleto);

let numeroPrueba = 136;
if (esPar(numeroPrueba)) {
    document.writeln(`El número ${numeroPrueba} es PAR.`);
} else {
    document.writeln(`El número ${numeroPrueba} es IMPAR.`);
}
function esPar(numero: number) {
    return(numero % 2 == 0)
}
