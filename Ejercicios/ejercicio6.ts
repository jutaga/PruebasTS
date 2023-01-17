// Enunciado Ejercicio 6:
// Dibujar un cuadrado hueco con asteriscos.
/* 
    numero 4
    ****
    *  *
    *  *
    ****
*/


const lado = (numero: number): string => {
    let lado: string = '';


    for (let i = 0; i < numero; i++) {
        lado += '*';
    }

    return lado;
}


const cuadrado = (numero: number): string => {
    let dibujo: string = '';
    let contenido: string = '';

    dibujo = lado(numero) + "\n";

    for (let i = 0; i < numero - 2; i++) {
        contenido = '*';

        for (let j = 0; j < numero - 2; j++) {
            contenido += ' ';
        }

        contenido += '*';

        dibujo += contenido + "\n";
    }

    dibujo += lado(numero)

    return dibujo;
}


console.log(cuadrado(10))