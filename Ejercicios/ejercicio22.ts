/* Enunciado Ejercicio 22:
Dados dos números, indicar cual es mayor y cual es menor.
Ejemplos:
mayorMenor(8, 6)
 DevueLve:
 EL NUMERO MAYOR ES: 8
 EL NUMERO MENOR ES: 6
 */



 const comparar = (num1: number, num2: number): string => {


    let resultado: string = '';

    if(num1 === num2) {
        resultado = `${num1} ${num2} son iguales`
    }else if(num1 > num2){
        resultado = `El mayor es ${num1}\nEl menor es: ${num2}`;
    }else {
        resultado = `El mayor es ${num2}\nEl menor es: ${num1}`;
    }
    return resultado;
 }



 console.log(comparar(250.02,250.01));