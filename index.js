// function saludoprincipal() {
//     const bienvenidouser = prompt('Como es tu nombre?')
//     const bienvenido = alert(`Bienvenido ${bienvenidouser} a View Boutique`)
// }
// saludoprincipal()

//productos
class Product{
    constructor(id, nombre, precio,imagen){
        this.id = id
        this.nombre = nombre
        this.precio= precio
        this.imagen=imagen
    }

}

const producto1 = new Product(1,"remera",350,src = './imagenes/remera.jpeg')
const producto2 = new Product(2,"Musculosa",450,src = './imagenes/musculosa.jpeg')
const producto3 = new Product(3,"Jean",1000,src = './imagenes/jean.jpeg')
const producto4 = new Product(4,"Campera",1500,src = './imagenes/campera.jpeg')

//lista de productos
const productos= [producto1, producto2,producto3,producto4,]



const divProductos = document.getElementById ('divProductos')
productos.forEach(Product=>{
    divProductos.innerHTML +=`
    <div id=" ${Product.id}" class="card" style="width: 18rem;">
    <img src="${Product.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${Product.nombre}</h5>
        <p class="card-text">$ ${Product.precio}</p>
        <button id=" ${Product.id}" class="btn btn-primary">Comprar</button>
    </div>
    </div>
    `
})

//carrito de compras

const carrito= []
const botonesAgregar = document.querySelectorAll('.btn-primary')

botonesAgregar.forEach (boton=>{
    boton.onclick = () => {
        const productoSeleccionado = productos.find (e=>e.id===parseInt(boton.id))
        const productoCarrito={...productoSeleccionado,cantidad:1}

       const indexcarrito =carrito.findIndex (prod=>prod.id ===productoCarrito.id)
        if(indexcarrito===-1){
            carrito.push(productoCarrito)
        }else{
            carrito[indexcarrito].cantidad ++
        }
        console.log(carrito)
    }
    
})

const botonfinalizar= document.querySelector('#fin')
botonfinalizar.onclick = () =>{
   
    const valores= carrito.map (prod=>prod.precio * prod.cantidad)
    let totalcompra = 0
    valores.forEach (valor=>{
        totalcompra += valor
    })
    console.log(totalcompra)
    alert ('El total de tu compra es:'+totalcompra)
}

const inputusuario = document.getElementById('usuario')
const botonsuscribir =document.getElementById('susctibite')

botonsuscribir.onclick = () => {
    localStorage.setItem('Usuario',inputusuario.value)
    sessionStorage.setItem('Usuario',inputusuario.value)
}