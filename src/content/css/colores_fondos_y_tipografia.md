---
title: Colores, fondos y tipografía
description: ""
pubDate: '10/03/2024'
collection: css
---

El color, el fondo y la tipografía son elementos clave del diseño web.  
CSS permite controlar su apariencia con precisión, logrando estilos legibles, coherentes y visualmente atractivos.

## Colores en CSS

Los colores se pueden definir de distintas maneras según la necesidad:

- **Nombres predefinidos**
    ```css
    p {
        color: red;
    }
    ```

- **Valores hexadecimales**
    ```css
    p {
        color: #ff0000;
    }
    ```

- **RGB y RGBA**
    ```css
    p {
        color: rgb(255, 0, 0); /* rojo puro */
        color: rgba(255, 0, 0, 0.5); /* con transparencia */
    }
    ```

- **HSL y HSLA**
    ```css
    p {
        color: hsl(120, 50%, 50%);
        color: hsla(120, 50%, 50%, 0.7);
    }
    ```

- `hsl(hue, saturation, lightness)` permite manipular el tono, saturación y luminosidad.  
- `a` (alpha) controla la opacidad, de 0 a 1.

- **Variables de color (custom properties)**
    ```css
    :root {
    --color-primario: #007acc;
    }

    h1 {
        color: var(--color-primario);
    }
    ```

Las variables permiten mantener consistencia de color en todo el sitio.

## Fondos (background)

Los fondos pueden ser colores planos, degradados o imágenes.

- **Color de fondo**
    ```css
    div {
        background-color: lightgray;
    }
    ```

- **Imagen de fondo**
    ```css
    body {
        background-image: url("fondo.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    ```

- **Degradado como fondo**
    ```css
    section {
        background: linear-gradient(to right, #4a90e2, #50e3c2);
    }
    ```

- **Propiedades útiles de background**
    - `background-color`: define el color base.  
    - `background-image`: establece una imagen o degradado.  
    - `background-repeat`: controla la repetición (`repeat`, `no-repeat`, `repeat-x`, `repeat-y`).  
    - `background-position`: define la posición inicial (`center`, `top`, `bottom`, valores en px o %).  
    - `background-size`: ajusta la imagen (`cover`, `contain` o medidas personalizadas).  
    - `background-attachment`: controla el desplazamiento (`scroll`, `fixed`, `local`).  

- **Ejemplo completo**
    ```css
    header {
        background: url("cabecera.jpg") no-repeat center center / cover;
        color: white;
        height: 300px;
        text-align: center;
    }
    ```

## Tipografía y fuentes

La tipografía define la personalidad del sitio.  
CSS permite controlar la familia de fuentes, el tamaño, el peso, la altura de línea, el espaciado y más.

- **font-family**
    ```css
    body {
        font-family: 'Open Sans', Arial, sans-serif;
    }
    ```

    Incluye siempre fuentes de respaldo (fallbacks) para garantizar compatibilidad.

- **font-size**
    ```css
    h1 {
        font-size: 2rem;
    }
    ```

    Usa unidades relativas (`em`, `rem`, `%`) para adaptabilidad.

- **font-weight**
    ```css
    strong {
        font-weight: bold;
    }
    ```

    Valores: `normal`, `bold`, `lighter`, o numéricos (`100` a `900`).

- **font-style**
    ```css
    em {
        font-style: italic;
    }
    ```

- **line-height**
    ```css
    p {
        line-height: 1.6;
    }
    ```

    Controla el espaciado vertical entre líneas de texto.

- **letter-spacing y word-spacing**
    ```css
    h2 {
        letter-spacing: 2px;
        word-spacing: 5px;
    }
    ```

    Ajustan el espacio entre letras o palabras.

## Cargar fuentes personalizadas

Puedes importar fuentes externas mediante Google Fonts o archivos locales.

**Ejemplo con Google Fonts**
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

**Ejemplo con archivo local**
```css
@font-face {
  font-family: 'MiFuente';
  src: url('fonts/MiFuente.woff2') format('woff2');
}

h1 {
  font-family: 'MiFuente', sans-serif;
}
```

## Transformaciones y decoración de texto

- **text-transform**
    ```css
    h1 {
        text-transform: uppercase;
    }
    ```

    Convierte el texto en mayúsculas, minúsculas o capitaliza la primera letra de cada palabra.

- **text-decoration**
    ```css
    a {
        text-decoration: none;
    }
    ```

    Controla subrayados, tachados, etc.  
    Valores: `underline`, `line-through`, `overline`, `none`.

- **text-shadow**
    ```css
    h1 {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
    ```

    Agrega una sombra al texto.

- **color de fondo detrás del texto**
    ```css
    mark {
        background-color: yellow;
    }
    ```

## Buenas prácticas

- Usa colores con suficiente contraste para la accesibilidad (ver WCAG).  
- Define una paleta coherente de colores primarios y secundarios.  
- Usa variables CSS (`--color-...`) para mantener consistencia visual.  
- Evita fuentes decorativas excesivas: máximo 2 o 3 familias tipográficas por sitio.  
- Usa unidades relativas para tamaños de texto y evita píxeles fijos.  
- Comprueba la legibilidad en diferentes dispositivos.
