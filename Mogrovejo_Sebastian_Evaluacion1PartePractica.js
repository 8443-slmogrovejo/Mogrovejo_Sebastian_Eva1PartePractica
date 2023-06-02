// 1.	Crea una variable llamada "nombre" y asígnale tu nombre como valor.
let nombre = 'Sebastian Mogrovejo';
console.log(nombre);

// 2.	Crea una función llamada "suma" que reciba dos parámetros (a y b) y retorne la suma de ambos.
function suma(a,b) {
    return a * b;
}
let a = 5;
let b = 4;
let resultado = suma(a,b);
console.log(resultado);

// 3.	Escribe un condicional que verifique si una persona es mayor de edad. Si es mayor de edad, 
// imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad".
function MayoriaEdad(edad) {
    if(edad >= 18) {
        console.log('Mayor de edad');
    } else { // call back 
        console.log('No es mayor de edad');
    }
}
var personaEdad = 18;
MayoriaEdad(personaEdad);

// 4.	Crea un ciclo "for" que imprima los números del 1 al 5.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 5.	Crea una función llamada "imprimirArray" que reciba como parámetro un array y lo imprima 
// elemento por elemento. Respuesta:
function imprimirArray(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
const miLista = ['Hola', 'Mundo', 'Sebastian', 'Mogrovejo'];
imprimirArray(miLista);

// 6.	¿Cuánto es 2 + 2? Respuesta: 4
console.log('¿Cuánto es 2 + 2? Respuesta:', 2+2);

// 11.	Crea una función llamada "primerElementoArray" que reciba como parámetro un array y 
// retorne el primer elemento.
function primerElementoArray(lista) {
    console.log(lista[0]);
}
const miLista2 = ['Hola', 'Mundo', 'Sebastian', 'Mogrovejo'];
primerElementoArray(miLista2);

// 12.	Crea una función llamada "imprimirElementosArray" que reciba como parámetro un 
// array y lo imprima usando un ciclo "for".
function imprimirElementosArray(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
const miLista3 = [25, 33, 11, 16];
imprimirElementosArray(miLista3);



