/* Enunciado Ejercicio 23:
Dada una cadena de texto, poner en mayúscula la primera Letra
 de cada palabra en la cadena y Luego devolver la cadena.
 Ejemplos:
enMayuscula('hola soy victor')
 Devuelve: 'Hola Soy Victor'
 */



const mayusculas = (cadena: string): string => {

    let cadenaLista: string = '';
    let arrayMomentario: string[] = [];
    let contador: number = 0;

    arrayMomentario = cadena.split(' ');

    for (const palabra of arrayMomentario) {

        arrayMomentario[contador] = palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
        contador++;
    };

    cadenaLista = arrayMomentario.join(' ');
    // console.log(arrayMomentario);


    return cadenaLista;
}


console.log(mayusculas('lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium ea nisi earum a suscipit repellat eaque molestias illum, dolorem adipisci voluptas nemo reiciendis distinctio incidunt enim necessitatibus recusandae temporibus iusto.'))
// mayusculas('lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium ea nisi earum a suscipit repellat eaque molestias illum, dolorem adipisci voluptas nemo reiciendis distinctio incidunt enim necessitatibus recusandae temporibus iusto.')