// Dado un numero , devolver su tabla de multiplicar completa



const multiplicate = (numb: number):string => {
    let table = 'Table ' + numb;
    let text: string = '';

    console.log(table);

    for(let i = 1; i <= 10; i++) {

        text += `${i} X ${numb} = ${i * numb} \n`;
        
        
    }
    
    return text;

}

console.log(multiplicate(3));