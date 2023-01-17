/* Enunciado Ejercicio 37:
Dado un array o un texto, devolver el elemento o palabras que mas aparece
 Ejemplos:
eLQueMasAparece( "victor robles victor");
elQueMasAparece([1, 2, 3, 4, 1]);
// Devuelve:
 victor
 1
 */

const elQueMasAparece = (ar: string | number[]): string => {

    let masRepetida: string = '';
    let mapeo_letras: any = {};
    let arNuevo: string = '';
    let max: number = 0;

    if (typeof ar === 'string') {
        arNuevo = ar.replace(/ /g, '');

    } else {
        arNuevo = ar.join('');
    }

    for (const letra of arNuevo) {
        if (!mapeo_letras[letra]) {
            if (mapeo_letras[letra] !== ' ') mapeo_letras[letra] = 1;
        } else {
            mapeo_letras[letra]++;
        }
    }
    for(let letra in mapeo_letras){
    
        if(mapeo_letras[letra] > max){
            max = mapeo_letras[letra];
            masRepetida = letra;
        }           
    } 

    return `La letra mas repetida es ${masRepetida} y esta ${max} veces`;

}



console.log(elQueMasAparece([1, 2, 3, 4, 1]))
console.log(elQueMasAparece("victor robles victor"))
