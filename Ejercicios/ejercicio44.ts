/* Enunciado Ejercicio 44:
Dado un array de strings, devolver otro con los valores que
 esten formados por más de dos palabras.
 Ejemplos:
dosPalabras (["hola", "san fransico", "ciudad real", "victor"]);
Devuelve:
 ["san fransico", "ciudad real"]
  / *
 */

const dosPalabras = (palabras: string[]): string[] => {

    let frasesLargas: string[] = [];

    palabras.forEach(frase => {
        if(frase.split(' ').length > 1){
            frasesLargas.push(frase);
        }
    })
   
    return frasesLargas;  
}


console.log(dosPalabras (["hola", "san fransico", "ciudad real", "victor" , "San pio"]));