/* 
Enunciado Ejercicio 17:
Dado un número, mostrar Los números de 1 hasta el número.
Pero para múltiplos de tres imprimir "buzz" en Lugar del número
y para Los múltiplos de cinco imprimir "Lightyear".
Para múltiplos de tres y cinco imprimen "BuzzLightyear".
*/

const buzzLightYear = (numero: number): string => {

    let tabla: string = '';
    let tablaCompletada: string = '';


    for (let i = 1; i <= numero; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            tabla += 'BuzzLightYear' + '\n';
            tablaCompletada = tabla;
        } else if (i % 3 === 0) {
            tabla += 'Buzz' + '\n';
            tablaCompletada = tabla;
        } else if (i % 5 === 0) {
            tabla += 'LightYear' + '\n';
            tablaCompletada = tabla;
        } else {
            tabla += i.toString() + '\n';
            tablaCompletada = tabla;
        }      
    }

    return tablaCompletada;
}

console.log(buzzLightYear(15));