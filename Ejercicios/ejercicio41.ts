/* Enunciado Ejercicio 41:
Dado un número, mostrar un triangulo de asteriscos
 con ese número de filas.
 Ejemplos:
triangulo(4) // Devuelve:
   *
  ***
 *****
*******

*/

function triangulo(numero: number) {

    let triangulo: string = "";

    for (let i = 1; i <= numero; i+=2) {
       
        for (let j = 1; j <= i; j++) {
            triangulo += "*"
        }
            triangulo += "\n";
    }

    console.log(triangulo);
}


triangulo(11);