---
title: Propiedades básicas de CSS
description: ""
pubDate: '03/03/2024'
collection: css
---

Las **propiedades de CSS** definen cómo se muestran los elementos HTML en la página.  
Cada propiedad controla un aspecto del estilo visual, como colores, tamaños, márgenes o fuentes.

## Estructura general de una regla CSS

```css
selector {
  propiedad: valor;
}
```

Ejemplo:

```css
h1 {
  color: darkblue;
  font-size: 32px;
}
```

Esto aplicará el color azul oscuro y un tamaño de fuente de 32 px a todos los encabezados `<h1>`.


## Propiedades de color y fondo

### `color`
Define el color del texto.

```css
p {
  color: crimson;
}
```

Puedes usar:
- Nombres de color (`red`, `blue`, `green`)
- Valores hexadecimales (`#ff0000`)
- RGB o RGBA (`rgb(255, 0, 0)` / `rgba(255, 0, 0, 0.5)`)


### `background-color`
Establece el color de fondo de un elemento.

```css
div {
  background-color: lightgray;
}
```


### `background-image`
Permite usar una imagen de fondo.

```css
body {
  background-image: url("fondo.png");
  background-size: cover;
}
```


## Propiedades del modelo de caja (Box Model)

Todo elemento HTML se comporta como una **caja** con:
- `content` (contenido)
- `padding` (espacio interno)
- `border` (borde)
- `margin` (espacio externo)

### `width` y `height`
Definen el tamaño del contenido.

```css
div {
  width: 200px;
  height: 100px;
}
```


### `padding`
Espacio **dentro** del borde del elemento.

```css
div {
  padding: 20px;
}
```

Si usas **un solo valor**, se aplica a **los cuatro lados**.  
Pero puedes definir valores diferentes así:

- `padding: 20px;` → arriba, derecha, abajo e izquierda iguales  
- `padding: 10px 20px;` → 10px arriba y abajo, 20px izquierda y derecha  
- `padding: 10px 20px 30px;` → 10px arriba, 20px izquierda/derecha, 30px abajo  
- `padding: 10px 20px 30px 40px;` → 10px arriba, 20px derecha, 30px abajo, 40px izquierda  

Recuerda: el orden siempre es **en el sentido de las agujas del reloj** : arriba → derecha → abajo → izquierda

También puedes aplicar a lados específicos:
- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`


### `margin`
Espacio **fuera** del borde del elemento.

```css
div {
  margin: 10px;
}
```

Si usas varios valores, se comporta igual que `padding` y también puedes usar las variantes individuales:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

Consejo: los márgenes pueden ser **negativos**, lo que acerca elementos entre sí.

### `border`
Define un borde alrededor del elemento.

```css
div {
  border: 2px solid black;
}
```

También puede desglosarse:
- `border-width`
- `border-style` (solid, dashed, dotted…)
- `border-color`


## Propiedades de texto y fuente

### `font-family`
Define la tipografía del texto.

```css
body {
  font-family: 'Arial', sans-serif;
}
```

Siempre incluye una fuente de respaldo (como `sans-serif` o `serif`).


### `font-size`
Controla el tamaño del texto.

```css
p {
  font-size: 16px;
}
```

Puedes usar unidades como `px`, `em`, `rem` o `%` (ver sección de unidades en CSS)


### `font-weight`
Determina el grosor de la fuente.

```css
strong {
  font-weight: bold;
}
```

Valores posibles: `normal`, `bold`, `lighter` o números (`100` a `900`).


### `text-align`
Alinea el texto dentro del contenedor.

```css
h1 {
  text-align: center;
}
```

Opciones: `left`, `right`, `center`, `justify`.


## Recomendaciones

- Mantén las unidades consistentes (`px`, `em`, `rem`).  
- Usa **clases** descriptivas (por ejemplo, `.boton-principal` en lugar de `.azul`).  
- Agrupa las reglas relacionadas (colores, tipografía, layout…).  
- Evita estilos en línea: usa archivos externos para mantener el código limpio.

