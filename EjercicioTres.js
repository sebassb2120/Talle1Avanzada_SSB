/*
PROBLEMA: La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante, Cree una función de flecha que permita calcular la temperatura media de la luna a partir de la temperatura máxima y mínima de cada día 
*/
 
console.log("______________________________________funcion Tradicional__________________________________________________")

function Calculo_Temperatura (temperaturaMaxima, temperaturaMinima){

    let temperaturaMedia = temperaturaMaxima + temperaturaMinima

    let dias = 31
    let calculoPorDia = dias * 2

    let resultado = temperaturaMedia / calculoPorDia
    return resultado
}

let resul_temperatura = Calculo_Temperatura(396, 199)
console.log(resul_temperatura)

console.log("______________________________________funcion flecha__________________________________________________")

const Calculo_Temperatura2 = (temperaturaMaxima2, temperaturaMinima2) => {
    let temperaturaMedia2 = temperaturaMaxima2 + temperaturaMinima2;

    let dias2 = 30;
    let calculoPorDia2 = dias2 * 2;

    let resultado2 = temperaturaMedia2 / calculoPorDia2;
    return resultado2;
}

let resul_temperatura2 = Calculo_Temperatura2(21, 20)
console.log(resul_temperatura2)