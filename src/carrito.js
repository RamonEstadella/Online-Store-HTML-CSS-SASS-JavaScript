// VARIABLES
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = []; // Aquí guardaremos los productos del carrito

/* 

NOTA:

En términos simples, la función renderCarrito se encarga de hacer que un elemento 
en la página (probablemente la ventana del carrito de compras) se vuelva visible 
o activo al agregarle una clase CSS específica. Esta clase CSS (carrito--active) 
probablemente tiene reglas de estilo asociadas que hacen que el elemento sea visible 
y se muestre en la pantalla del usuario de alguna manera.

*/


const renderCarrito = () => { // Se ejecuta cuando abro el carrito
    ventanaCarrito.classList.add('carrito--active');
    console.log(carrito);
}

// ABRIR CARRITO
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    })
})

// CERRAR CARRITO

// TODO No entenc gaire bé perquè es tanca la finestreta de carrito quan fiquem remove.
// Perquè?? De sèrie ja es tanca? O hi ha alguna funció que per darrera la tanca?

botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    })
})

// BOTÓN DE AGREGAR AL CARRITO
btnAgregarCarrito.addEventListener('click', (e) => {
    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    carrito.push({
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        color: color,
        tamaño: tamaño,
    });
})