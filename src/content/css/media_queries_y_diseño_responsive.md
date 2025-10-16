---
title: Media Queries y diseño responsive 
description: ""
pubDate: '08/03/2024'
collection: css
---

El diseño **responsive** permite que una página web se adapte automáticamente a distintos tamaños de pantalla (móviles, tablets, ordenadores o monitores grandes).

Para lograrlo, CSS utiliza **media queries**, que aplican reglas de estilo condicionalmente según las características del dispositivo o la ventana del navegador.

## Qué es una media query

Una **media query** permite definir estilos que solo se aplican si se cumple una condición específica (por ejemplo, un ancho de pantalla máximo o mínimo).

**Sintaxis básica:**

```css
@media (condición) {
  /* reglas CSS aquí */
}
```

**Ejemplo:**
```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

En este caso, el color de fondo será gris solo cuando la ventana tenga **768 píxeles o menos** de ancho.

## Tipos de media queries más comunes

- **max-width**  
    Aplica estilos cuando la ventana es igual o menor al valor indicado.

    ```css
    @media (max-width: 600px) {
    p {
        font-size: 14px;
    }
    }
    ```

- **min-width**  
    Aplica estilos cuando la ventana es igual o mayor al valor indicado.

    ```css
    @media (min-width: 1024px) {
    p {
        font-size: 18px;
    }
    }
    ```

- **Entre rangos de ancho**
    ```css
    @media (min-width: 600px) and (max-width: 1024px) {
    p {
        font-size: 16px;
    }
    }
    ```

## Breakpoints recomendados

Los *breakpoints* son los puntos donde el diseño cambia.  
No son reglas fijas, pero estos valores son habituales:

- **0–480px:** móviles pequeños  
- **481–768px:** móviles grandes / tablets verticales  
- **769–1024px:** tablets horizontales / portátiles pequeños  
- **1025–1200px:** pantallas medianas  
- **1201px o más:** pantallas grandes

Ejemplo con varios breakpoints:

```css
@media (max-width: 480px) {
  body { font-size: 14px; }
}

@media (max-width: 768px) {
  body { font-size: 15px; }
}

@media (max-width: 1024px) {
  body { font-size: 16px; }
}
```

## Diseño mobile-first

La práctica más moderna es usar el enfoque **mobile-first**, es decir, escribir primero los estilos base para móviles y luego ampliar con `min-width` según el tamaño de pantalla.

```css
/* Estilos base para móvil */
body {
  font-size: 14px;
  padding: 10px;
}

/* Tablets y más grandes */
@media (min-width: 768px) {
  body {
    font-size: 16px;
    padding: 20px;
  }
}

/* Escritorios grandes */
@media (min-width: 1200px) {
  body {
    font-size: 18px;
    padding: 40px;
  }
}
```

Ventajas del enfoque mobile-first:
- Mejora la velocidad de carga en móviles.  
- Se adapta mejor al comportamiento progresivo (añadir, no sobrescribir).  
- Facilita el mantenimiento del CSS.

## Uso con Flexbox y Grid

**Ejemplo de Flexbox adaptativo:**

```css
.contenedor {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .contenedor {
    flex-direction: row;
  }
}
```

El layout será una columna en móvil y una fila en pantallas grandes.

**Ejemplo con Grid:**

```css
.galeria {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 768px) {
  .galeria {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1200px) {
  .galeria {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

Esto crea una galería que se adapta automáticamente al tamaño de la pantalla.

## Propiedades relacionadas

- `aspect-ratio`: define proporciones fijas sin depender del ancho o alto.
- `clamp()`: ajusta valores con un mínimo, preferido y máximo.
- `max()`, `min()`: comparan valores para adaptar dinámicamente propiedades.

**Ejemplo con clamp():**

```css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

Esto hace que el tamaño de la fuente crezca con el ancho de pantalla, pero sin salirse de los límites establecidos.

## Otras media features útiles

Puedes aplicar condiciones adicionales según el dispositivo o entorno:

```css
@media (orientation: portrait) { ... }   /* modo vertical */
@media (orientation: landscape) { ... }  /* modo horizontal */

@media (prefers-color-scheme: dark) { ... } /* modo oscuro del sistema */

@media (hover: hover) { ... } /* si el dispositivo tiene puntero (ratón) */
```

**Ejemplo práctico:**

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #121212;
    color: #e0e0e0;
  }
}
```

## Buenas prácticas

- Usa el enfoque **mobile-first** con `min-width`.  
- Define **breakpoints por contenido**, no por dispositivo.  
- Usa unidades relativas (`em`, `rem`, `vw`, `vh`) para mayor flexibilidad.  
- Prueba el diseño en distintos navegadores y resoluciones.  
- Evita anidar demasiadas media queries en un mismo bloque.  
- Usa variables CSS para breakpoints, por ejemplo:

    ```css
    :root {
    --tablet: 768px;
    --desktop: 1200px;
    }

    @media (min-width: var(--tablet)) { ... }
    @media (min-width: var(--desktop)) { ... }
    ```
