'use strict';

const producto = document.getElementById('producto');
producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

thumbs.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.src;
    }
});
