/* Enunciado Ejercicio 25:
Dado un string, ponerlo completo en mayusculas O minusculas dependiendo de si hay más mayusculas O minusculas por defecto en el string.
 Si hay más mayusculas ponerlo todo en mayus.
Si hay más minusculas ponerlo todo en minus.
Ejemplos:
mayusMinus("JOAQuin")
DevueLve: JOAQUIN
mayusWinus("Victor")
Devuelve: victor
 */



const comparador = (palabraPrincipal: string): string => {

    let letras: string[] = [];
    let contadorMayus: number = 0;
    let contadorMinus: number = 0;
    let fraseFinal: string = '';




    letras = palabraPrincipal.trim()
        .replace(/[^\w]/gi, ' ')
        .split('').filter(letras => letras !== ' ');


    for (const letra of letras) {

        if (letra === letra.toLocaleUpperCase()) {
            contadorMayus++;
        } else {
            contadorMinus++;
        }
    }

    return contadorMayus > contadorMinus ? palabraPrincipal.toLocaleUpperCase() : palabraPrincipal.toLocaleLowerCase();
}


console.log(comparador('JUAN PAblo TABAres'));


console.log('.' === '.'.toUpperCase());