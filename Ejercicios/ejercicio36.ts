/* Enunciado Ejercicio 36:
Dado un texto, devolver cuantas consonantes y cuantas vocales
                                  I
Ejemplos:
cuentaLetras("victorroblesweb.es");
Devuelve:
Consonantes: 5
 Vocales: 6
*/


const contadorLetras = (texto: string): number[] => {

    let resultado:number[] = [];
    let vocales: number = 0;
    let consonantes: number = 0;

    let textoFiltrado = texto.replace(/ /g, '');
    console.log(textoFiltrado);


    for (const letra of textoFiltrado) {        
        if(letra.toLowerCase() === 'a' || letra.toLowerCase() === 'e' || letra.toLowerCase() === 'i' || letra.toLowerCase() === 'o' || letra.toLowerCase() === 'u'){
            vocales++;
        }else {
            consonantes++;
        }
        
    }

    resultado.push(vocales, consonantes);

    return resultado;
}

const resultado = contadorLetras('juan pablo tabares')

console.log('Vocales: ' + resultado[0] + ' Consonantes: ' + resultado[1]);