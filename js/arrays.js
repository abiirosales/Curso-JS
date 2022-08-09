function listaFurgos () {
    debugger
    for (let i = 0; i < furgoneta.length; i++) {
        console.log(furgoneta[i])
    }
}

//pop() agrega al final
//unshift() agrega al principio

function agregarFurgo() {
    let nuevoFurgo = prompt("Ingresa la nueva furgoneta")
    let resultado = furgoneta.includes(nuevaFurgo)
    if(resultado === false) {
        furgoneta.push("nuevo transporte")
    } else {
        console.warn("La furgoneta ", nuevaFurgo, "ya figura en la lista.")
    }
}

function quitarFurgo() {
    debugger
    let aQuitar = prompt("Ingrese el ID de la furgoneta a quitar del array:")
    let indice = furgoneta.indexOf(aQuitar)
    if (indice !==-1){
    let resultado = furgoneta.splice(indice, 1)
    console.warn("Se ha eliminado la furgoneta:", resultado)
    } else {
        console.error ("No se ha encontrado la furgoneta", resultado)
    }
}