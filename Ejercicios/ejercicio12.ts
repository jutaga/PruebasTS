/* 
Enunciado Ejercicio 12:
Dado un número mostrar todos Los números desde ese al 0 de 8 en en una lista con guiones y cada número debe empezar por n°
Ejemplos:
hastaCero(100) // Devuelve:
Del 100 al 04
n°100
n°92
n°84
n°76
n°68
n°60
n°52
n°44
n°36
n°28
n°20
n°12
n°4
FIN

 */


const hastaCero = (numero: number): string => {

    let listaCompleta: string = `Del ${numero} al 0 \n`;


    for(let i = numero; i > 0 ; i-=8) {

        let tabla: string = '';
        tabla += 'n°' + i + '\n';
        listaCompleta += tabla;

    }

    return listaCompleta;
}


console.log(hastaCero(500));