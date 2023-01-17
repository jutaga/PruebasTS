/* Enunciado Ejercicio 15:
Dada una cadena de texto, devolver el caracter más usado.
 */


const masRepetida = (texto: string): string => {

    let mapeo_letras: any  = {}
    let max: number = 0;
    let letraMasRepetida: string = '';

    let texto1: string = '';

    texto1 = texto.replace(/ /g, '');

    for (const letra of texto1) {

        if (!mapeo_letras[letra]) {
            if(mapeo_letras[letra] !== ' ') mapeo_letras[letra] = 1;
        }else {
            mapeo_letras[letra]++;
        }
        
    }

    for(let letra in mapeo_letras){
    
        if(mapeo_letras[letra] > max){
            max = mapeo_letras[letra];
            letraMasRepetida = letra;
        }
    
        
    } 
    
    return `La letra mas repetida es ${letraMasRepetida} y esta ${max} veces`;  

}

console.log(masRepetida('juan pablo tabares gallego'));




