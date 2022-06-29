/*  Complementario - JSincorporandoEventos*/

/* >> Consigna: Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  de la interfaz de nuestro simulador
>>Aspectos a incluir en el entregable:
    Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que opere sobre el DOM manejando eventos.
>>Ejemplo:
    Cuando el usuario completa algún dato, por ejemplo cantidad de cuotas, se captura ese dato y se agregan elementos al DOM mediante JS.
    Capturar la tecla ENTER para confirmar alguna acción.
 */

const form = document.querySelector("form");

const inputNombre = document.querySelector("#nombre"),
    inputPrecio = document.querySelector("#precio"),
    inputStock = document.querySelector("#stock"),
    btnGuardar = document.querySelector("#btnGuardar"),
    contenedor = document.querySelector("#contenedor");

const productos = [];

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

function creandoProducto(nombre, precio,stock) {
    nombre = inputNombre.value;
    precio = inputPrecio.value;
    stock = inputStock.value;
    return new Producto(nombre, precio, stock);
}

function guardarProducto(producto) {
    return productos.push(producto);
}

console.log(productos);

function crearHTML() {
    let html;
    for (const producto of productos) {
        html = `
        <div class="col s4 m3">
            <div class="card">
                <div class="card-image">
                    <h4 class="card-title">${producto.nombre}</h4>
                </div>
                <div class="card-content">
                    <p>$${producto.precio}</p>
                    <p>Stock: ${producto.stock}</p>                    
                </div>
                <div class="card-action">
                    <a href="#" class="btn">Comprar</a>
                </div>
            </div>
        </div>`;
        //console.log(productos);
    }

    contenedor.innerHTML += html;
}
btnGuardar.addEventListener("click", () => {
    const product = creandoProducto(nombre, precio,stock);
    guardarProducto(product);
    crearHTML(productos);
});
