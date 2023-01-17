/* Enunciado Ejercicio 28:
Dado un número, devolver su. factorial.
 EL factorial de un número es La multiplicación
 de todos Los numeros hasta LLegar a el.
 Ejemplos:
factorial(3); // Devuelve: 6
 */

const factorial = (n: number): number => {
    let acumulador: number = 1;
    for (let i = 1; i <= n ; i++) {
        acumulador *= i;
        // console.log(acumulador)
    }
    return acumulador;
} 


console.log('La factorial es:',factorial(11));
// factorial(3);