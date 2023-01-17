// Enunciado Ejercicio 5
//  ¿Cuanto es el X por ciento de X numero?


const  porcentage = (porcentage: number, numb:number): string => {

    let resultado: number = 0;
    
    if(porcentage >= 0 && numb > 0){

        resultado = (porcentage * numb) / 100;
    }

    return `El ${porcentage} % de ${numb} es ${resultado}`;
}


console.log(porcentage(0.3, 897));