/*Esto es la barra superior horizontal para que se pegue junto al scroll de la página y siga al usuario */

var menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener('scroll', function (){
    'use strict';
    if (window.pageYOffset > altura) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});