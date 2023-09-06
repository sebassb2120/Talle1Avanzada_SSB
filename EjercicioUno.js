/*
1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetas de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planeta NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:
*/

// funcion tradicional 

function calcularDistacias(x1,x2,y1,y2){

    let restax = x2-x1
    let restay = y2- y1

    let potenciaX = Math.pow(restax,2)
    let potenciaY = Math.pow(restay,2)

    let sumaXY = potenciaX + potenciaY

    let distancia = Math.sqrt(sumaXY)

    return distancia

}

let distacias = calcularDistacias(2333, 12, 66666,888)
console.log(`La distacia que hay es de ${distacias}`)

// funcion flecha

let calculardisflecha = (x1,x2,y1,y2) => Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

resultado = calculardisflecha(22,32,44,43)
console.log(`La distacia que hay es de ${resultado}`)