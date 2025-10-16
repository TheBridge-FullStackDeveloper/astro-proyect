---
title: Flexbox y Grid
description: ""
pubDate: '07/03/2024'
collection: css
---

**Flexbox** y **Grid** son dos potentes sistemas de diseño modernos que permiten crear estructuras flexibles y adaptativas sin depender de floats o posicionamientos manuales.


## Flexbox (Flexible Box Layout)

Flexbox está pensado para distribuir elementos **en una sola dirección**: fila o columna.  
Es ideal para menús, cabeceras, barras laterales o agrupaciones de elementos.

### Activar un contenedor flexible

```css
.contenedor {
  display: flex;
}
```

Esto convierte a los elementos hijos en **ítems flexibles**, que pueden alinearse y distribuirse fácilmente.


### Dirección de los elementos

```css
.contenedor {
  display: flex;
  flex-direction: row;
}
```

Valores posibles:
- `row`: en fila (horizontal, por defecto)
- `row-reverse`: fila invertida
- `column`: en columna (vertical)
- `column-reverse`: columna invertida


### Alineación y distribución

- **justify-content**: alinea los elementos en el eje principal (horizontal si es `row`).

    ```css
    .contenedor {
    justify-content: space-between;
    }
    ```

    Valores comunes:
    - `flex-start`: al inicio  
    - `flex-end`: al final  
    - `center`: centrado  
    - `space-between`: con espacios iguales entre los elementos  
    - `space-around`: con espacio igual alrededor de cada elemento  


- **align-items**: alinea los elementos en el eje secundario (vertical si `row`).

    ```css
    .contenedor {
    align-items: center;
    }
    ```

    Valores comunes:
    - `stretch`: ocupa toda la altura disponible (por defecto)  
    - `flex-start`: arriba  
    - `flex-end`: abajo  
    - `center`: centrado verticalmente  
    - `baseline`: alinea según la línea base del texto  


### Alineación múltiple

- **align-content**: controla el espacio entre líneas cuando hay varias filas (con `flex-wrap` activado).

    ```css
    .contenedor {
    align-content: space-around;
    }
    ```

### Ajuste y envoltura

```css
.contenedor {
  flex-wrap: wrap;
}
```

Esto permite que los elementos pasen a la siguiente línea si no caben en el espacio horizontal.


### Ejemplo completo con Flexbox

html:

```html
<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
css:

```css
.contenedor {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background: #e0e0e0;
}

.item {
  background: #4a90e2;
  color: white;
  padding: 20px;
  flex: 1;
  margin: 10px;
  text-align: center;
}
```



## Grid (CSS Grid Layout)

**Grid** está pensado para organizar elementos **en dos dimensiones** (filas y columnas).  
Es ideal para crear estructuras completas de página, dashboards o galerías.

### Crear una cuadrícula básica

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Esto crea un grid de tres columnas de igual tamaño.  
`1fr` significa “una fracción del espacio disponible”.



### Definir filas

```css
.contenedor {
  grid-template-rows: 100px 200px auto;
}
```

Cada fila puede tener una altura fija o automática.



### Espaciado entre celdas

```css
.contenedor {
  gap: 20px;
}
```

También puedes usar `row-gap` o `column-gap` por separado.

### Ubicación de elementos

Puedes posicionar un ítem en cualquier parte del grid con líneas de inicio y fin.

```css
.item1 {
  grid-column: 1 / 3; /* ocupa de la columna 1 a la 2 */
  grid-row: 1 / 2;
}
```

O usar nombres automáticos con `grid-area`.

### Distribución avanzada

```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
```

- `justify-items` alinea horizontalmente dentro de cada celda.  
- `align-items` alinea verticalmente.  



### Ejemplo completo con Grid

html:
```html
<div class="contenedor">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>
```
css:
```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: #e0e0e0;
}

.item {
  background: #4a90e2;
  color: white;
  padding: 20px;
  text-align: center;
}
```



## Diferencias entre Flexbox y Grid

- **Flexbox** → trabaja en **una dimensión** (fila o columna).  
- **Grid** → trabaja en **dos dimensiones** (filas y columnas).  
- **Flexbox** es ideal para componentes.  
- **Grid** es ideal para estructuras de página completas.  
- Ambos pueden combinarse en el mismo proyecto.



## Buenas prácticas

- Usa **Flexbox** para secciones pequeñas (navbars, botones, alineación de contenido).  
- Usa **Grid** para layouts completos (estructuras principales, galerías, paneles).  
- Usa `gap` en lugar de `margin` entre ítems cuando trabajes con Flex o Grid.  
- Prefiere `fr` y unidades relativas (`%`, `rem`, `vh`) para lograr diseños adaptativos.  
- Combina Grid y media queries para crear páginas totalmente responsive.
