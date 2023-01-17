/* Enunciado Ejercicio 35:
Dados un array, crear otro con el primer y el ultimo elemento del original.
Ejemplos:
primeroYultimo([180, 200, 300, 780]) // Devuelve: [100, 780]
*/


function nuevoArray<T>(ar1: T[]): T[] {

    let arrNuevo: T[] = [];

    arrNuevo.push(ar1[0], ar1[ar1.length - 1]);
    return arrNuevo;
}

const arr2: any[] = ['Primero', 1, 'hola', 3, '4', 6, 'Ultimo'];


console.log(nuevoArray(arr2));