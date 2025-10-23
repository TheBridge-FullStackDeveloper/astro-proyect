---
title: Elementos semánticos en HTML
description: ""
pubDate: '01/02/2024'
collection: html
---

Los elementos semánticos de HTML son aquellos que aportan significado al contenido, indicando al navegador y a los desarrolladores cuál es el propósito o función de cada parte de la página.
Mejoran la accesibilidad, la estructura lógica del documento y el posicionamiento SEO.

## Estructura del documento

- `<html>`: Elemento raíz del documento.
- `<head>`: Contiene metadatos y configuraciones.
- `<body>`: Contiene el contenido visible.
- `<header>`: Encabezado de página o sección.
- `<nav>`: Bloque de enlaces de navegación.
- `<main>`: Contenido principal del documento.
- `<section>`: Sección temática del contenido.
- `<article>`: Contenido independiente o autónomo.
- `<aside>`: Contenido complementario o lateral.
- `<footer>`: Pie de página o cierre de una sección.
- `<address>`: Información de contacto o autoría.

## Texto y contenido

- `<h1>...<h6>`: Encabezados jerárquicos.
- `<p>`: Párrafo de texto.
- `<blockquote>`: Cita larga.
- `<q>`: Cita corta.
- `<abbr>`: Abreviatura.
- `<cite>`: Referencia a una fuente o obra.
- `<dfn>`: Definición de un término.
- `<time>`: Fecha u hora.
- `<code>`: Fragmento de código.
- `<var>`: Variable.
- `<samp>`: Resultado de un programa.
- `<kbd>`: Entrada de teclado.
- `<pre>`: Texto preformateado.
- `<em>`: Énfasis semántico.
- `<strong>`: Énfasis importante.
- `<mark>`: Texto resaltado.
- `<small>`: Texto menos relevante.
- `<del>`: Texto eliminado.
- `<ins>`: Texto insertado.
- `<hgroup>`: agrupa un conjunto de encabezados (por ejemplo, título y subtítulo).  
- `<sub>`: muestra texto en subíndice.  
- `<sup>`: muestra texto en superíndice.  


## Listas y definiciones

- `<ul>`: lista no ordenada.  
- `<ol>`: lista ordenada.  
- `<li>`: elemento de lista dentro de `<ul>` o `<ol>`.  
- `<dl>`: lista de definiciones.  
- `<dt>`: término que se define dentro de un `<dl>`.  
- `<dd>`: descripción o definición asociada al `<dt>`.  


## Tablas

- `<table>`: Tabla de datos.
- `<caption>`: Título o descripción de la tabla.
- `<thead>`: Encabezado de la tabla.
- `<tbody>`: Cuerpo principal de la tabla.
- `<tfoot>`: Pie de tabla.
- `<tr>`: Fila de tabla.
- `<th>`: Celda de encabezado.
- `<td>`: Celda de datos.
- `<col>`: Define una columna.
- `<colgroup>`: Agrupa columnas.

## Formularios e interacción

- `<form>`: Contenedor de campos de entrada.
- `<label>`: Etiqueta asociada a un campo.
- `<input>`: Campo de entrada.
- `<textarea>`: Área de texto multilínea.
- `<select>`: Lista desplegable.
- `<option>`: Opción de selección.
- `<optgroup>`: Grupo de opciones.
- `<button>`: Botón interactivo.
- `<fieldset>`: Agrupa controles relacionados.
- `<legend>`: Título del `<fieldset>`.
- `<output>`: Resultado calculado.
- `<meter>`: Medición dentro de un rango.
- `<progress>`: Progreso de una tarea.
- `<datalist>`: Lista de sugerencias para `<input>`.
- `<data>`: Vincula texto visible con un valor de datos.

## Multimedia

- `<figure>`: Contenedor independiente (imagen, código, diagrama…).
- `<figcaption>`: Leyenda o descripción de una figura.
- `<picture>`: Imagen adaptable.
- `<img>`: Imagen descriptiva.
- `<audio>`: Contenido de audio.
- `<video>`: Contenido de video.
- `<track>`: Subtítulos o descripciones.
- `<map>`: Mapa de imagen.
- `<area>`: Área clicable dentro de un mapa.
- `<source>`: Fuente alternativa para medios.
- `<canvas>`: Dibujo dinámico mediante JavaScript.
- `<embed>`: Inserta contenido externo.
- `<object>`: Incrusta recursos externos.
- `<param>`: Parámetro para `<object>`.
- `<iframe>`: Documento embebido.

## Secciones interactivas

- `<details>`: Contenedor desplegable.
- `<summary>`: Encabezado visible de `<details>`.
- `<dialog>`: define un cuadro de diálogo o ventana modal.  
- `<menu>`: representa un menú de comandos o contexto.  

## Metadatos y configuración

- `<title>`: Título del documento (pestaña del navegador).
- `<meta>`: Metadatos del documento.
- `<link>`: Relación con recursos externos.
- `<style>`: Reglas CSS embebidas.
- `<script>`: Código JavaScript.
- `<noscript>`: Contenido alternativo cuando JS está desactivado.
- `<base>`: URL base del documento.

<br>

```html
<header>
    <h1>Mi sitio web</h1>
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Nuevo artículo</h2>
        <p>Contenido principal del artículo.</p>
    </article>

    <aside>
        <h3>Notas</h3>
        <p>Información adicional relacionada.</p>
    </aside>

    <figure>
        <img src="foto.jpg" alt="Descripción de la foto">
        <figcaption>Una imagen con su descripción.</figcaption>
    </figure>

    <details>
        <summary>Leer más</summary>
        <p>Este texto se muestra al expandir.</p>
    </details>

    <p>Publicado el <time datetime="2025-01-01">1 de enero de 2025</time>.</p>
</main>

<footer>
    <address>Contacto: info@ejemplo.com</address>
    <p>Derechos reservados</p>
</footer>

```

## Beneficios de usar elementos semánticos

1. **Accesibilidad**: Los lectores de pantalla pueden interpretar mejor el contenido.
2. **SEO**: Los motores de búsqueda comprenden mejor el contenido de la página, lo que mejora su clasificación.
3. **Mantenibilidad**: El código es más fácil de leer y mantener.

## Conclusión

El uso de elementos semánticos ayuda a crear páginas **estructuradas, accesibles y comprensibles**, tanto para los usuarios como para las máquinas.
