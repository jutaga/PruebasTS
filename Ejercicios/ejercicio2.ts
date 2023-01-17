// Enunciado Ejercicio 2:
// Dada una cadena de texto, comprobar si es un palindromo O no.
//  Los palíndromos son palabras que se Leen igual aun estando invertid
// Por ejemplo: ana, bob, otto, allivessevilla




const palindromos = (texto : string):boolean => {

    let lowCase: string = texto.toLowerCase();
    

    let palabra: string[] = lowCase.split('');
    let palabraReverse: string[] = lowCase.split('').reverse();
    let contador: number = 0;

    let sinEspacios: string[] = palabra.filter( x => x !== ' ');
    let reverseSinEspacios: string[] = palabraReverse.filter( x => x !== ' ');


    for(let i = 0; i < sinEspacios.length; i++){

        if(sinEspacios[i] === reverseSinEspacios[i]){
            contador += 1;
        }
    }

    return sinEspacios.length === contador;
    
}


console.log(palindromos('anita lava la tina'));
// palindromos('Atar a la rata');
