---
title: Elementos no semánticos en HTML
description: ""
pubDate: '01/03/2024'
collection: html
---

Los elementos **no semánticos** en HTML no describen el tipo de contenido que contienen.
Se utilizan principalmente como **contenedores genéricos** o para **dar estructura** o **estilo** mediante CSS o JavaScript.

## Estructura genérica

- `<div>`: Contenedor de bloque sin significado propio.
- `<span>`: Contenedor en línea genérico.

## Estilo y formato visual

- `<b>`: Negrita visual sin énfasis semántico.
- `<i>`: Cursiva visual sin significado.
- `<u>`: Subrayado visual.
- `<s>`: Texto tachado sin relevancia semántica.
- `<br>`: Salto de línea.
- `<hr>`: Línea horizontal separadora.
- `<wbr>`: Indica un posible punto de corte de línea.
- `<bdi>`: Aísla texto con dirección independiente (bidireccional isolation).
- `<bdo>`: Fuerza la dirección del texto (bidireccional override).

## Elementos técnicos o de incrustación sin semántica

- `<canvas>`: Área de dibujo dinámico.
- `<embed>`: Inserta contenido externo (PDF, video, etc.).
- `<object>`: Incrusta recursos externos.
- `<param>`: Parámetro de un `<object>`.
- `<iframe>`: Inserta otro documento HTML.
- `<source>`: Define una fuente alternativa para audio o video.

## Elementos de sistema o funcionales

- `<script>`: Inserta o enlaza código JavaScript.
- `<style>`: Contiene reglas CSS internas.
- `<link>`: Enlaza recursos externos (hojas de estilo, iconos…).
- `<meta>`: Define metadatos del documento (charset, viewport, descripción…).
- `<base>`: Define la URL base para los enlaces relativos.
- `<noscript>`: Contenido alternativo si JavaScript está deshabilitado.
