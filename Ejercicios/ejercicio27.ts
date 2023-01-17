/* Enunciado Ejercicio 27:
Dado un número, mostrar a cuantos años, meses y dias equivalen.
Ejemplos:
cacularDias(920);
Equivale a 2 años, 6-meses y 10 días.
 */

const calcularDias = (dias: number): string => {

    const anios: number = Math.floor(dias / 365);
    let diasRestantes: number = dias % 365;
    const meses: number = Math.floor(diasRestantes / 30);
    diasRestantes = diasRestantes % 30

    console.log(anios, meses, diasRestantes);

    return `Years ${anios}\nMeses: ${meses} \nDias: ${diasRestantes}`;


}

// calcularDias(395);
console.log(calcularDias(730));
