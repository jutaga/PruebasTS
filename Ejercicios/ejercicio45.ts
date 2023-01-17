/* Enunciado Ejercicio 45:
Dado un array de alumnos (nombre y nota) mostrar cuantos
aLumnos estan suspensos y cuantos estan aprobados.
 */

interface Estudiante {
    nombre: string;
    nota: number;
}

const alumnos: Estudiante[] = [
    {
        nombre: 'Paula',
        nota: 9.5
    },
    {
        nombre: 'Roberto',
        nota: 8
    },
    {
        nombre: 'David',
        nota: 4
    },
    {
        nombre: 'Mireia',
        nota: 2.5
    }
    ,
    {
        nombre: 'Mireia',
        nota: 6.7
    }
    ,
    {
        nombre: 'Mireia',
        nota: 5.5
    }
];


const aprobados = (alumnos:Estudiante[]): string => {
    let aprobados = alumnos.filter( estudiante => estudiante.nota >= 5);
    return `Aprobados: ${aprobados.length}, Desaprobados: ${alumnos.length - aprobados.length }`;
}

console.log(aprobados(alumnos));