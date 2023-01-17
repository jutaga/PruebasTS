/* Enunciado Ejercicio 21:
Dada una cadena de texto y un número, recortar el string mostrando Los X primeros caracteres.
          I
 Ejemplos:
recortar('Cursos DesarroLLo Web', 6) // Devuelve: 'Cursos'
 */


const recortador = (frase: string, numero: number): string => {

    return (typeof frase === 'string' && typeof numero === 'number') ? frase.slice(0, numero) : `No es un valor valido`;
}

console.log(recortador('Juan pablo tabares gallego', 16));