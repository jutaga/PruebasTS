/* Enunciado Ejercicio 26:
Dado un número, mostrar su serie de fibonacci.
La serie de fibonacci es un orden de números donde cada número es La suma de Los dos anteriores.
Ejemplos:
fib(10)[0]
fib(10)[1]
Serie completa: 0,1,1,2,3,5,8,13,21,34,55
Resultado de La serie fibonnacci: 55
 */


function fibonacci(numero: number) {
    let serie: number[] = [0, 1];

    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return [serie, serie[numero]];
}

console.log(fibonacci(15)[0]);
console.log(fibonacci(15)[1]);