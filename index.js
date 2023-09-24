let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;
let booleanoAnd = booleano1 === booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || !booleano1 || !booleano2);

//ejercicio 8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

//ejercicio 9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//ejercicio 10
let contarHasta10_2 = 0;
for (let index = 0; index < 10; index++) {
  contarHasta10_2++;
  console.log("🚀 ~ file: index.js:23 ~ contarHasta10_2:", contarHasta10_2);
}

// ejercicio 11

let postI = 0;
let postJ = 0;
for (let index = 0; index < 11; index++) {
  postI += postJ++;
  console.log(postI);
}
// ejercicio 12

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

// ejercicio 13

let variableValorNumerico = 2;

//ejercico 14
const MiNombre = "Alicia";

//ejercicio 15
const MiNumeroFav = 4;

//ejercicio 16
let booleanoOr = booleano1 || booleano2;

//ejercicio 17
let booleanoMix1 =
  (booleano1 && TAU / 2 == PI) || variableValorNumerico <= miNumeroFav;

//ejercicio 18
let seisNoEsNueve = 6 != 9;

//ejercicio 19
let booleanoMix2 = variableValorNumerico < MiNumeroFav * TAU;

//ejercicio 20
let valorSuma = MiNumeroFav + variableValorNumerico;

//ejercicio 21
let valorResta = MiNumeroFav - variableValorNumerico;

//ejercicio 22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

//ejecicio 23
let valorDivision = MiNumeroFav / 3;

// ejercicio 24
let contarHasta10 = 0;
while (contarHasta10 < 10) {
  contarHasta10++;
}

//ejercicio 25
let preI = 0;
let preJ = 0;
for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}

//ejercicio 26
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}
