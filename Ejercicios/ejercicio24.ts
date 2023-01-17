/* Enunciado Ejercicio 24:
Dada un array de enteros y un número, detectar si esa lista de números es una permutación del 1 al número aportado.
 En este caso una permutación es una secuencia de números en orden sin que falte ninguno entre ellos.
Ejemplos:
permutacion([1, 2, 3, 4, 5], 5)
 DevueLve: true
permutacion([1, 2, 3, 5], 5) )
Devuelve: false
 */

const numeros: number[] = [6, 2, 3, 4, 5, 1];


const permutacion = (array: number[], num: number): boolean => {
    let comparador: number[] = [];
    let ordenado: number[] = [];

    ordenado = array.sort((a: number, b: number): number => a - b);
    // console.log(ordenado);

    for (let i = 1; i <= num; i++) {
        comparador.push(i);
    }
    return ordenado.toString() === comparador.toString();
}


console.log(permutacion(numeros, 6));
// permutacion(numeros, 6);


