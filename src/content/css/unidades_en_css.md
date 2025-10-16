---
title: Unidades en CSS
description: ""
pubDate: '04/03/2024'
collection: css
---

En CSS, las **unidades de medida** se utilizan para definir tamaños, márgenes, tipografía, posiciones y más.  
Podemos dividirlas en dos grandes grupos:

**Unidades absolutas:** tienen un valor fijo y no cambian según el entorno.  
**Unidades relativas:** se adaptan al tamaño del elemento padre o del viewport.

## Unidades absolutas

Las unidades absolutas siempre representan el mismo tamaño, sin importar el dispositivo o la resolución de pantalla.

Ejemplo:

```css
p {
  font-size: 16px;
}
```

Principales unidades absolutas:

- `px` → píxeles (la más usada en pantallas)
- `cm` → centímetros
- `mm` → milímetros
- `in` → pulgadas (1in = 96px)
- `pt` → puntos tipográficos (1pt = 1/72in)
- `pc` → picas (1pc = 12pt)

En la práctica, solo se usa **px** en la mayoría de los casos, ya que las demás se emplean más en impresión que en diseño web.

## Unidades relativas

Las unidades relativas cambian su valor según el contexto del elemento, lo que las hace ideales para **diseños adaptativos** y **responsivos**.

### em – relativo al tamaño de fuente del elemento padre

Si el elemento padre tiene `font-size: 16px;`, entonces `1em = 16px`.

```css
p {
  font-size: 1.5em; /* 1.5 × 16px = 24px */
}
```

Usar `em` permite escalar tamaños automáticamente si se cambia la fuente base del elemento contenedor.

### rem – relativo al tamaño de fuente raíz (html)

A diferencia de `em`, `rem` siempre toma como referencia el tamaño de fuente del elemento raíz (`<html>`).

```css
html { font-size: 16px; }
p { font-size: 2rem; } /* siempre equivale a 32px */
```

Esto garantiza consistencia en todo el sitio, ya que el tamaño depende solo de la raíz del documento.

### % – relativo al elemento contenedor

Se usa para propiedades como `width`, `height`, `margin` o `padding`.

```css
div {
  width: 50%;
}
```

El ancho del `div` será la mitad del ancho del elemento que lo contiene.

### vw y vh – relativo al viewport

- `1vw` equivale al 1% del ancho de la ventana del navegador.  
- `1vh` equivale al 1% de la altura visible.

```css
section {
  width: 100vw;   /* ocupa todo el ancho de la ventana */
  height: 100vh;  /* ocupa toda la altura visible */
}
```

Perfecto para secciones de pantalla completa o "hero sections".

### vmin y vmax

- `vmin` → relativo al lado más pequeño del viewport  
- `vmax` → relativo al lado más grande del viewport

```css
div {
  font-size: 5vmin;
}
```

El tamaño del texto escalará proporcionalmente al tamaño de la ventana del navegador.

## Comparativa práctica

Ejemplo:

```css
html { font-size: 16px; }

.box {
  width: 50%;      /* relativo al contenedor */
  font-size: 1rem; /* relativo al html */
  padding: 2em;    /* relativo a su propia fuente */
}
```

## Consejos de buenas prácticas

- Usa `rem` para mantener tamaños de fuente y espaciados consistentes.  
- Usa `%` para anchos flexibles en diseños fluidos.  
- Usa `vw` y `vh` para secciones que se ajusten al tamaño de pantalla.  
- Evita mezclar unidades absolutas y relativas sin necesidad.  
- Define un tamaño base coherente en el elemento raíz:

```css
html {
  font-size: 16px;
}
```

## Diseño responsive

Puedes combinar unidades relativas con media queries para adaptar tu diseño a distintas pantallas:

```css
@media (max-width: 768px) {
  body {
    font-size: 0.9rem;
  }
}
```

Esto permite que el texto se reduzca automáticamente en dispositivos pequeños.


