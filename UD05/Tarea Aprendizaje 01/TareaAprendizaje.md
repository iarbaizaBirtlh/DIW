Enunciado
Una vez entendido el funcionamiento de las Media Queries, vamos a a trabajar con ellas en la siguiente página web.



La página inicial se ha diseñado con grid, flex y medidas relativas, y como puedes comprobar se adapta bien al tamaño del navegador. Este es el proyecto.

Sin embargo, se observa que según el tamaño se reduce, sería interesante que el diseño cambiara y que el número de tarjetas por fila se redujera. Aquí es donde entran las media queries con las que establecemos unos puntos de ruptura o breakpoints a partir de los que queremos cambiar la distribución. En concreto definiremos las medidas máximas o mínimas en las que se deben producir los cambios y en qué van a consistir dichos cambios.

Para las pantallas muy grandes se mantendrá la versión original y para el resto, la evolución que se propone es la siguiente:

Pantallas grandes
Pantallas medianas
Pantallas pequeñas
Pantallas muy pequeñas


Para poder definir adecuadamente las media queries necesarias empieza analizando la distribución con grid que se ha realizado en la página original. A continuación, identifica las propiedades que van a ir cambiando y por último, determina las medidas en las que se van a producir los cambios.

Con toda esa información podrás configurar las media queries en el fichero CSS y comprobar que funcionan. Como ayuda puedes ver este vídeo:


Ejemplo media queries
"transcripcion":
[0:08 - 0:54] eso quiero aprovechar para explicar las
media queries con un ejemplo en primer
lugar vamos a empezar con esta página
que no utiliza media queris pero que si
analizamos se adapta bastante bien a los
cambios en el tamaño del
navegador cómo lo hemos conseguido con
los elementos que hemos aprendidos hasta
ahora utilizando medidas relativas
y disposición grid y
flexbox vemos que tenemos una rejilla
con tres columnas iguales y dentro de
ella todas las celdas o todos los
elementos se colocan más o menos igual
menos la tarjeta cuatro que ocupa dos
celdas una debajo de otra y la tarjeta

[0:54 - 1:44] cco que ocupa dos bloques uno seguido
del otro como hemos dicho cómo lo
conseguimos Pues definiendo grid en el
Main si vais al Main veréis que tenéis
display grid la
separación de un Rem Y que además su
plantilla utiliza tres columnas
idénticas además de eso se ha definido
estilos para el artículo 4 y el artículo
5 en el artículo 4 utilizando grid Row
Start y Row end se define el tamaño
especial de ese bloque y para el
artículo 5 lo mismo pero en este caso
con git colum Star G columen para
indicar Cuántas columnas va a tomar ese
artículo además si analizá un poco mejor

[1:44 - 2:31] también se utiliza Flex y se utilizan
principalmente medidas relativas y con
eso conseguimos que se adapte sin
embargo ya nos damos cuenta que llega un
momento en el que convendría que en vez
de tres tarjetas poder incluir dos sola
ente y hubiera más filas incluso Cuanto
más pequeñas Pues igual Sería mucho
mejor tener una única tarjeta una debajo
de la otra Cómo se consiguen esos saltos
en la disposición Pues aquí es donde
entran las medi queries y para eso
tenemos la misma página pero ahora ya
utilizando media queries si en este caso
le damos a ajustar vemos que partimos de
la misma disposición Pero según va

[2:31 - 3:13] cambiando el
tamaño se adapta en este caso ya tenemos
tres tarjetas dos y dos si lo hacemos
todavía más pequeño llegará un momento
en el que todas son dos y dos y si
todavía lo hacemos más pequeña pasa a
una tarjeta únicamente Y si vamos a más
pequeño vemos que podemos cambiar
también colores y
bordes cómo lo hacemos pues hemos
quedado que lo hacemos con media queries
y Qué cambios Tendremos que hacer en el
proyecto anterior para aplicar estas
media queries Pues si volvimos a visual
Studio code veremos que en el html solo
hay que hacer un cambio Añadir el meta

[3:13 - 3:59] del viewport para indicarle que va a ser
una página responsible y con eso estaría
sería suficiente además de eso en el
estile nos podemos encontrar un Max
withd y un min with que indica Cuál es
el tamaño máximo previsto de pantallas y
el mínimo y luego si bajamos el código
css sigue manteniéndose Pero al final se
añadirán todas las media queries que
necesitemos
utilizando la palabra reservada ar roba
media
eh Como ya hemos visto el
diseño está hecho para páginas grandes
con páginas grandes tenemos la tarjeta
4at especial la tarjeta 5 especial pero

[3:59 - 4:45] si vamos reduciendo llega un momento en
que esa tarjeta 4at y C pierden su
configuración especial Cómo se hace eso
indicándole
la anchura a la que van a perder ese
efecto y luego indicándole esas mismas
reglas que teníamos arriba con el grid
Row Start el Row end el column Start con
el valor anset en cuanto le indicamos
anset se deshacen estas reglas y ocurre
lo que ya hemos visto la tarjeta cuatro
se visualiza como la tarjeta seis la
tarjeta cinco como la siete pero aquí
nos surge otro problema hasta ahora
teníamos tres columnas y ahora tenemos
tres columnas en la primera fila y dos

[4:45 - 5:36] columnas en la segunda Cómo se puede
resolver eso pues la manera que hace de
hacerse es utilizando un grid de seis
columnas seis es múltiplo tanto de dos
como de seis de manera que yo puedo
encajar tres columnas que ocuparán dos
celdas cada uno o puedo encajar dos
columnas que ocuparan tres celdas me da
flexibilidad el utilizar seis columnas y
es lo que hacemos con esta media query
vemos Que aplicando un ant decimos que
va a haber seis columnas desde dónde
desde 12280 píxeles a
1919 píxeles en ese Rango de anchuras
vamos a tener tres columnas y además de
eso con este - n3 le indicamos que las

[5:36 - 6:24] tres primeras tarjetas van a ocupar dos
columnas y las
siguientes cuatro tarjetas van a ocupar
tres columnas con lo que conseguimos
esta configuración un
grid si lo activamos un grid de seis
columnas en el que las primeras tarjetas
o ocupan dos columnas y las siguientes
ocupan tres si vamos reduciéndolo más
llega un momento en el
que las tarjetas se ubican de dos en dos
y el grid también ha cambiado ahora
volvemos a tener dos columnas y en cada
una de esas columnas se ubica una
tarjeta cómo lo hacemos
pues

[6:24 - 7:14] indicando que a partir de 1279
tarjeta ocupará una columna y además de
eso que entre 960 y 1000 el git va a ser
de dos columnas veis que siempre vamos
jugando con el template o la estructura
del grid Cuántas columnas quiero y luego
cada artículo Cuántas columnas
ocupará Si volvemos y vamos reduciendo
aú más llega un momento en el que el
grid solo tiene una columna y las
tarjetas se ubican cada una en esa
columna por tanto el cambio que hay que
hacer el spam va a seguir siendo uno eso
no habrá que modificarlo pero a partir
de
959 de ahí para abajo la estructura del

[7:14 - 8:04] grid será de una sola
columna ya tenemos la estructura pero no
solo podemos cambiar las estructuras con
media queris si yo sigo reduciendo puedo
cambiar también colores podría cambiar
tamaños de letra podría cambiar tamaños
de imagen podría cambiar lo que quisiera
en este caso cuando se reduce por debajo
de 600 599 con 98 lo que hacemos Es
cambiar los colores del Body cambiar los
colores del header del article le cambio
el B un Border aquí le cambio los hover
y cualquier otra propiedad que se os
ocurra se puede cambiar por tanto lo
habitual será utilizarlo eh con junto
con griz para cambiar la estructura o el

[8:04 - 8:23] layout de nuestra página Pero lo podemos
utilizar para cambiar cualquier otro
otra propiedad que nos que necesitemos
lo dejamos aquí espero que haya quedado
un poco más claro el tema de las medias
k query y nos vemos en otro vídeo
