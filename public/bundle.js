'use strict';

// VARIABLES
const producto$1 = document.getElementById('producto');
const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

// Color
const propiedadColor = producto$1.querySelector('#propiedad-color');

// Cantidad
const btnDisminuirCantidad = producto$1.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto$1.querySelector('#incrementar-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');


// THUMBS DEL PRODUCTO
// La idea es cambiar la ruta de la foto cuando el usuario haga click.
thumbs.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        const imagenSrc = e.target.src;

         // Obtenemos la posicion del ultimo /
        const lastIndex = imagenSrc.lastIndexOf('/');

        // Cortamos la cadena de texto para obtener solamente una parte
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        // Cambiamos la ruta de la imagen del producto
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
    
});

// COLORES DEL PRODUCTO
// La idea es cambiar la ruta de la foto cuando el usuario haga click.
propiedadColor.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
    }
});

// CANTIDAD DEL PRODUCTO
btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

btnDisminuirCantidad.addEventListener('click', (e) => {
    if(parseInt(inputCantidad.value) > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});

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
};

// ABRIR CARRITO
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    });
});

// CERRAR CARRITO

// TODO No entenc gaire bé perquè es tanca la finestreta de carrito quan fiquem remove.
// Perquè?? De sèrie ja es tanca? O hi ha alguna funció que per darrera la tanca?

botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    });
});

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
});
