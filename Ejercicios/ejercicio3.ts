// Dada una palabra, buscarlar en la frase y devolver cuantas veces aparece en ella
// frase y palabra parametros de la funcion


const wordInPhrase = (word: string, phrase: string): string => {

   let phraseClean = phrase.toLowerCase().replace(',' , '').split(word.toLowerCase()).length;

   return `${word} is ${phraseClean} times in ${phrase}`;

}



// console.log(wordInPhrase('sentence','Hi Im a word in this sentence'));
console.log(wordInPhrase('fútbol','La selección de fútbol de España es, desde su creación en el año 1920, el equipo formado por jugadores de nacionalidad española que representa a la Real Federación Española de Fútbol (RFEF) en las competiciones oficiales organizadas por la Unión de Asociaciones Europeas de Fútbol (UEFA) y la Federación Internacional de Fútbol Asociación (FIFA).'));

// function wordCount(word: string, phrase: string){
//     const countWord = phrase.toLowerCase().split(word.toLowerCase()).length;
//     console.log(phrase.toLowerCase().split(word.toLowerCase()));
//     return (countWord > 0) ? countWord - 1: countWord;
// }
/* console.log(wordCount("fútbol", `La selección de fútbol de España es, desde su creación en el año 1920, el equipo formado por jugadores de
nacionalidad española que representa a la Real Federación Española de Fútbol (RFEF) en las competiciones
oficiales organizadas por la Unión de Asociaciones Europeas de Fútbol (UEFA) y la Federación Internacional de
Fútbol Asociación (FIFA).`)); */