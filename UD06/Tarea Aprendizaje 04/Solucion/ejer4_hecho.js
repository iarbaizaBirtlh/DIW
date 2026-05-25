/* 
  Este código permite aplicar transformaciones a diversos elementos cuando el ratón entra o sale del elemento 'nav'.
  No es posible hacer esto con CSS puro porque queremos transformar elementos con los que no estamos interactuando.

  Asignamos a 'nav' oyentes para los eventos 'mouseenter' y 'mouseleave'.
  Cuando el oyente es disparado añade/quita (toggle) diversas clases a diversos elementos. Estas clases provocan las distintas transformaciones.

  El código es redundante, pero literal, para hacerlo más sencillo de entender.
  Cada línea dentro del EventListener declara un elemento y una clase que se le añade/quita.
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

/*
  Explicación de la línea: document.querySelector('#wrap').classList.toggle('fadein');

  1. document.querySelector('#wrap'): Busca en el documento HTML un elemento que tenga el ID "wrap" (es decir, que tenga id="wrap")
    y retorna el primer elemento que encuentra con ese selector

  2. .classList: Accede a la lista de clases CSS del elemento encontrado

  3. .toggle('fadein'): Si el elemento NO tiene la clase 'fadein', la añade. Si el elemento YA tiene la clase 'fadein', la quita.
    Es como un interruptor que alterna entre tener y no tener la clase "fadein"

  En este caso, cada vez que el ratón entra o sale del elemento 'nav', el elemento alternará entre tener y no tener el efecto
  de fadeIn definido en CSS. Es común usar este patrón para crear efectos de aparecer/desaparecer o para conmutar entre 2 estados visuales.
*/