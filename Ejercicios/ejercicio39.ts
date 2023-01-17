/* Comprobar si el email es valido */

function comprobarEmail(email: string): boolean{
    
    return/^\w+@\w+\.\w+$/gi.test(email);
}


console.log(comprobarEmail('juancho9615@hotmail.com'));