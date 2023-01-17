/* Enunciado Ejercicio 18:
Dado un número, mostrar todos sus numeros divisores.
                       I
Ejemplos:
mostrarDivisores(5);
Devuelve
 1
 5
*/


const divisores = (numero:number): string => {

    
    let tabla: string = `Numeros Divisores de ${numero}: \n`;
    let resultado: string = '';


    for (let i = 1; i <= numero; i++) {

        if(numero % i == 0) {
            tabla += i.toString() + '\n';
            resultado = tabla;
        }
    }
    return resultado
}


console.log(divisores(152));