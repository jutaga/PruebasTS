/* Enunciado Ejercicio 46:
Dado un string, devolver todos Los posibles substrings
Ejemplos:
// todosSubStrings("hola")
[
  'j',    'ju', 'jua',
  'juan', 'u',  'ua',
  'uan',  'a',  'an',
  'n'
]
*/


function todosSubStrings(palabra: string): string[] {

    let substrings: string[] = [];

    for (let letra in palabra) {
        
        let comienzo: number = parseInt(letra);

        for(let i = 0 ; i <= palabra.length - comienzo ; i++) {
            let final: number = parseInt(i) + parseInt(comienzo);
            substrings.push(palabra.substring(comienzo, final));
        }
    }

    return substrings.filter( elemento => elemento.length > 0 );
}

console.log(todosSubStrings("juan"));