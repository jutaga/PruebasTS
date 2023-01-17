/* Enunciado Ejercicio 16:
Dada una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tiene.
 */


const numeroVocales = (frase:string): string => {

    let totalVocales: number = 0;

    let textoTransformado = frase.toLowerCase();


    for (const letra of textoTransformado) {

        if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            totalVocales++;
        }
        
    }

    return `La frase o palabra ${frase} , tiene un  total de ${totalVocales} vocales`
}


console.log(numeroVocales('juan pablo tabares gallego'))