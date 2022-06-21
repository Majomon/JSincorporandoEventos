/* Primera entrega del proyecto final */

/* >>Objetivos Generales:
Codificar la funcionalidad inicial del simulador. 
Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.


>>Objetivos Específicos:
Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
 */


class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}


const productos = [];
let salida = ""



let entrada = prompt("Programa para ingresar productos \nCuantos productos va agregar?")

for (let index = 0; index < entrada; index++) {
    let idProducto = index + 1
    let nombreProducto = prompt("Ingrese nombre del producto")
    let precioProducto = prompt("Ingrese precio del producto")
    productos.push(new Producto(idProducto, nombreProducto, precioProducto));
}
console.log("Los productos ya fueron cargados");
console.log(productos);
console.log("");


do {
    let elementoProducto = prompt("Ingrese el nombre del producto que desea comprar?")
    elementoProducto = elementoProducto.toUpperCase()
    const filtroProducto = productos.filter((el) => el.nombre.includes(elementoProducto))

    let cantidadProducto = parseInt(prompt("Que cantidad quiere?"))

    const precioPorCantidad = filtroProducto.map((el) => {
        return {
            id: el.id,
            nombre: el.nombre,
            precio: el.precio * cantidadProducto
        }
    })

    console.log(precioPorCantidad);

    salida = prompt("Si quiere realizar otra compra presiones cualquier tecla \n Si quiere salir escriba ESC")

} while (salida != "ESC")

console.log("Fin de la compra");


