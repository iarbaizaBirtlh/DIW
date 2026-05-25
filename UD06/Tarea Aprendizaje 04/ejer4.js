/* 
Este código permite aplicar transformaciones a diversos elementos cuando el ratón entra o sale del elemento 'nav'. No es posible hacer esto con CSS puro porque queremos transformar elementos con los que no estamos interactuando.

Asignamos a 'nav' oyentes para los eventos 'mouseenter' y 'mouseleave'

Cuando el oyente es disparado añade/quita (toggle) diversas clases a diversos elementos. Estas clases provocan las distintas transformaciones.

El código es redundante, pero literal, para hacerlo más sencillo de entender. Cada línmea dentro del EventListener declara un elemento y una clase que se le añade/quita.
*/

['mouseenter', 'mouseleave'].forEach(function(e) {
  document.querySelector('nav').addEventListener(e, function() {
    document.querySelector('#wrap').classList.toggle('fadein');
    document.querySelector('article').classList.toggle('fadeout');
    document.querySelector('article figure').classList.toggle('fadeout');
    document.querySelector('article figure').classList.toggle('scale');
    document.querySelector('article h2').classList.toggle('fadeout');
    document.querySelector('nav h3').classList.toggle('fadeout');
  });
});