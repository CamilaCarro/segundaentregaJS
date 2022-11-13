function saludoprincipal() {
    const bienvenidouser = prompt('Como es tu nombre?')
    const bienvenido = alert(`Bienvenido ${bienvenidouser} a View Boutique`)
}
saludoprincipal()

let productoEscogido = parseInt(prompt('Ingrese 1.Comprar remera 2.comprar musculosa 3.Comprar Jean 4.Comprar Campera'))

//productos
class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio= precio;
    }
}

const remera = new Producto(1,"remera",350);
const musculosa = new Producto(2,"Musculosa",450);
const jean = new Producto(3,"Jean",1000);
const Campera = new Producto(4,"Campera",1500);

//lista de productos
const productosExcistentes = [remera,musculosa,jean,campera];

console.log(productosExcistentes)


let finalizacion
let totalcompra = 0
let menu = true

while (menu === true) {

    const productoCliente = productosExcistentes.find (producto => producto.id === productoEscogido)

    if (productoCliente) {
        totalcompra = totalcompra + productoCliente.precio
        alert(totalcompra)
    } else {
        productoEscogido= parseInt(prompt('Ingrese 0.Comprar remera 1.comprar musculosa 2.Comprar Jean 3.Comprar Campera'))
    }


    finalizacion = parseInt(prompt('Preciona 1.Seguir comprando 2.Finalizar'))
    if (finalizacion === 1) {
        let carrito = parseInt(prompt('Ingrese 0.Comprar remera 1.comprar musculosa 2.Comprar Jean 3.Comprar Campera'))
    } else {
        menu = false
    }

}

alert (`Total de tu compra es ${totalcompra}`)