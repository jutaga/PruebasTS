/* Enunciado Ejercicio 40.
Dado un array de números, devolver el valor más bajo y el más alto
Ejemplos:
altoBajo(11,2,3,4,51);
Devuelve:
    bajo: 1,
    alto: 5
 */


const menorMayor = (ar: number[]): string => {


    return `El mayor es: ${Math.max(...ar)}, El menor es ${Math.min(...ar)}`;
}

console.log(menorMayor([11,2,3,4,51]))

function altobajo(numero: number[]){
    
    let ordenados:number[] = numero.sort((a, b) => a - b);
    return { bajo: ordenados [0], alto: ordenados[ordenados.length - 1]};
}

console.log(altobajo([11,2,3,4,51]))

