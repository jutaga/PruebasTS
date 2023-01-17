// Enunciado Ejercicio 9:
// Dados dos arrays, devolver array con solo Los elementos comunes entre ambos.


const array1 : any[] = [2 , 6 ,9 , 5 ,3, 5]
const array2 : any[] = [1 , 6 ,2 , 3 ,5]


const elementosComunes = (numeros1: any[] , numeros2: any[]) => {

    const filtrado = numeros1.filter(numero => numeros2.includes(numero));
    console.log(filtrado);
}

elementosComunes(array1, array2);

/* const numerosComunes = (numeros1: number[] , numeros2: number[]): number[] => {

    return numeros1.length > numeros2.length ? compararArray(numeros1, numeros2) : compararArray(numeros2, numeros1)

}



const compararArray = (numeros1: number[] , numeros2: number[]): number[] => {

    let numeros: number[] = [];

    for(let i = 0; i < numeros1.length; i++){
        for(let j = 0; j < numeros2.length; j++){
            if(numeros1[i] === numeros2[j]){
                numeros.push(numeros1[i]);
            }
        }
    }

    return numeros;

}

console.log(numerosComunes(array1, array2)); */