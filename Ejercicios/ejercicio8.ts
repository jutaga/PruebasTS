// Enunciado Ejercicio 8:
// Dado un número entero, inviertelo y devuelve de nuevo el entero.


const invertirNumero = (num: number): number => {

    let invertido: number = 0;

    invertido = parseInt(num.toString()
                        .split('')
                        .reverse()
                        .join('')) * Math.sign(num);

    return invertido;
}


console.log(invertirNumero(52968));
console.log(invertirNumero(123456));
console.log(invertirNumero(987654321));
console.log(invertirNumero(-1253));