---
title: Elementos semánticos en HTML
description: "esta es la descripcion a elementos semánticos en HTML"
pubDate: '01/02/2024'
collection: html
---

Los elementos semánticos de HTML son aquellos que describen claramente su propósito tanto para el navegador como para el desarrollador. Estos elementos mejoran la accesibilidad y el SEO de las páginas web.

## Ejemplos de elementos semánticos

1. `<header>`: Define el encabezado de una sección o página.
2. `<nav>`: Representa una sección de navegación.
3. `<article>`: Contiene contenido independiente que puede ser distribuido de forma aislada.
4. `<section>`: Representa una sección genérica de contenido.
5. `<footer>`: Define el pie de página de una sección o documento.
6. `<aside>`: Contenido relacionado lateralmente con el contenido principal.
7. `<main>`: Indica el contenido principal de la página.

```html
<header>
    <h1>Mi sitio web</h1>
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Título del artículo</h2>
        <p>Contenido principal del artículo.</p>
    </article>

    <aside>
        <h3>Información adicional</h3>
        <p>Esto es un contenido relacionado pero no esencial.</p>
    </aside>
</main>

<footer>
    <p>Derechos reservados &copy; 2024</p>
</footer>
```

## Beneficios de usar elementos semánticos

1. **Accesibilidad**: Los lectores de pantalla y otras tecnologías asistivas pueden interpretar mejor el contenido.
2. **SEO**: Los motores de búsqueda comprenden mejor el contenido de la página, lo que mejora su clasificación.
3. **Legibilidad**: El código es más fácil de leer y entender por otros desarrolladores.

## Conclusión

Los elementos semánticos hacen que el HTML sea más legible tanto para los humanos como para las máquinas, promoviendo buenas prácticas de desarrollo y mejorando la experiencia del usuario.

