/*VARIABLES*/
const IVA1 = 1.21
const furgoneta1 = ['Furgoneta Grande', 'Camión', 'Coche 4 puertas', 'Furgoneta standar', 'Camión grande'];

furgoneta1.reverse()
console.log(furgoneta1)

/*ARRAYS*/

function listaFurgos() {
debugger
 for(let i = 0; i < furgoneta1.length; i++) {
        console.log(furgoneta1[i]);
    }
}

//pop() agrega al final
//unshift() agrega al principio

function agregarFurgo() {
    let nuevoFurgo = prompt("Ingresa la nueva furgoneta")
    let resultado = furgoneta.includes(nuevoFurgo)
    if (resultado === false) {
        furgoneta.push("nuevo transporte")
    } else {
        console.warn("La furgoneta ", nuevoFurgo, "ya figura en la lista.")
    }
}

function quitarFurgo() {
    debugger 
    let aQuitar = prompt("Ingrese el ID de la furgoneta a quitar del array:")
    let indice = furgoneta.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = furgoneta.splice(indice, 1)
        console.warn("Se ha eliminado la furgoneta:", resultado)
    } else {
        console.error("No se ha encontrado la furgoneta", resultado)
    }
}

/*OBJETOS*/

const IVA2 = 1.21

function Producto(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.precioConIva2 = function() {
        let precioFinal = this.precio * IVA2
        return "$" + precioFinal
    }

    this.restarStock = function(unidades) {
        this.stock = this.stock - unidades
    }
}

const prod1 = new Producto("Volkswagen, Transporter",150,13)
const prod2 = new Producto(" Ford Transit Van",220,15)
const prod3 = new Producto("Volkswagen Nuevo Crafter",350,10)

/*METODO DE BUSQUEDA Y FILTRADO*/

const producto = [prod1, prod2, prod3]

producto.forEach((prod)=>{
    console.log(prod)
}
)
/*const  producto = [
    {nombre: 'Volkswagen, Transporter', precio: 150},
    {nombre: 'Ford Transit Van', precio: 220},
    {nombre: 'Volkswagen Nuevo Crafter', precio: 350},
]

const nombres = producto.map((el) => el.nombre)
console.log(nombres)*/
