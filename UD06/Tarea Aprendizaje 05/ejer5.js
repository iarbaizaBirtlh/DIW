/* 
Asignamos a '.tarjeta' un oyentes para el evento 'click'.

Cuando el oyente es disparado añade/quita (toggle) la clase '.voltear' a '.tarjeta', para disparar la animación de volteo de tarjeta.
*/

var tarjeta = document.querySelector('.tarjeta');
tarjeta.addEventListener( 'click', function(e) {
  tarjeta.classList.toggle('voltear');
});