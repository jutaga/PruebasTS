/* Enunciado Ejercicio 11:
Dado un texto y una busqueda, censurar todas las coincidencias de La busqueda en el texto con [-CENSURADO-].
Si texto O busqueda están vacio mostrar "No puedes Leer el texto y La busqueda" en el caso
 de que ambos parámetros no LLeguen.
 */


const censurarPalabra = (frase: string, palabra: string): string => {

    let textoCensurado: string = ''
    let arrayString: string[] = [];

    if( frase.length !== 0 && palabra.length !== 0 ){


        arrayString = frase.toLowerCase()
                            .replace(',', '')
                            .split(' ');

        for (let i = 0; i < arrayString.length; i++) {

            if(arrayString[i] === palabra){

                arrayString[i] = arrayString[i].replace(palabra, '[-CENSURADO-]');
            }
        }
        
        return arrayString.join(' ');
        
    }else {
        textoCensurado = "No puedes Leer el texto y La busqueda";

        return textoCensurado;
    }
    
}


console.log(censurarPalabra('hola soy juan juan juan pablo tabares juan , soy grande juan', 'juan'))