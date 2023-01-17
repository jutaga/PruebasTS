/* Enunciado Ejercicio 29:
Dado un número, indicar si es un número capicua o no.
 Los números capicúa se Leen igual de izquierda a derecha y viceversa
 Ejemplos:
                       I
capi(2002); // Devuelve: true
capi(2014); // Devuelve: false
 */


const capicua = (numero: number): boolean => {
    let comparador: number;

    comparador = parseInt(numero.toString().split('').reverse().join(''));

    return comparador === numero;
}

console.log(capicua(2112));