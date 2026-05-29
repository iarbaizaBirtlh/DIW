Enunciado
Una vez revisados y estudiados los conceptos de Bootstrap en la teoría, vamos a pasar a la acción con este ejercicio resuelto.

Un cliente nos ha encargado realizar de un Panel de Administración como el que podemos ver a continuación:

index

En el siguiente vídeo podéis ver su funcionamiento así como su comportamiento en diferentes resoluciones.


Funcionamiento
"video visual sin transcripcion"


El panel de administración tendrá las siguientes características:

Un menú de navegación que podéis ver a la izquierda compuesto de:
Inicio
Entradas
Usuarios
Configuración
Salir
En la parte central de nuestro dashboard se podrán añadir las nuevas entradas. 
En el lateral derecho irán los Widgets de estadísticas y comentarios del sitio.
Además, deberéis utilizar la clases de Bootstrap para que nuestro panel de administración modifique el contenido en función de la resolución.
Revisad que el panel de administración se ve correctamente en al menos dos navegadores de vuestra elección.
Los botones tienen que tener diferentes estados. Aprovechar los componentes de Bootstrap
Es importante que sigáis la estructura detallada en las características, y mi consejo es que lo creéis en ese orden, es decir, que lo hagáis por partes para una mejor organización de vuestro trabajo. No os olvidéis de hacer comentarios, os ayudará a la hora de situaros y localizar las diferentes zonas.

Os dejo este vídeo que os puede ayudar a empezar a trabajar:


Trabajando con Bootstrsp
"transcripcion":
[0:08 - 0:48] kaiso he estado revisando esta página
web que ha sido desarrollada con
bootstrap Y quería aprovechar el vídeo
para comentaros unas conclusiones que me
han resultado útiles eh si os fijáis en
primer lugar la pantalla según la vamos
Le vamos cambiando de tamaño va
cambiando de disposición
primero la barra de navegación estaba
arriba luego pasa a estar en un lateral
según aumentamos las estadísticas y los
comentarios se ponen a la derecha y si
lo aumentamos aún más en la barra de
navegación aparece un título y aparecen
unos
textos todo

[0:48 - 1:44] esto ocurre Son puntos de ruptura o los
break points de de bootstrap los tenéis
en la documentación y aquí os indican
Con qué tamaño de píxel se producen y
con qué identificadores los
podemos configurar Por ejemplo si
cogemos el 576 venís aquí
y escribís 576 el ancho de pantalla
veréis que el navegador se pone en
lateral porque estamos trabajando con
pantallas pequeñas si lo reduzco a cco
ya serían pantallas muy pequeñas y
el la barra de navegación cambia y se
coloca arriba eso es porque estamos
configurando diferentes aspectos para
que se comporten o se produzcan Cuando

[1:44 - 2:27] llegamos a este tamaño de pantalla por
tanto estaremos utilizando el sm o el
none
para es decir o sm o nada Para
configurarlo qué más es importante antes
de empezar a trabajar entender también
la propiedad display la propiedad
display de css la entendíamos como la
visualización y sobre todo le hemos dado
mucha importancia al inline al block al
Flex al grid y nos permitía disponer los
elementos Pues si los colocá en línea
con
inline se colocaban uno detrás de otro
si los configuramos como bloque se
colocaban uno debajo de otro esa parte

[2:27 - 3:19] está muy bien pero en bootstrap
utilizan la clase de Non para ocultar
elementos para decir que algo Nos debe
aparecer si lo aplicamos así sin más lo
que estamos esando un elemento para
cualquier tamaño pero si
lo lo combinamos con block o lo mismo
que aquí aparece block con
inline ya podemos conseguir diferentes
efectos por ejemplo con con esta línea
de código lo que estamos haciendo es
ocultar Las pantallas muy pequeñas con
deone ocultamos todas Pero luego con d
block indicando el
sm lo que hacemos Es Mostrar o
visualizar las pantallas de tamaños

[3:19 - 4:09] superiores a sm a partir de
576 se estaría visualizando ese elemento
lo mismo con el siguiente aquí se
oculta para las pequeñas y se visualiza
para
las medianas por tanto el efecto es que
se oculta solo las las pantallas medi
hoy pequeñas y Así podríamos combinar
cualquieras diciéndole de n cuál qué
tamaño se ocultan y con d block o con d
inline block para Qué tamaños se
visualiza por qué esto es importante
porque en esta página Cuando tenemos un
navegador este navegador y hacemos la
pantalla más grande no esta barra de
navegación no cambia de posición sino

[4:09 - 4:54] que la tenemos arriba y se oculta Y
tenemos otra barra de navegación en el
lateral y se muestra por tanto estamos
utilizando dos cosas diferentes podemos
hacer que cambien de disposición se
podría haber hecho pero en este caso lo
que han hecho es tener dos navegadores y
se visualizan uno u otro dependiendo del
tamaño de
Y eso lo consiguen
con d block y
DSM Además de eso se le aplica un otras
clases que nos proporciona bootstrap
como vg darkk en vez de escribir el css
y poner background color Black pues
podemos utilizar la clase directamente

[4:54 - 5:40] podemos configurar que en css Flex o
utilizar las clases que nos pone
bootstrap de Flex Us WiFi content
podemos configurar el css para que sea
sticky o utilizar la clase sticky top
veis que la forma de trabajar con
bootstrap es en vez de escribir el css
directamente han creado
infinidad de clases que los efectos
típicos los tenemos ya configurados sin
escribir una línea de
css con esta información ya podemos
hacer digamos el diseño el layout para
que esto se comporte así yo ya he hecho
el análisis y lo que os he dejado es
tres ficheros diferentes estructura

[5:40 - 6:23] índices 1 2s y TR en lo que en la que he
ido dividiendo esa estructura pero sin
contenido por ejemplo en la uno ya
tenemos la navegación horizontal y el
resto de contenido cuando yo lo hago más
grande este sería se correspondería con
esta distribución
la barra de navegación y el resto de
contenido sería así según lo hago más
grande lo que está ocurriendo es que se
oculta la barra de navegación aparece
una en el lateral y luego aparece un
bloque para el del resto de
información es
decir estaríamos En esta segunda
posición Y aunque lo hagamos más grande

[6:23 - 7:11] sería la caja que hay por debajo todavía
no hemos decidido Cómo colocar ni el
form ni las estadísticas ni el
comentario lo único que tenemos es tres
bloques el navegador superior el
navegador lateral y el bloque y Para
ello el código lo podéis analizar aquí
donde
tenéis la clase
container al principio de todos el
navegador vertical y luego una fila con
el navegador lateral y el resto de del
espacio
digamos lo
mismo podemos hacer con el dos en el dos
vamos un paso más y aquí ya tenemos el

[7:11 - 7:59] navegador lateral el formulario el sideb
si hacemos el formulario y todo el
contenido que está a un lado se pone
debajo y si lo reducimos un poco más el
navegador en la barra de navegación
desaparece y se coloca
arriba tenemos esos bloques y en el
siguiente
prazo incluimos el siguiente bloque en
el que tenemos el navegador tenemos el
formulario y aquí si vamos reduciendo
los componentes estadísticas y
comentarios se bajarán abajo y el
navegador
desaparecerá os he dejado el código lo
analizá si tenéis alguna duda con Cómo

[7:59 - 8:48] se ha realizado el layout me preguntáis
y lo podemos aclarar segundo aspecto
importante una vez que yo ya
tengo ya tengo hecha la distribución y
tengo que empezar a introducir los
componentes tengo que el código para una
barra de navegación aquí el código para
un formulario aquí el código de estas
estadísticas el código de estos
comentarios podemos escribir desde cero
como hemos hecho hasta ahora con html y
css pero recordar bootstrap nos da un
montón de componentes un montón de tipos
tenemos botones tenemos cards tenemos eh
listas Tenemos formularios también por
ahí entonces lo único que tenemos que

[8:48 - 9:34] hacer es mirar este código y
reutilizarlo en concreto en esta página
si vais a nabit tabs veréis que dentro
de los barras de nave ación tenemos este
código si miráis este código es justo el
código que han utilizado para crear el
primer
navegador la primera barra de navegación
es un componente na con sus diferentes
elementos y la única diferencia Es que
en vez de incluir un texto incluyen un
icono veis que aquí se habla de un texto
ahí hay un icono ese icono dónde se
obtiene Pues también vamos en la
información de los iconos y analizando
el código tenemos una opción que es

[9:34 - 10:18] introducir el código utilizando clases
es lo que han utilizado exactamente en
este caso la clase
y b House door esa clase Cómo sabemos el
nombre pues si vamos más arriba vemos
que tenemos todos los iconos que dispone
bootstrap y cómo se
identifican por yo a la hora de diseñar
con
bootstrap dos aspectos importantes
primero definir el layout el ir
definiendo qué bloques y dentro de esos
bloques Qué otros bloques voy a
tener y una vez que ya tenemos la
distribución más o menos organizada Qué
código voy a introducir en cada uno de

[10:19 - 11:01] esos bloques Y si puedo aprovechar los
componentes y todo ese código que nos
proporciona
bootstrap una vez que lo tenemos luego
ya
es una vez que introducimos el código es
personalizarlo como queramos en este
caso nosotros teníamos la clase nav pero
lo que hemos hecho
es aplicarle el blog y el none para que
solo se muestre en pantallas pequeñas
darle un fondo negro configurarlo con
Flex para que se coloque en todo el
ancho de la página y además con un
sticky que se quede arriba podemos usar
todas las clases que necesitemos es

[11:01 - 11:31] imposible sabér selas todas por lo tanto
echar pedir ayuda aquí podéis Buscar en
Google podéis Buscar incluso a chat gpt
le podéis preguntar Oye esto que quiero
hacer qué clase Qué componente podría
utilizar lo dejamos aquí y cualquier
duda que os surja ya sabéis dónde estoy
un saludo


Cualquier explicación está en la documentación de Bootstrap y la podéis consultar con su buscador.

En la página de ejemplos podréis ver plantillas realizadas con Bootstrap de las que podréis sacar ideas para desarrollar el ejercicio.