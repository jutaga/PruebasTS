"use strict";
const multiplicate = (numb) => {
    let table = 'Table ' + numb;
    let text = '';
    console.log(table);
    for (let i = 1; i <= 10; i++) {
        text += `${i} X ${numb} = ${i * numb} \n`;
    }
    return text;
};
console.log(multiplicate(3));
const escalones = (numero) => {
    let escaleraCompleta = '';
    for (let nivel = 1; nivel <= numero; nivel++) {
        let escalones = '';
        for (let escalon = 1; escalon <= nivel; escalon++) {
            escalones += "[-]";
        }
        escaleraCompleta += escalones + '\n';
    }
    return escaleraCompleta;
};
console.log(escalones(11));
const censurarPalabra = (frase, palabra) => {
    let textoCensurado = '';
    let arrayString = [];
    if (frase.length !== 0 && palabra.length !== 0) {
        arrayString = frase.toLowerCase()
            .replace(',', '')
            .split(' ');
        for (let i = 0; i < arrayString.length; i++) {
            if (arrayString[i] === palabra) {
                arrayString[i] = arrayString[i].replace(palabra, '[-CENSURADO-]');
            }
        }
        return arrayString.join(' ');
    }
    else {
        textoCensurado = "No puedes Leer el texto y La busqueda";
        return textoCensurado;
    }
};
console.log(censurarPalabra('hola soy juan juan juan pablo tabares juan , soy grande juan', 'juan'));
const hastaCero = (numero) => {
    let listaCompleta = `Del ${numero} al 0 \n`;
    for (let i = numero; i > 0; i -= 8) {
        let tabla = '';
        tabla += 'n°' + i + '\n';
        listaCompleta += tabla;
    }
    return listaCompleta;
};
console.log(hastaCero(500));
const divideArray = (list, divisor) => {
    let newArray = [];
    while (list.length > divisor) {
        newArray.push(list.splice(0, divisor));
    }
    if (list.length)
        newArray.push(list);
    return newArray;
};
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(divideArray(array1, 2));
const repetirString = (palabra, veces) => {
    let repetido = '';
    repetido = palabra.repeat(veces);
    return repetido;
};
console.log(repetirString('juan', 4));
const masRepetida = (texto) => {
    let mapeo_letras = {};
    let max = 0;
    let letraMasRepetida = '';
    let texto1 = '';
    texto1 = texto.replace(/ /g, '');
    for (const letra of texto1) {
        if (!mapeo_letras[letra]) {
            if (mapeo_letras[letra] !== ' ')
                mapeo_letras[letra] = 1;
        }
        else {
            mapeo_letras[letra]++;
        }
    }
    for (let letra in mapeo_letras) {
        if (mapeo_letras[letra] > max) {
            max = mapeo_letras[letra];
            letraMasRepetida = letra;
        }
    }
    return `La letra mas repetida es ${letraMasRepetida} y esta ${max} veces`;
};
console.log(masRepetida('juan pablo tabares gallego'));
const numeroVocales = (frase) => {
    let totalVocales = 0;
    let textoTransformado = frase.toLowerCase();
    for (const letra of textoTransformado) {
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            totalVocales++;
        }
    }
    return `La frase o palabra ${frase} , tiene un  total de ${totalVocales} vocales`;
};
console.log(numeroVocales('juan pablo tabares gallego'));
const buzzLightYear = (numero) => {
    let tabla = '';
    let tablaCompletada = '';
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tabla += 'BuzzLightYear' + '\n';
            tablaCompletada = tabla;
        }
        else if (i % 3 === 0) {
            tabla += 'Buzz' + '\n';
            tablaCompletada = tabla;
        }
        else if (i % 5 === 0) {
            tabla += 'LightYear' + '\n';
            tablaCompletada = tabla;
        }
        else {
            tabla += i.toString() + '\n';
            tablaCompletada = tabla;
        }
    }
    return tablaCompletada;
};
console.log(buzzLightYear(15));
const divisores = (numero) => {
    let tabla = `Numeros Divisores de ${numero}: \n`;
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            tabla += i.toString() + '\n';
            resultado = tabla;
        }
    }
    return resultado;
};
console.log(divisores(152));
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
const peliculasVistas = (peliculas) => {
    let textos = 'Peliculas : \n';
    for (const element of peliculas) {
        if (element.vista) {
            textos += ` Ya has visto ${element.titulo} de ${element.director} \n`;
        }
        else {
            textos += ` Te falta por ver ${element.titulo} de ${element.director} \n`;
        }
    }
    return textos;
};
console.log(peliculasVistas(películas));
const palindromos = (texto) => {
    let lowCase = texto.toLowerCase();
    let palabra = lowCase.split('');
    let palabraReverse = lowCase.split('').reverse();
    let contador = 0;
    let sinEspacios = palabra.filter(x => x !== ' ');
    let reverseSinEspacios = palabraReverse.filter(x => x !== ' ');
    for (let i = 0; i < sinEspacios.length; i++) {
        if (sinEspacios[i] === reverseSinEspacios[i]) {
            contador += 1;
        }
    }
    return sinEspacios.length === contador;
};
console.log(palindromos('anita lava la tina'));
const anagramas = (palabra1, palabra2) => {
    let array1 = '';
    let array2 = '';
    if (palabra1.length === palabra2.length) {
        array1 = palabra1.trim()
            .replace(/[^\w]/gi, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        array2 = palabra2.trim()
            .replace(/[^\w]/gi, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        return array1 === array2;
    }
    else {
        return false;
    }
};
console.log(anagramas('Riesgo. - , ', ' - , Sergio.'));
const recortador = (frase, numero) => {
    return (typeof frase === 'string' && typeof numero === 'number') ? frase.slice(0, numero) : `No es un valor valido`;
};
console.log(recortador('Juan pablo tabares gallego', 16));
const comparar = (num1, num2) => {
    let resultado = '';
    if (num1 === num2) {
        resultado = `${num1} ${num2} son iguales`;
    }
    else if (num1 > num2) {
        resultado = `El mayor es ${num1}\nEl menor es: ${num2}`;
    }
    else {
        resultado = `El mayor es ${num2}\nEl menor es: ${num1}`;
    }
    return resultado;
};
console.log(comparar(250.02, 250.01));
const mayusculas = (cadena) => {
    let cadenaLista = '';
    let arrayMomentario = [];
    let contador = 0;
    arrayMomentario = cadena.split(' ');
    for (const palabra of arrayMomentario) {
        arrayMomentario[contador] = palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
        contador++;
    }
    ;
    cadenaLista = arrayMomentario.join(' ');
    return cadenaLista;
};
console.log(mayusculas('lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium ea nisi earum a suscipit repellat eaque molestias illum, dolorem adipisci voluptas nemo reiciendis distinctio incidunt enim necessitatibus recusandae temporibus iusto.'));
const numeros = [6, 2, 3, 4, 5, 1];
const permutacion = (array, num) => {
    let comparador = [];
    let ordenado = [];
    ordenado = array.sort((a, b) => a - b);
    for (let i = 1; i <= num; i++) {
        comparador.push(i);
    }
    return ordenado.toString() === comparador.toString();
};
console.log(permutacion(numeros, 6));
const comparador = (palabraPrincipal) => {
    let letras = [];
    let contadorMayus = 0;
    let contadorMinus = 0;
    let fraseFinal = '';
    letras = palabraPrincipal.trim()
        .replace(/[^\w]/gi, ' ')
        .split('').filter(letras => letras !== ' ');
    for (const letra of letras) {
        if (letra === letra.toLocaleUpperCase()) {
            contadorMayus++;
        }
        else {
            contadorMinus++;
        }
    }
    return contadorMayus > contadorMinus ? palabraPrincipal.toLocaleUpperCase() : palabraPrincipal.toLocaleLowerCase();
};
console.log(comparador('JUAN PAblo TABAres'));
console.log('.' === '.'.toUpperCase());
function fibonacci(numero) {
    let serie = [0, 1];
    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return [serie, serie[numero]];
}
console.log(fibonacci(15)[0]);
console.log(fibonacci(15)[1]);
const calcularDias = (dias) => {
    const anios = Math.floor(dias / 365);
    let diasRestantes = dias % 365;
    const meses = Math.floor(diasRestantes / 30);
    diasRestantes = diasRestantes % 30;
    console.log(anios, meses, diasRestantes);
    return `Years ${anios}\nMeses: ${meses} \nDias: ${diasRestantes}`;
};
console.log(calcularDias(730));
const factorial = (n) => {
    let acumulador = 1;
    for (let i = 1; i <= n; i++) {
        acumulador *= i;
    }
    return acumulador;
};
console.log('La factorial es:', factorial(11));
const capicua = (numero) => {
    let comparador;
    comparador = parseInt(numero.toString().split('').reverse().join(''));
    return comparador === numero;
};
console.log(capicua(2112));
const wordInPhrase = (word, phrase) => {
    let phraseClean = phrase.toLowerCase().replace(',', '').split(word.toLowerCase()).length;
    return `${word} is ${phraseClean} times in ${phrase}`;
};
console.log(wordInPhrase('fútbol', 'La selección de fútbol de España es, desde su creación en el año 1920, el equipo formado por jugadores de nacionalidad española que representa a la Real Federación Española de Fútbol (RFEF) en las competiciones oficiales organizadas por la Unión de Asociaciones Europeas de Fútbol (UEFA) y la Federación Internacional de Fútbol Asociación (FIFA).'));
const eliminarDuplicados = (array) => {
    array = array.filter(i => typeof i !== 'string');
    let sinRepetir = new Set(array);
    return Array.from(sinRepetir);
};
console.log(eliminarDuplicados([2, 3, 3, 3, 5, 4, '9']));
const tipoAngulo = (angulo) => {
    let tipo = '';
    if (angulo === 360) {
        tipo = 'Completo';
    }
    else if (angulo > 180 && angulo < 360) {
        tipo = 'Concavo';
    }
    else if (angulo === 180) {
        tipo = 'Llano';
    }
    else if (angulo > 90 && angulo < 180) {
        tipo = 'Obtuso';
    }
    else if (angulo === 90) {
        tipo = 'Recto';
    }
    else if (angulo < 90) {
        tipo = 'Agudo';
    }
    else {
        throw new Error('Valor no valido');
    }
    return `El angulo ${angulo} es de tipo ${tipo}`;
};
console.log(tipoAngulo(180));
const elevarElemento = (ar) => {
    let filtrados = [];
    filtrados = ar.filter(numeros => typeof numeros === 'number');
    return filtrados.map(numero => Math.pow(numero, 2));
    ;
};
const numeros = [1, '2', 3, '4', 5, 6, 7, '2'];
console.log(elevarElemento(numeros));
function relojRapido() {
    setInterval(() => {
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        console.log(`${horas}: ${minutos}: ${segundos}`);
    }, 1000);
}
relojRapido();
const calculadora = (n1, n2) => {
    return `La suma es: ${n1 + n2}\nLa resta es: ${n1 - n2}\nLa multiplicación es: ${n1 * n2}\nLa división es: ${n1 / n2}`;
};
console.log(calculadora(95, 22));
function nuevoArray(ar1) {
    let arrNuevo = [];
    arrNuevo.push(ar1[0], ar1[ar1.length - 1]);
    return arrNuevo;
}
const arr2 = ['Primero', 1, 'hola', 3, '4', 6, 'Ultimo'];
console.log(nuevoArray(arr2));
const contadorLetras = (texto) => {
    let resultado = [];
    let vocales = 0;
    let consonantes = 0;
    let textoFiltrado = texto.replace(/ /g, '');
    console.log(textoFiltrado);
    for (const letra of textoFiltrado) {
        if (letra.toLowerCase() === 'a' || letra.toLowerCase() === 'e' || letra.toLowerCase() === 'i' || letra.toLowerCase() === 'o' || letra.toLowerCase() === 'u') {
            vocales++;
        }
        else {
            consonantes++;
        }
    }
    resultado.push(vocales, consonantes);
    return resultado;
};
const resultado = contadorLetras('juan pablo tabares');
console.log('Vocales: ' + resultado[0] + ' Consonantes: ' + resultado[1]);
const elQueMasAparece = (ar) => {
    let masRepetida = '';
    let mapeo_letras = {};
    let arNuevo = '';
    let max = 0;
    if (typeof ar === 'string') {
        arNuevo = ar.replace(/ /g, '');
    }
    else {
        arNuevo = ar.join('');
    }
    for (const letra of arNuevo) {
        if (!mapeo_letras[letra]) {
            if (mapeo_letras[letra] !== ' ')
                mapeo_letras[letra] = 1;
        }
        else {
            mapeo_letras[letra]++;
        }
    }
    for (let letra in mapeo_letras) {
        if (mapeo_letras[letra] > max) {
            max = mapeo_letras[letra];
            masRepetida = letra;
        }
    }
    return `La letra mas repetida es ${masRepetida} y esta ${max} veces`;
};
console.log(elQueMasAparece([1, 2, 3, 4, 1]));
console.log(elQueMasAparece("victor robles victor"));
const numerosCuadrados = (num) => {
    let numerosCuadrados = [];
    for (let i = 1; i <= num; i++) {
        numerosCuadrados.push(i * i);
    }
    return numerosCuadrados;
};
console.log(numerosCuadrados(10));
function comprobarEmail(email) {
    return /^\w+@\w+\.\w+$/gi.test(email);
}
console.log(comprobarEmail('juancho9615@hotmail.com'));
const invertirTexto = (texto) => {
    let invertido = [];
    for (let i = texto.length; i > 0; i--) {
        invertido[texto.length - i] = texto[i - 1];
    }
    return `Palabra original ${texto}, Invertido ${invertido.join('')}`;
};
console.log(invertirTexto('juan pablo'));
const menorMayor = (ar) => {
    return `El mayor es: ${Math.max(...ar)}, El menor es ${Math.min(...ar)}`;
};
console.log(menorMayor([11, 2, 3, 4, 51]));
function altobajo(numero) {
    let ordenados = numero.sort((a, b) => a - b);
    return { bajo: ordenados[0], alto: ordenados[ordenados.length - 1] };
}
console.log(altobajo([11, 2, 3, 4, 51]));
function triangulo(numero) {
    let triangulo = "";
    for (let i = 1; i <= numero; i += 2) {
        for (let j = 1; j <= i; j++) {
            triangulo += "*";
        }
        triangulo += "\n";
    }
    console.log(triangulo);
}
triangulo(11);
const aleatorio = (min, max) => {
    return max > min ? Math.floor(Math.random() * (max - min) + min) : Math.floor(Math.random() * (min - max) - max);
};
console.log(aleatorio(10, 20));
const laMedia = (numeros) => {
    let media = 0;
    let media1 = 0;
    let suma = numeros.reduce((acumulado, numeroActual) => acumulado + numeroActual);
    media1 = suma / numeros.length;
    for (const numero of numeros) {
        media += numero;
    }
    return [media /= numeros.length, media1];
};
const numeros = [1, 2, 3, 4, 5, 6, 7,];
console.log(laMedia(numeros));
const dosPalabras = (palabras) => {
    let frasesLargas = [];
    palabras.forEach(frase => {
        if (frase.split(' ').length > 1) {
            frasesLargas.push(frase);
        }
    });
    return frasesLargas;
};
console.log(dosPalabras(["hola", "san fransico", "ciudad real", "victor", "San pio"]));
const alumnos = [
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
    },
    {
        nombre: 'Mireia',
        nota: 6.7
    },
    {
        nombre: 'Mireia',
        nota: 5.5
    }
];
const aprobados = (alumnos) => {
    let aprobados = alumnos.filter(estudiante => estudiante.nota >= 5);
    return `Aprobados: ${aprobados.length}, Desaprobados: ${alumnos.length - aprobados.length}`;
};
console.log(aprobados(alumnos));
function todosSubStrings(palabra) {
    let substrings = [];
    for (let letra in palabra) {
        let comienzo = parseInt(letra);
        for (let i = 0; i <= palabra.length - comienzo; i++) {
            let final = parseInt(i) + parseInt(comienzo);
            substrings.push(palabra.substring(comienzo, final));
        }
    }
    return substrings.filter(elemento => elemento.length > 0);
}
console.log(todosSubStrings("juan"));
const porcentage = (porcentage, numb) => {
    let resultado = 0;
    if (porcentage >= 0 && numb > 0) {
        resultado = (porcentage * numb) / 100;
    }
    return `El ${porcentage} % de ${numb} es ${resultado}`;
};
console.log(porcentage(0.3, 897));
const lado = (numero) => {
    let lado = '';
    for (let i = 0; i < numero; i++) {
        lado += '*';
    }
    return lado;
};
const cuadrado = (numero) => {
    let dibujo = '';
    let contenido = '';
    dibujo = lado(numero) + "\n";
    for (let i = 0; i < numero - 2; i++) {
        contenido = '*';
        for (let j = 0; j < numero - 2; j++) {
            contenido += ' ';
        }
        contenido += '*';
        dibujo += contenido + "\n";
    }
    dibujo += lado(numero);
    return dibujo;
};
console.log(cuadrado(10));
const numerosImpares = (num1, num2) => {
    let contadorImpares = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            if (i % 2 !== 0) {
                contadorImpares += 1;
            }
        }
    }
    else {
        for (let j = num1; j >= num2; j--) {
            if (j % 2 !== 0) {
                contadorImpares += 1;
            }
        }
    }
    return `Entre ${num1} a ${num2} hay ${contadorImpares} Numero Impares`;
};
console.log(numerosImpares(120, 70));
console.log('-------------------------');
console.log(numerosImpares(70, 120));
const invertirNumero = (num) => {
    let invertido = 0;
    invertido = parseInt(num.toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(num);
    return invertido;
};
console.log(invertirNumero(52968));
console.log(invertirNumero(123456));
console.log(invertirNumero(987654321));
console.log(invertirNumero(-1253));
const array1 = [2, 6, 9, 5, 3, 5];
const array2 = [1, 6, 2, 3, 5];
const elementosComunes = (numeros1, numeros2) => {
    const filtrado = numeros1.filter(numero => numeros2.includes(numero));
    console.log(filtrado);
};
elementosComunes(array1, array2);
//# sourceMappingURL=main.js.map