/* Enunciado Ejercicio 32:
Dado un array de números, devolver el array con
sus numeros elevados al cuadrado
 (numero multiplicado por si mismo).
 EL array debe eliminar cualquier contenido
que no sea numerico.
 Ejemplos:
alCuadrado([5, 6, 7])
 */

const elevarElemento = (ar : number[]): number[] =>{
    let filtrados:number[] = [];

    filtrados = ar.filter( numeros =>  typeof numeros === 'number');
    
    return filtrados.map(numero => Math.pow(numero, 2));;
}

const numeros: number[] = [1, '2', 3, '4', 5, 6, 7, '2'];


console.log(elevarElemento(numeros));