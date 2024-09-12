---
title: Introduccion a HTML
---

HTML (HyperText Markup Language) es el lenguaje estándar para crear sitios web. Proporciona la estructura básica del contenido que se muestra en el navegador, permitiendo definir textos, imágenes, enlaces, tablas, formularios, entre otros elementos visuales.

## Estructura básica de un documento HTML

Un archivo HTML tiene una estructura básica que sigue el siguiente formato:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es un documento HTML básico.</p>
</body>
</html>
```

### Descripción de las etiquetas principales

1. ***`<!DOCTYPE html>`***: Indica al navegador que estamos utilizando HTML5.
2. ***`<html>`***: La etiqueta raíz que envuelve todo el contenido del documento HTML.
3. ***`<head>`***: Contiene información meta sobre el documento, como el conjunto de caracteres, el título de la página y enlaces a hojas de estilo o scripts.
4. ***`<meta charset="UTF-8">`***: Establece el conjunto de caracteres para la página, garantizando que se muestren correctamente los símbolos y caracteres especiales.
5. ***`<title>`***: Define el título que aparecerá en la pestaña del navegador.
6. ***`<body>`***: Contiene todo el contenido visible de la página, como texto, imágenes y otros elementos.

## Etiquetas comunes en HTML

### 1. Encabezados
Los encabezados se utilizan para definir títulos en la página y van desde **`<h1>`** (el más importante) hasta **`<h6>`** (el menos importante).
```html
<h1>Este es un encabezado de nivel 1</h1>
<h2>Este es un encabezado de nivel 2</h2>
```

### 2. Párrafos
La etiqueta **`<p>`** se usa para crear párrafos de texto.
```html

<p>Este es un párrafo de ejemplo.</p>

```

### 3. Enlaces
Para agregar un enlace a otra página, utilizamos la etiqueta **`<a>`** con el atributo *href*:

```html

<a href="https://www.ejemplo.com">Visita Ejemplo</a>

```

### 4. Imágenes
Para insertar una imagen, usamos la etiqueta **`<img>`** con el atributo *src* (fuente) y opcionalmente *alt* (texto alternativo):
```html

<img src="imagen.jpg" alt="Descripción de la imagen">

```

### 5. Listas
Existen dos tipos principales de listas en HTML: ordenadas y desordenadas.

- **Lista desordenada**:
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

- **Lista ordenada**:
```html
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ol>
```

## Comentarios en HTML
Para agregar un comentario que no será visible en el navegador, utilizamos la siguiente sintaxis:
```html

<!-- Este es un comentario -->

```

## Conclusión

HTML es el lenguaje básico para estructurar contenido en la web. A lo largo de este archivo vimos una introducción a su estructura general y las etiquetas más comunes que permiten crear contenido simple pero efectivo. A partir de aquí podemos profundizar en temas como formularios, tablas, y elementos semánticos.


