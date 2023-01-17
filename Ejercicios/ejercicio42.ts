/* Enunciado Ejercicio 42:
Dados dos números, sacar un número aleatorio entre ellos.
 Ejemplos:
aleatorio(1, 100);
Devuelve:
46
 */

const aleatorio = (min: number, max: number): number => {
    return max > min ? Math.floor(Math.random()* (max - min) + min) : Math.floor(Math.random()* (min - max) - max);
}


console.log(aleatorio(10 , 20))