/* Dado un número, mostrar una escalera con escalones de "[-]"
 usando el número para los niveles de La escalera. */


 const escalones = (numero: number): string => {

    let escaleraCompleta: string = '';

    for (let nivel = 1; nivel <= numero; nivel++) { 
        
        let escalones: string = '';

        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]"
        }

        escaleraCompleta += escalones + '\n';
        
    }

    return escaleraCompleta;

 }

console.log(escalones(11));