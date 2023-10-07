'use strict';

// VARIABLES

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// Color

const propiedadColor = producto.querySelector('#propiedad-color');


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
