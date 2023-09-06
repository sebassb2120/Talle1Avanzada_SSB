/*
2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra los cuáles reposan en la base de datos central, para ello debe programar una función que permita recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave.  Tenga en cuenta que el formato de todos los datos es el siguiente: • ARQ2555: Sara Bel-Sun • ARQ2556: Nodin Chavdri • ARQ2557: Finn
*/ 


// FUNCION TRADICIONAL

console.log("______________________________________funcion flecha__________________________________________________")


function nombrePilotonave (codigo_nave){
    let separar_NombreCodigo = codigo_nave.split(":")

    if ( separar_NombreCodigo.length === 2){

        let nombrePiloto = separar_NombreCodigo[1]
        return nombrePiloto

    }else{
        console.log("Codigo mal ingresado")
    }
}

let codigoNaveUno = "ARQ2555 : Sara Bel-Sun"
let codigoNaveDos = "ARQ2556 : Nodin Chavdri"
let codigoNaveTres = "ARQ2557 : Finn"

let nombrePilotoUno = nombrePilotonave(codigoNaveUno)
let nombrePilotoDos = nombrePilotonave(codigoNaveDos)
let nombrePilotoTres = nombrePilotonave(codigoNaveTres)

console.log(nombrePilotoUno)
console.log(nombrePilotoDos)
console.log(nombrePilotoTres)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCION FLECHA 

console.log("______________________________________funcion flecha__________________________________________________")

let nombrenave = (cod_nave) =>{
    let partes = cod_nave.split(":")

    if ( partes.length === 2){

        let nombrePiloto = partes[1]
        return nombrePiloto

    }else{
        console.log("Codigo mal ingresado")
    }
}

let codoNaveUno = "ARQ2555 : Sara Bel-Sun"
let codNaveDos = "ARQ2556 : Nodin Chavdri"
let codNaveTres = "ARQ2557 : Finn"

console.log(nombrenave(codoNaveUno))
console.log(nombrenave(codNaveDos))
console.log(nombrenave(codNaveTres))
