---
title: Modelo de caja en profundidad (Box Model avanzado)
description: ""
pubDate: '05/03/2024'
collection: css
---

El **modelo de caja** es la base del diseño en CSS.  
Cada elemento HTML se representa como una caja compuesta por cuatro áreas concéntricas:

1. **Contenido (content)** – el texto o los elementos hijos.
2. **Relleno (padding)** – el espacio entre el contenido y el borde.
3. **Borde (border)** – el contorno visible que rodea al padding.
4. **Margen (margin)** – el espacio exterior entre el elemento y los demás.

## Estructura visual

![Modelo de caja en CSS](/public/images/boxmodel.webp)

## Propiedades principales

-- **content**  
Área donde se muestra el contenido real del elemento (texto, imágenes, otros bloques).

```css
div {
  width: 200px;
  height: 100px;
}
```

-- **padding**  
Espacio interno entre el contenido y el borde.

```css
div {
  padding: 20px;
}
```

-- **border**  
Borde visible alrededor del padding y el contenido.

```css
div {
  border: 3px solid black;
}
```

-- **margin**  
Espacio externo que separa la caja de los demás elementos.

```css
div {
  margin: 15px;
}
```

## Tamaño total de la caja

Por defecto, el navegador calcula el tamaño total así:

- ancho total = width + padding + border
- alto total = height + padding + border

Ejemplo:

```css
div {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
}
```

Tamaño visual final:

- ancho total = 200 + 10 + 10 + 5 + 5 = 230px
- alto total = 100 + 10 + 10 + 5 + 5 = 130px


## box-sizing

-- **content-box (por defecto):**  
El ancho y alto incluyen solo el contenido; el padding y el borde se añaden aparte.

```css
div {
  box-sizing: content-box;
}
```

-- **border-box:**  
El ancho y alto incluyen padding y borde.  
El tamaño total no crece.

```css
div {
  box-sizing: border-box;
}
```

Ejemplo comparativo:

```css
div.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

div.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

**Recomendación:**  
Usa `box-sizing: border-box;` de forma global para simplificar el diseño.

```css
* {
  box-sizing: border-box;
}
```

## Propiedades relacionadas

- `outline`: similar al borde, pero no afecta el tamaño total.  
- `overflow`: controla qué ocurre si el contenido es más grande que la caja (`visible`, `hidden`, `scroll`, `auto`).  
- `display`: define cómo se comporta la caja (`block`, `inline`, `flex`, etc.).

## Buenas prácticas

- Define `box-sizing: border-box` en todo el proyecto.  
- Ajusta márgenes y paddings con unidades relativas (`rem`, `em`, `%`) para mejorar la adaptabilidad.  
- Usa `overflow: auto` o `hidden` si el contenido se desborda.  
- Evita márgenes negativos salvo que conozcas bien su efecto.


