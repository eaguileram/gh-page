// defino una variable men que trae el elemento menú
var men = document.getElementById('menu');
// inserto los links del menú
men.insertAdjacentHTML('beforeend', '\
    <a href="/">Inicio</a>\
    <a href="acercade.html">Acerca de</a>\
    <a href="/contacto.html">Contacto</a>');


