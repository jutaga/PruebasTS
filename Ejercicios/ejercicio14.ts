/* Enunciado Ejercicio 14:
Dado un string y un número, repetir el string tantas veces como el número indique.
 */


const repetirString = (palabra:string, veces:number): string => {

    let repetido: string = '';

    repetido = palabra.repeat(veces);

    return repetido;
    
}



console.log(repetirString('juan', 4));