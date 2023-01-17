// Enunciado Ejercicio 7:
// Dados dos números, devolver cuantos números IMPARES hay entre ellos.

const numerosImpares = (num1: number, num2: number): string => {

    let contadorImpares: number = 0;

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            if (i % 2 !== 0) {
                contadorImpares += 1;
            }
        }
    }else {
        for (let j = num1; j >= num2; j--) {
            if (j % 2 !== 0) {
                contadorImpares += 1;
            }
        }
    }    
    return `Entre ${num1} a ${num2} hay ${contadorImpares} Numero Impares`;
}


console.log(numerosImpares(120, 70));
console.log('-------------------------')
console.log(numerosImpares(70, 120));