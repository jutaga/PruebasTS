/* Enunciado Ejercicio 20:
Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.
Una cadena es un anagrama de otra si usa Los mismos caracteres en La misma cantidad.
No tener en cuenta espacios, simbolos raros, puntos, etc
 Ejemplos:
anagramas('Riesgo','Sergio') Devuelve: true
 */

const anagramas = (palabra1: string, palabra2: string): boolean => {

    let array1: string = '';
    let array2: string = '';

    if (palabra1.length === palabra2.length) {

        array1 = palabra1.trim()
            .replace(/[^\w]/gi,'')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        array2 = palabra2.trim()
            .replace(/[^\w]/gi,'')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        return array1 === array2;

    } else {
        return false;
    }
}

console.log(anagramas('Riesgo. - , ', ' - , Sergio.'));
// anagramas('Riesgo', 'Sergio')
