/* Enunciado Ejercicio 34:
Dados dos números, devolver Los resultados de Las
operaciones basicas entre ellos (suma, resta, producto, divisio
Ejemplos:
calculadora(5,5)
Devuelve:
La suma es: 10
La resta es: 0
La multiplicación es: 25
La división es: 1
*/

const calculadora = (n1 : number, n2 : number): string => {
    return `La suma es: ${n1 + n2}\nLa resta es: ${n1 - n2}\nLa multiplicación es: ${n1 * n2}\nLa división es: ${n1/ n2}`;
}


console.log(calculadora(95, 22));