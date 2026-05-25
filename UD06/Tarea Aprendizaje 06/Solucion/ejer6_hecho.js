// Asignamos el elemento #bola a una variable 
var bola = document.querySelector('#bola');

// Asignamos el elemento audio a una variable
var swing = document.querySelector('#swing');

/* 
Cuando el oyente de eventos detecte un click sobre el elemento bola, le agregará la clase 'golpe' para lanzar la animación. 
Un segundo click quitará la clase, permitiendo reiniciar la animación.
*/
bola.addEventListener('click', function (event) { 
  bola.classList.toggle('golpe');
  // ¡con sonido!
  swing.play();
}, false);