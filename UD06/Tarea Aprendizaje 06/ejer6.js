/* Asignamos el elemento #bola a la variable bola */
var bola = document.querySelector('#bola');
var swing = document.querySelector('#swing');

/* Cuando el oyente de eventos detecte un click sobre el elemento bola, le agregará la clase 'golpe' para lanzar la animación */
bola.addEventListener('click', function (event) {
  bola.classList.toggle('golpe');
  swing.play();
}, false);