/* 
Enunciado Ejercicio 13:
Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un número que indique su tamaño.                       I
Dividirlo en arrays de X elementos.
 */


const divideArray = (list: any[] , divisor: number): any[] => {


    let newArray: any[] = [];

    while(list.length > divisor) {

        newArray.push(list.splice(0, divisor));
    }

    if(list.length) newArray.push(list);


    return newArray;
}


let array1: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];



console.log(divideArray(array1, 2));