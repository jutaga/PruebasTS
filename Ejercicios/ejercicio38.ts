/* Enunciado Ejercicio 38:
 Dado un número, mostrar Listado de Los cuadrados de todos Los números naturales hasta LLegar al mismo.
 Como hacerlo:
 - Dos funciones
 - Hacer bucle del cero al número
- Sacar el cuadrado y mostrar
*/


const numerosCuadrados = (num: number): number[] => {

    let numerosCuadrados: number[] = [];

    for(let i = 1; i <= num; i++ ){
        numerosCuadrados.push(i * i);
    }

    return numerosCuadrados;

}

console.log(numerosCuadrados(10));