---
title: Buenas prácticas
description: ""
pubDate: '12/03/2024'
collection: css
---

Escribir CSS limpio, estructurado y mantenible es tan importante como dominar sus propiedades.  
Un buen diseño no solo debe verse bien, sino ser fácil de actualizar, escalar y optimizar.

## Organización del código

Estructura tu CSS para que sea fácil de leer y mantener.

**Ejemplo básico de orden**
1. Reset o normalización (por ejemplo, normalize.css)
2. Variables y configuraciones globales
3. Estilos base (body, tipografía, enlaces)
4. Layout general (contenedores, cabeceras, pies)
5. Componentes y módulos
6. Utilidades o clases auxiliares

**Ejemplo de estructura**
```css
/* 1. Variables globales */
:root {
  --color-primario: #4a90e2;
  --color-secundario: #50e3c2;
  --fuente-base: 'Roboto', sans-serif;
}

/* 2. Estilos base */
body {
  font-family: var(--fuente-base);
  color: #333;
  background-color: #fafafa;
}

/* 3. Layout */
header, footer {
  background: var(--color-primario);
  color: white;
  padding: 1rem;
}

/* 4. Componentes */
.boton {
  background: var(--color-secundario);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

/* 5. Utilidades */
.texto-centrado {
  text-align: center;
}
```

## Metodologías para escribir CSS mantenible

### BEM (Block Element Modifier)

La metodología **BEM** organiza las clases de forma clara y semántica.

**Ejemplo:**
```html
<div class="tarjeta tarjeta--destacada">
  <h2 class="tarjeta__titulo">Título</h2>
  <p class="tarjeta__descripcion">Descripción del contenido.</p>
</div>
```

**Estructura BEM:**
- **Bloque:** el componente independiente (`tarjeta`)
- **Elemento:** parte interna del bloque (`tarjeta__titulo`)
- **Modificador:** variación o estado (`tarjeta--destacada`)

Ventajas:
- Código más predecible y fácil de escalar.
- Menos colisiones entre estilos.
- Mayor reutilización de componentes.

### OOCSS (Object-Oriented CSS)

Separar la **estructura** del **estilo visual**.  
Por ejemplo, un contenedor `.box` define el layout, mientras que `.tema-azul` define los colores.  
Así se pueden combinar fácilmente.

### SMACSS (Scalable and Modular Architecture for CSS)

Divide el CSS en categorías:
1. Base  
2. Layout  
3. Módulo  
4. Estado  
5. Tema  

Ideal para proyectos grandes o en equipos.

## Uso de variables CSS

Las variables (`custom properties`) hacen el código más dinámico y consistente.

```css
:root {
  --color-acento: #ff5722;
  --espaciado-base: 1rem;
}

button {
  background: var(--color-acento);
  margin: var(--espaciado-base);
}
```

También se pueden redefinir en secciones específicas:

```css
.dark-mode {
  --color-acento: #ff9800;
}
```

## Preprocesadores

Los preprocesadores como **SASS/SCSS** o **LESS** amplían las capacidades del CSS estándar.

Ventajas:
- Variables, funciones y mixins reutilizables.
- Anidación más limpia.
- Importación modular de archivos.
- Código más legible y organizado.

**Ejemplo SCSS**
```scss
$color-principal: #4a90e2;

.boton {
  background: $color-principal;
  &:hover {
    background: darken($color-principal, 10%);
  }
}
```