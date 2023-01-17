/* 
Enunciado Ejercicio 19: Dado un array de objetos de peliculas (titulo, director, vista) mostrar todas Las peliculas indicando cual has visto y cual no.
 */


const películas = [
    {
 
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
 
        titulo: "La Liga de la justicia",
        director: "Zack Snyder",
        vista: false
    },
    {
 
        titulo: "Los Vengadores: Endgame",
        director: "Joe Russo",
        vista: true
    },
    {
 
        titulo: "Batman vs Superman",
        director: "Zack Snyder",
        vista: false
    }
];

/* const peliculasVistas = (peliculas: any[]): string => {

    let textos: string = 'Peliculas Que te Faltan por ver: \n';
    let peliculasNoVistas: any[] = [];

    
    for (const element of peliculas){

        if(!element.vista){
            peliculasNoVistas.push(element);
        }
    }

    for (const element of peliculasNoVistas){

        textos += `${element.titulo} de ${element.director} \n`;
    }

    return textos;
} */

const peliculasVistas = (peliculas: any[]): string => {

    let textos: string = 'Peliculas : \n';
    
    for (const element of peliculas){

        if(element.vista){
            textos += ` Ya has visto ${element.titulo} de ${element.director} \n`;
        }else {
            textos += ` Te falta por ver ${element.titulo} de ${element.director} \n`;
        }
        
    }

    return textos;
}

console.log(peliculasVistas(películas))
// peliculasVistas(películas)