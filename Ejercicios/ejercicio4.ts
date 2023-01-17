// Enunciado Ejercicio 4:
// Dada una cadena de texto, darle La vuelta e invertir el orden de sus caracteres, sin usar métodos propios del Lenguaje, solo estructuras de control.


const invertirTexto = (texto: string):string => {

    let invertido: string[] = [];

    for (let i = texto.length; i > 0; i--) {
        invertido[texto.length - i] = texto[i - 1];
    }

    return `Palabra original ${texto}, Invertido ${invertido.join('')}`;

}


console.log(invertirTexto('juan pablo'));
// invertirTexto('juan pablo');