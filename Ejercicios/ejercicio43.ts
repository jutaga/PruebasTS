/* Enunciado Ejercicio 43:
Dado un array de números,
                           sacar La media de todos ellos
Ejemplos:
LaMedia([1,2,3]);

Devuelve:
2
*/


const laMedia = (numeros: number[]): number[] => {

    let media: number = 0;
    let media1 : number = 0;

    let suma: number =  numeros.reduce((acumulado, numeroActual):number => acumulado + numeroActual);

    media1 = suma / numeros.length;

    for (const numero of numeros) {
        media += numero;
    }

    return [media /= numeros.length, media1];
}



const numeros: number[] = [1,2,3,4,5,6,7,];

console.log(laMedia(numeros))


