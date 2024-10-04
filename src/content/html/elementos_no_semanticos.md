---
title: Elementos no semánticos en HTML
---

### 1. `<audio>`
La etiqueta `<audio>` se utiliza para incrustar contenido de audio en una página web.

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>
```

### 2. `<b>` y `<strong>`
La etiqueta `<b>` se utiliza para hacer que el texto aparezca en negrita sin añadir un énfasis especial. En contraste, `<strong>` aplica negrita pero con un significado semántico de énfasis fuerte.

```html
<p>Este es un <b>texto en negrita</b>.</p>
<p>Este es un <strong>texto con fuerte énfasis</strong>.</p>
```

### 3. `<bdi>`
La etiqueta `<bdi>` (Bidirectional Isolation) aísla una porción de texto para que su dirección de escritura no sea afectada por el texto circundante.

```html
<p>Usuario: <bdi>اسم المستخدم</bdi> ha iniciado sesión.</p>
```

### 4. `<bdo>`
La etiqueta `<bdo>` (Bidirectional Override) sobrescribe la dirección de escritura del texto.

```html
<p><bdo dir="rtl">Este texto se muestra de derecha a izquierda.</bdo></p>
```

### 5. `<br>`
El elemento `<br>` inserta un salto de línea.

```html
<p>Este es un texto que<br>necesita un salto de línea.</p>
```

### 6. `<button>`
El elemento `<button>` se utiliza para crear botones interactivos en una página web.

```html
<button type="button">Clic aquí</button>
```

### 7. `<canvas>`
El elemento `<canvas>` se utiliza para dibujar gráficos y animaciones dinámicas usando JavaScript.

```html
<canvas id="miCanvas" width="400" height="200"></canvas>
<script>
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    contexto.fillStyle = 'blue';
    contexto.fillRect(10, 10, 150, 100);
</script>
```

### 8. `<caption>`
El elemento `<caption>` se utiliza para proporcionar un título o descripción a una tabla.

```html
<table>
    <caption>Datos de ventas del último trimestre</caption>
    <tr>
        <th>Producto</th>
        <th>Ventas</th>
    </tr>
</table>
```

### 9. `<cite>`
La etiqueta `<cite>` se utiliza para citar obras literarias, películas, libros, etc.

```html
<p>Una cita de <cite>Don Quijote de la Mancha</cite>.</p>
```

### 10. `<code>`
La etiqueta `<code>` se utiliza para mostrar fragmentos de código en formato monoespaciado.

```html
<p>El comando es <code>sudo apt-get update</code>.</p>
```

### 11. `<data>`
La etiqueta `<data>` vincula contenido con un valor de datos específico, útil para realizar anotaciones semánticas.

```html
<p>El precio del artículo es <data value="500">$500</data>.</p>
```

### 12. `<datalist>`
El elemento `<datalist>` se utiliza para proporcionar una lista de opciones predefinidas para un campo de entrada.

```html
<input list="ciudades" name="ciudad">
<datalist id="ciudades">
    <option value="Madrid">
    <option value="Barcelona">
    <option value="Valencia">
</datalist>
```

### 13. `<del>`
El elemento `<del>` muestra texto que ha sido eliminado o modificado.

```html
<p>Este es un texto <del>antiguo</del> corregido.</p>
```

### 14. `<details>`
El elemento `<details>` proporciona detalles adicionales que el usuario puede mostrar u ocultar.

```html
<details>
    <summary>Más información</summary>
    <p>Este es el texto oculto.</p>
</details>
```

### 15. `<dfn>`
El elemento `<dfn>` marca una definición de un término.

```html
<p><dfn>HTML</dfn> significa HyperText Markup Language.</p>
```

### 16. `<dialog>`
El elemento `<dialog>` crea un cuadro de diálogo modal o emergente.

```html
<dialog open>
    <p>Este es un cuadro de diálogo.</p>
</dialog>
```

### 17. `<div>`
La etiqueta `<div>` es un contenedor genérico para elementos de bloque.

```html
<div>
    <h2>Encabezado dentro de un div</h2>
    <p>Este es un párrafo.</p>
</div>
```

### 18. `<dl>`
La etiqueta `<dl>` define una lista de definiciones, junto con `<dt>` (término) y `<dd>` (descripción).

```html
<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para la creación de páginas web.</dd>
</dl>
```

### 19. `<em>`
El elemento `<em>` aplica énfasis a un texto, generalmente mostrando el texto en cursiva.

```html
<p>Este es un texto <em>en cursiva con énfasis</em>.</p>
```

### 20. `<embed>`
El elemento `<embed>` incrusta contenido externo, como un video o una aplicación interactiva.

```html
<embed src="archivo.pdf" type="application/pdf" width="600" height="400">
```

### 21. `<fieldset>`
El elemento `<fieldset>` agrupa controles relacionados dentro de un formulario.

```html
<fieldset>
    <legend>Datos personales</legend>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
</fieldset>
```

### 22. `<figcaption>`
La etiqueta `<figcaption>` proporciona una leyenda o título para el contenido dentro de un `<figure>`.

```html
<figure>
    <img src="imagen.jpg" alt="Imagen descriptiva">
    <figcaption>Descripción de la imagen.</figcaption>
</figure>
```

### 23. `<figure>`
El elemento `<figure>` contiene contenido que se puede referenciar de forma independiente, como una imagen o un diagrama.

```html
<figure>
    <img src="imagen.jpg" alt="Paisaje">
    <figcaption>Un hermoso paisaje.</figcaption>
</figure>
```

### 24. `<h1> - <h6>`
Las etiquetas `<h1>` a `<h6>` se usan para definir encabezados de diferentes niveles.

```html
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
```

### 25. `<hgroup>`
El elemento `<hgroup>` agrupa un conjunto de encabezados de nivel jerárquico.

```html
<hgroup>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
</hgroup>
```

### 26. `<hr>`
La etiqueta `<hr>` representa una línea horizontal.

### 27. `<i>` y `<em>`
La etiqueta `<i> `hace que el texto se vea en cursiva, mientras que `<em>` tiene un énfasis semántico (énfasis relevante).

```html
<p>Este es un <i>texto en cursiva</i>.</p>
<p>Este es un <em>texto con énfasis</em>.</p>
```
### 28. `<iframe>`
El elemento `<iframe>` incrusta otra página HTML dentro de la página actual.

```html
<iframe src="https://www.ejemplo.com" width="600" height="400"></iframe>
```

### 29. `<img>`
La etiqueta `<img>` se utiliza para insertar una imagen en una página web

```html
<img src="imagen.jpg" alt="Descripción de la imagen" width="500">
```

### 30. `<input>`
El elemento `<input>` se utiliza en formularios para capturar diferentes tipos de datos.

```html
<input type="text" name="nombre" placeholder="Ingrese su nombre">
<input type="password" name="contraseña" placeholder="Contraseña">
```
### 31. `<ins>`
La etiqueta `<ins>` se utiliza para indicar texto que ha sido insertado

```html
<p>Este es el <ins>nuevo texto insertado</ins>.</p>
```

### 32. `<kbd>`
La etiqueta `<kbd>` representa una tecla del teclado.

```html
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
```

### 33. `<label>`
La etiqueta `<label>` se utiliza para identificar un campo de formulario.

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre">
```

### 34. `<legend>`
El elemento `<legend>` proporciona una leyenda o título dentro de un `<fieldset>`.

```html
<fieldset>
    <legend>Datos de contacto</legend>
    <input type="text" placeholder="Nombre">
</fieldset>
```

### 35. `<li>`
La etiqueta `<li>` representa un elemento dentro de una lista ordenada (`<ol>`) o no ordenada (`<ul>`).

```html
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>
```
### 36. `<link>`
El elemento `<link>` se usa para enlazar recursos externos, como hojas de estilo o íconos.

```html
<link rel="stylesheet" href="estilos.css">
```

### 37. `<map>`
La etiqueta `<map>` se utiliza para definir un mapa de imagen, el cual permite crear áreas interactivas dentro de una imagen.

```html
<img src="planeta.jpg" usemap="#planetmap" alt="Planetas">
<map name="planetmap">
    <area shape="rect" coords="34,44,270,350" alt="Mercurio" href="mercurio.html">
    <area shape="circle" coords="337,300,44" alt="Marte" href="marte.html">
</map>
```

### 38. `<mark>`
El elemento `<mark>` se utiliza para resaltar texto.

```html
<p>Este es un <mark>texto resaltado</mark> en el documento.</p>
```

### 39. `<menu>`
La etiqueta `<menu>` define un menú de comandos o de contexto, utilizado a menudo en navegadores o aplicaciones.

```html
<menu>
    <li>Opción 1</li>
    <li>Opción 2</li>
</menu>
```

### 40. `<meter>`
La etiqueta `<meter>` representa una medición escalar dentro de un rango conocido.

```html
<meter value="0.6" min="0" max="1">60%</meter>
```

### 41. `<noscript>`
El elemento `<noscript>` se muestra en navegadores que no soportan JavaScript.

```html
<noscript>Este contenido se mostrará si el navegador no soporta JavaScript.</noscript>
```

### 42. `<object>`
El elemento `<object>` permite incrustar un recurso externo, como un documento o una aplicación.

```html
<object data="archivo.pdf" type="application/pdf" width="600" height="400">
    Tu navegador no soporta la visualización de PDFs.
</object>
```

### 43. `<optgroup>`
La etiqueta `<optgroup>` agrupa elementos `<option>` dentro de un menú desplegable.

```html
<select>
    <optgroup label="Frutas">
        <option value="manzana">Manzana</option>
        <option value="naranja">Naranja</option>
    </optgroup>
    <optgroup label="Verduras">
        <option value="zanahoria">Zanahoria</option>
        <option value="brocoli">Brócoli</option>
    </optgroup>
</select>
```
### 44. `<option>`
La etiqueta `<option>` representa una opción dentro de un menú desplegable

```html
<select>
    <option value="opcion1">Opción 1</option>
    <option value="opcion2">Opción 2</option>
</select>
```

### 45. `<output>`
El elemento `<output>` representa el resultado de un cálculo o acción realizada por el usuario.

```html
<form oninput="resultado.value=parseInt(a.value)+parseInt(b.value)">
    <input type="number" id="a"> + <input type="number" id="b"> = <output name="resultado" for="a b"></output>
</form>
```

### 46. `<param>`
La etiqueta `<param>` define parámetros para objetos incrustados con `<object>`.

```html
<object data="movie.swf" type="application/x-shockwave-flash">
    <param name="autoplay" value="true">
</object>
```
### 47. `<pre>`
La etiqueta `<pre>` se usa para mostrar texto preformateado, respetando los espacios y saltos de línea.

```html
<pre>
    Línea 1
    Línea 2
    Línea 3
</pre>
```

### 48. `<progress>`
El elemento `<progress>` representa el progreso de una tarea o proceso.

```html
<progress value="70" max="100">70%</progress>
```

### 49. `<q>`
La etiqueta <q> define una cita breve, representada entre comillas.

```html
<p>Albert Einstein dijo: <q>La imaginación es más importante que el conocimiento.</q></p>
```

### 50. `<script>`
El elemento `<script>` se utiliza para insertar o enlazar scripts en JavaScript.

```html
<script src="script.js"></script>
```

### 51. `<select>`
El elemento `<select>` crea un menú desplegable.

```html
<select>
    <option value="1">Opción 1</option>
    <option value="2">Opción 2</option>
</select>
```

### 52. `<small>`
La etiqueta <small> reduce el tamaño del texto.

```html
<p>Este es un texto <small>más pequeño</small>.</p>
```

### 53. `<source>`
El elemento `<source>` define múltiples recursos para elementos como `<audio>` o `<video>`.

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogv" type="video/ogg">
</video>
```

### 54. `<span>`
El elemento `<span>` es un contenedor genérico en línea para agrupar texto o contenido.

```html
<p>Este es un <span class="resaltado">texto en línea</span>.</p>
```

### 55. `<style>`
La etiqueta `<style>` contiene reglas CSS que se aplican al documento HTML.

```html
<style>
    p {
        color: blue;
    }
</style>
```

### 56. `<sub>`
La etiqueta `<sub>` muestra texto en subíndice.

```html
<p>H<sub>2</sub>O es agua.</p>
```

### 57. `<summary>`
El elemento `<summary>` proporciona un encabezado visible para un elemento `<details>`.

```html
<details>
    <summary>Más información</summary>
    <p>Este texto está oculto hasta que se haga clic en el resumen.</p>
</details>
```

### 58. `<sup>`
La etiqueta `<sup>` muestra texto en superíndice.

```html
<p>El valor de x<sup>2</sup> es x multiplicado por sí mismo.</p>
```
### 59. `<table>`
El elemento `<table>` crea una tabla en HTML.

```html
<table>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Juan</td>
        <td>30</td>
    </tr>
</table>
```

### 60. `<tbody>`
La etiqueta `<tbody>` agrupa el contenido del cuerpo de una tabla.

```html
<table>
    <thead>
        <tr><th>Encabezado</th></tr>
    </thead>
    <tbody>
        <tr><td>Celda</td></tr>
    </tbody>
</table>
```
### 61. `<td>`, `<th>` y `<tr>`

- `<td>`: Representa una celda de datos.
- `<th>`: Representa una celda de encabezado.
- `<tr>`: Define una fila dentro de la tabla.

```html
<table>
    <tr>
        <th>Encabezado 1</th>
        <th>Encabezado 2</th>
    </tr>
    <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
    </tr>
</table>
```

### 62. `<textarea>`
El elemento `<textarea>` crea un área de texto para la entrada de varias líneas.

```html
<textarea rows="4" cols="50">Texto aquí...</textarea>
```

### 63. `<tfoot>`
El elemento `<tfoot>` agrupa el pie de una tabla.

```html
<table>
    <thead>
        <tr><th>Encabezado</th></tr>
    </thead>
    <tfoot>
        <tr><td>Pie de tabla</td></tr>
    </tfoot>
    <tbody>
        <tr><td>Celda</td></tr>
    </tbody>
</table>
```

### 64. `<thead>`
La etiqueta `<thead>` agrupa el encabezado de una tabla.

```html
<table>
    <thead>
        <tr><th>Encabezado</th></tr>
    </thead>
</table>
```

### 65. `<time>`
El elemento `<time>` representa una fecha u hora.

```html
<time datetime="2024-01-01">1 de enero de 2024</time>
```

### 66. `<title>`
La etiqueta `<title>` define el título de la página web, que se muestra en la pestaña del navegador.

```html
<title>Mi página web</title>
```

### 67. `<track>`
La etiqueta `<track>` se utiliza para definir pistas de texto en medios, como subtítulos, descripciones o capítulos para los elementos multimedia como `<video>` y `<audio>`. Esta etiqueta permite añadir subtítulos o descripciones en varios idiomas.

#### Atributos importantes:
- `kind`: Define el tipo de pista (subtitles, captions, descriptions, chapters, metadata).
- `src`: Indica la ruta del archivo de la pista.
- `srclang`: Especifica el idioma de la pista.
- `label`: Nombre visible de la pista.

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="subtitulos_es.vtt" kind="subtitles" srclang="es" label="Español">
    <track src="subtitulos_en.vtt" kind="subtitles" srclang="en" label="Inglés">
</video>
```

En este ejemplo, el video tiene dos pistas de subtítulos, una en español y otra en inglés.

### 68. `<video>`
La etiqueta `<video>` se utiliza para incrustar contenido de video directamente en una página web. Soporta múltiples fuentes a través de etiquetas `<source>`, permitiendo diferentes formatos para garantizar la compatibilidad con diversos navegadores.

#### Atributos importantes:
- `controls`: Muestra los controles de reproducción (play, pause, volumen, etc.).
- `autoplay`: Reproduce el video automáticamente (aunque en muchos navegadores está desactivado por motivos de usuario).
- `loop`: Hace que el video se repita una vez finalizado.
- `muted`: Silencia el audio del video.
- `poster`: Especifica una imagen que se mostrará antes de que comience la reproducción.
- `preload`: Indica si se debe cargar el video antes de que el usuario interactúe con él.

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogv" type="video/ogg">
    Tu navegador no soporta videos.
</video>
```
Este ejemplo incrusta un video que se reproducirá en formato MP4 o OGG según el navegador.

### 69. `<wbr>`
La etiqueta `<wbr>` (Word Break Opportunity) se utiliza para sugerir puntos en una palabra o frase donde el navegador puede insertar un salto de línea si es necesario. Esto es útil para prevenir problemas con palabras largas que puedan afectar el diseño de la página.

```html
<p>EsteEsUnTexto<wbr>MuyLargoQueNo<wbr>CabeEnUnaLínea.</p>
```

En este ejemplo, si la palabra "EsteEsUnTextoMuyLargoQueNoCabeEnUnaLínea" es demasiado larga para una línea, el navegador puede dividirla en los puntos donde se ha colocado la etiqueta `<wbr>`.

