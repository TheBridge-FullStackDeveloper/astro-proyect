---
title: Selectores y especifidad
description: ""
pubDate: '02/03/2024'
collection: css
---

Los **selectores** en CSS se utilizan para apuntar a elementos HTML específicos y aplicarles estilos.  
Aprender a combinarlos correctamente es esencial para crear diseños potentes y mantener el código limpio.

## Tipos de selectores principales

### 1. Selectores de tipo (etiqueta)
Afectan a todos los elementos de un tipo determinado.

```css
p {
  color: blue;
}
```

Esto aplicará el color azul a todos los párrafos (`<p>`).

### 2. Selectores de clase
Usan el prefijo "." y se aplican a cualquier elemento con esa clase.

html:

```html
<p class="highlight">Texto resaltado</p>
```
css:

```css
.highlight {
  background-color: yellow;
}
```

### 3. Selectores de ID
Usan el prefijo `#` y deben ser **únicos** dentro del documento.

html:

```html
<h1 id="titulo">Encabezado principal</h1>
```

css:

```css
#titulo {
  font-size: 28px;
}
```




### 4. Selectores descendientes
Permiten aplicar estilos a elementos dentro de otros.

```css
article p {
  color: gray;
}
```

Esto afecta solo a los párrafos dentro de un `<article>`.


### 5. Selectores combinados
Se pueden combinar varios tipos para crear reglas más específicas.

```css
div.card > p.note {
  font-style: italic;
}
```

`>` indica que el párrafo debe ser hijo directo del `div` con clase `.card`.


## Especificidad en CSS

Cuando varias reglas afectan al mismo elemento, el navegador elige cuál aplicar según su **nivel de especificidad**.  
Piensa en la especificidad como una **escalera de prioridades**:  
cuanto más arriba estás, más fuerte es tu regla.

1. **Universal, tipo o pseudo-elemento**  
    - Ejemplo: `p`, `::before`  
    - Prioridad baja — se aplica a muchos elementos, por eso es general.

2. **Clase, pseudo-clase o atributo**  
    - Ejemplo: `.highlight`, `:hover`, `[type="text"]`  
    - Más específicas que las etiquetas, ya que apuntan a grupos concretos de elementos.

3. **ID**  
    - Ejemplo: `#header`  
    - Alta prioridad. Solo debe haber **un ID por elemento**.

4. **Estilo en línea (atributo style)**  
    - Ejemplo: `style="color:red;"`  
    - Prioridad muy alta. Los estilos en línea **sobrescriben casi todo**.

5. **`!important`**  
    - Ejemplo: `color: red !important;`  
**Ignora la cascada** y sobrescribe todo lo anterior.  
Úsalo solo en casos muy necesarios, ya que complica el mantenimiento del código.


### Ejemplo práctico


html:

```html
<p id="destacado" class="texto">Hola Mundo</p>
```

css:

```css
p { color: blue; }          /* especificidad baja */
.texto { color: red; }      /* más específica */
#destacado { color: green; } /* aún más específica */
```

El texto se mostrará **verde**, porque el ID tiene mayor prioridad.


## Evita conflictos con `!important`

```css
p {
  color: black !important;
}
```

Esto fuerza el color a negro, incluso si hay reglas más específicas.  
Sin embargo, **no se recomienda abusar de `!important`**, ya que dificulta el mantenimiento.


## Consejos prácticos

- Usa **clases** para estilos reutilizables.  
- Evita el exceso de **IDs**(las clases son más reutilizables) y reglas anidadas profundas.
- Mantén la **especificidad baja** para que los estilos sean fáciles de sobrescribir.  
- Organiza tus selectores por secciones (estructura, componentes, utilidades…).
