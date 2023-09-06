/*
PROBLEMA: QUI-GON JINN está encargado de revisar n sables de luz y contabilizar la cantidad de energía de sables que tienen negativa en Joules.    Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables defectuosos con energía negativa fue de 2 sables. 
*/

console.log("______________________________________funcion Tradicional__________________________________________________")

function sablesDeteriorados (sables){

    let contador = 0

    for (let i = 0; i < sables.length; i++){

        if (sables[i] < 0){
            contador++
        } 
    }

    return contador
}

let lista_sables = [2,4,5,-20,-100,2,-5]
resultado = sablesDeteriorados(lista_sables)
console.log(`la cantidad de sables defectuosos con energía negativa fue de: ${resultado} `)

console.log("______________________________________funcion flecha__________________________________________________")

let contarSablesNegativos2 = (sables2) => {
    let contador2 = 0;

    for (let i = 0; i < sables2.length; i++) {
        if (sables2[i] < 0) {
            contador2++;
        }
    }

    return contador2;
}

// Ejemplo de uso
let list_sables = [2, 4, -8, 5, -6];
let result = contarSablesNegativos2(list_sables);

console.log(`La cantidad de sables defectuosos con energía negativa es: ${result}`);