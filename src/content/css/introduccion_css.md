---
title: Introducción a CSS
description: ""
pubDate: '01/03/2024'
collection: css
---

El **CSS (Cascading Style Sheets)** es el lenguaje que describe la apariencia visual de un documento HTML.  
Permite definir colores, tipografías, márgenes, tamaños y la disposición de los elementos en una página web.

## Objetivo
Separar la **estructura** (HTML) del **diseño** (CSS), facilitando la reutilización del código y el mantenimiento del proyecto.

## Cómo se aplica CSS

Existen tres formas principales de incluir CSS en un documento HTML:

### 1. CSS en línea  
Se aplica directamente en el elemento mediante el atributo `style`.

```html
<p style="color: blue;">Texto azul</p>
```

### 2. CSS interno (en el head)  
Se escribe dentro de la etiqueta `<style>` del documento HTML.

```html
<head>
  <style>
    p { color: red; }
  </style>
</head>
```

### 3. CSS externo (archivo .css)  
Es la forma más recomendada.  
Se enlaza mediante la etiqueta `<link>`:

```html
<link rel="stylesheet" href="styles.css">
```

## Cascada y herencia

El nombre **Cascading Style Sheets** proviene de cómo los estilos se aplican:  
las reglas más específicas y más cercanas al elemento tienen prioridad.

Por ejemplo:

```html
p { color: blue; }
.highlight { color: red; }
<p class="highlight">Texto rojo</p>
```

El texto será **rojo** porque la clase `.highlight` tiene más **especificidad** que la regla general para `p`.

## Conceptos clave

- **Cascada:** cuando varios estilos se aplican al mismo elemento, el navegador decide cuál tiene prioridad.  
- **Especificidad:** mide qué tan “fuerte” es una regla de CSS según su tipo (etiqueta, clase o id).  
- **Herencia:** algunas propiedades (como `color` o `font-family`) se heredan de los elementos padres.  

## Estructura básica de una regla CSS

```css
selector {
  propiedad: valor;
}
```

**Ejemplo:**

```css
h1 {
  color: darkblue;
  font-size: 32px;
}
```

Cada regla CSS tiene:
1. Un **selector** (qué elemento afecta).
2. Una o varias **propiedades**.
3. Sus **valores** correspondientes.

