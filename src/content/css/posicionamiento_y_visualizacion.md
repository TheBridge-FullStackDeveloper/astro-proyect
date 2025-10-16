---
title: Posicionamiento y visualización en CSS
description: ""
pubDate: '06/03/2024'
collection: css
---

El posicionamiento y la visualización controlan cómo se muestran los elementos en una página y cómo interactúan entre sí dentro del flujo del documento.

## Propiedad display

La propiedad `display` define cómo se comporta una caja en el diseño.

```css
.elemento {
  display: block;
}
```

Principales valores:

- **block**  
El elemento ocupa todo el ancho disponible y comienza en una nueva línea.  
Ejemplo: `<div>`, `<p>`, `<h1>`.

- **inline**  
El elemento ocupa solo el espacio necesario y no inicia nueva línea.  
Ejemplo: `<span>`, `<a>`.

- **inline-block**  
Combina ambos comportamientos: se comporta como inline pero admite propiedades de ancho, alto, margen y padding.

- **none**  
El elemento no se muestra ni ocupa espacio en el flujo del documento.

- **flex**  
Activa un contenedor flexible (layout basado en Flexbox).

- **grid**  
Activa un contenedor de cuadrícula (layout basado en Grid CSS).

- **table**, **list-item** y otros  
Simulan el comportamiento de tablas o listas.

## Propiedad visibility

Determina si un elemento es visible, pero sin eliminar su espacio en el documento.

```css
.elemento {
  visibility: hidden;
}
```

Diferencia con `display: none`:  
- `visibility: hidden` oculta el elemento pero deja su espacio vacío.  
- `display: none` lo elimina completamente del flujo.

## Posicionamiento con position

La propiedad `position` define cómo se ubica un elemento en la página.

```css
.elemento {
  position: relative;
}
```

Tipos de posicionamiento:

- **static (por defecto)** 
Los elementos se colocan en orden natural (flujo normal del documento).

- **relative**  
Permite desplazar un elemento respecto a su posición original.

    ```css
    .caja {
    position: relative;
    top: 10px;
    left: 20px;
    }
    ```

- **absolute**  
Posiciona el elemento de forma absoluta respecto al primer contenedor con posición relativa o al `body` si no hay ninguno.

    ```css
    .caja {
    position: absolute;
    top: 50px;
    right: 30px;
    }
    ```

- **fixed**  
El elemento permanece fijo en la ventana, incluso al hacer scroll.

    ```css
    .menu {
    position: fixed;
    top: 0;
    width: 100%;
    }
    ```

- **sticky**  
El elemento se comporta como relativo hasta que el scroll alcanza una posición determinada, donde se fija.

    ```css
    .header {
    position: sticky;
    top: 0;
    }
    ```

## Propiedades top, right, bottom, left

Se utilizan junto con `position` para mover el elemento respecto a su referencia.

```css
div {
position: absolute;
top: 20px;
left: 40px;
}
```

## Propiedad z-index

Controla el orden de apilamiento de los elementos superpuestos.  
Un valor mayor indica que el elemento estará por encima de los demás.

```css
.capa1 {
  position: absolute;
  z-index: 1;
}

.capa2 {
  position: absolute;
  z-index: 5;
}
```

El elemento con `z-index: 5` se mostrará encima del de `z-index: 1`.

## Propiedad float

Permite que los elementos se alineen a un lado del contenedor, con el texto fluyendo a su alrededor.

```css
img {
  float: right;
  margin: 10px;
}
```

Para evitar que otros elementos floten a su lado, se usa `clear`.

```css
div {
  clear: both;
}
```

## Propiedad overflow

Controla lo que sucede cuando el contenido excede el tamaño del contenedor.

```css
.caja {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

Valores posibles:
- `visible`: el contenido desborda sin recorte (por defecto).  
- `hidden`: el contenido que sobresale se oculta.  
- `scroll`: siempre muestra barras de desplazamiento.  
- `auto`: agrega barras solo si es necesario.

## Combinación práctica

Ejemplo completo que combina varias propiedades:

html:

```html
<div class="contenedor">
  <div class="caja caja1">Caja 1</div>
  <div class="caja caja2">Caja 2</div>
</div>
```
css:

```css
.contenedor {
  position: relative;
  width: 400px;
  height: 200px;
  border: 1px solid black;
}

.caja {
  width: 100px;
  height: 100px;
  position: absolute;
}

.caja1 {
  background: lightblue;
  top: 20px;
  left: 30px;
  z-index: 1;
}

.caja2 {
  background: coral;
  top: 40px;
  left: 60px;
  z-index: 2;
}
```

En este ejemplo, `caja2` se muestra por encima de `caja1` gracias al valor mayor de `z-index`.

## Buenas prácticas

- Usa `position: relative` y `absolute` solo cuando sea necesario.  
- Evita usar `float` para maquetación moderna (usa Flexbox o Grid).  
- Utiliza `z-index` solo en elementos posicionados (no funciona con `static`).  
- Prefiere `sticky` o `fixed` para menús, cabeceras y barras laterales.  
- Comprueba el flujo del documento con el inspector del navegador para entender cómo se comportan los elementos.