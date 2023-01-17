/* Enunciado Ejercicio 31:
Dado un número,
                 indicar r-que.tipo.de-angulo.es.
Ejemplos:
console. Log(anguLo(47))
console. Log(angulo(90))
console. Log(angulo(145))
 console. Log(angulo(180))

Ejemplos:
Ángulo Agudo
Ángulo Recto
Ángulo Obstuso
Ángulo Llano


completo 360 *
concavo +180 *
obtuso + 90 *
llano 180 *
recto 90 *
agudo - 90
*/


const tipoAngulo = (angulo: number): string => {
    let tipo: string = '';

    if(angulo === 360){
        tipo = 'Completo'
    }else if(angulo > 180 && angulo < 360){
        tipo = 'Concavo'
    }else if(angulo === 180){
        tipo = 'Llano'
    }else if(angulo > 90 && angulo < 180){
        tipo = 'Obtuso'
    }else if (angulo === 90){
        tipo = 'Recto';
    }else if(angulo < 90){
        tipo = 'Agudo';
    }else {
        throw new Error('Valor no valido')
    }

    return `El angulo ${angulo} es de tipo ${tipo}`;
}

console.log(tipoAngulo(180));