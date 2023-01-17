/* Enunciado Ejercicio 30:
Dado un array de numero, devolver el array sin elementos duplicados
Si hay un string eliminarlo del array.
Ejemplos:
eliminarDuplicados([1,2,1,1,1,3,4]); // Devuelve: [1,2,3,4]
 */


const eliminarDuplicados = (array: number[]): number[] => {

    array = array.filter( i => typeof i !== 'string');
    let sinRepetir = new Set(array);

    return Array.from(sinRepetir);
}


console.log(eliminarDuplicados([2,3,3,3,5,4,'9']));


// eliminarDuplicados([2,3,3,3,5,4,'9']);
